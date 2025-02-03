<template>
    <!-- Componente refere ao compilado de dados da visita (usuario, ação, dados, etc) -->
    <section class="content">

        <div class="box">
            <!-- Renderiza o tipo e qual unidade será feita o documento de visita -->
            <select class="seletorUnidade" v-model="unidadeEscolhida" @change="selecionarUnidade()">

                <option value="" disabled selected>selecione uma unidade</option> <!-- Placeholder -->
                
                <option v-for="(unidade, index) in opcoesDeUnidades"
                    :key="index"
                    :value="unidade"
                >
                    Unidade - {{ unidade }}
                        
                </option>

            </select>

        </div>

        <div class="box">
            <!-- Recebe componente 'Rotulo' e passa valores via 'props' para componente Filho -->
            <!-- Rotulo: Recebe 'nomes' via 'props' e 'slot' para receber qualquer tipo de valor ou Tipo de Input -->
            <Rotulo labelName="responsável pela solicitação:" lengthInput="small">
                <!-- Input: faz 'two-way-databind' por meio da diretiva 'v-model'-->
                <input type="text" v-model="visita.responsavel" required placeholder="Responsável">
            </Rotulo>

            <MostrarData propsValor="0" propsTexto="data:"/>

        </div>

        <div class="box">
            <Rotulo labelName="identificacao:" lengthInput="large">
                <!-- Input do tipo Select: faz 'two-way-databind' por meio da diretiva 'v-model'-->
                <select v-model="visita.tipo">
                    <option value="" disabled selected>Tipo de Visita</option> <!-- Placeholder -->
                    <!-- Option: percorre arrey de objetos 'tipos' e o 'tipo' selecionada é enviada via 'value' para o 'v-model' no 'select'-->
                    <option v-for="(tipo, index) in tipos"
                        :key="index"
                        :value="tipo"
                    >
                        {{ tipo.toUpperCase() }}
                    </option>
                </select>
            </Rotulo>
        </div>

        <div class="box">
            <Rotulo labelName="Nome: " lengthInput="medium">
                <!-- Input: faz 'two-way-databind' por meio da diretiva 'v-model'-->
                <input type="text" v-model="visita.nome" required placeholder="Nome Completo">
            </Rotulo>
        

            <Rotulo :labelName="windowWidth < 600? 'dn': 'sigss'" lengthInput="small">
                <!-- Input: faz 'two-way-databind' por meio da diretiva 'v-model'-->
                <input type="text" v-model="visita.sigss" required :placeholder="windowWidth < 600? 'data de nascimento': 'código do mv'">
                <!-- OBS: Condicional ternária lida com as possibilidades de execução (Desktop = na Unidade ; Mobile = na Rua) -->
            </Rotulo>

        </div>

        <div class="box">
            <Rotulo labelName="end:" lengthInput="large">
                <!-- Input: faz 'two-way-databind' por meio da diretiva 'v-model'-->
                <input type="text" v-model="visita.end" required placeholder="Endereço Completo">
            </Rotulo>
        </div>

        <div class="box">
            <Rotulo labelName="telefones: " lengthInput="large">
                <!-- Input: faz 'two-way-databind' por meio da diretiva 'v-model'-->
                <input type="text" v-model="visita.telefones" required placeholder="Todos os Contatos">
            </Rotulo>
        </div>

    </section>
    
</template>

<script>
// Import Barramento
import eventBus from '../../eventBus.js';
// Import de Componentes
import Rotulo from '../component/Input.vue';
import MostrarData from '../component/MostrarData.vue';
// Import Dados
import { tiposVisitas, unidades } from '../../data/data.js';

    export default {
        // Registro de Componentes
        components: {Rotulo, MostrarData},

        // Dados do Componente
        data(){
            return {
                // Objeto que armazena os dados da Visita
                visita: {
                    responsavel: '',
                    tipo: '',
                    nome: '',
                    sigss: '',
                    end: '',
                    telefones: '',
                },
                // Armazena os Arrays
                tipos: tiposVisitas,
                unidades: unidades,
                unidadeEscolhida: "",
                // opcoesDeUnidades: "",

                // Armazena a largura da tela do dispositivo no momento que é inicializado (sem necessidade de ficar monitorando)
                windowWidth: window.innerWidth,

            }
        },
        // Métodos Computados:
        computed: {
            // Monitora a variavel indicada e renderiza se tiver alguma mudança
            opcoesDeUnidades(){
                return [...new Set(this.unidades.map((opcao) => opcao.unidade))]
            },
        },  
        // Métodos de Ação:
        methods: {
            // É chamada por 'OnChange' e cria sequencia com o 'value' recebido
            selecionarUnidade(){
                // Cria novo Array só com os Objetos que correspondem ao filtro
                const equiperUnidadesEscolhida = this.unidades.filter((equipe) => equipe.unidade === this.unidadeEscolhida)
                // Emite Evento personalizado e envia o novo Array 
                eventBus.emit('escolheuUnidade', equiperUnidadesEscolhida)
            },

        }

    }

</script>

<style lang="scss" scoped>

    .content {
        width: 100%;
        padding: 1rem 0;

        .box {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: .5rem;
            
            .seletorUnidade{
                width: 100%;
                font-size: 1.5rem;
                text-align: center;
                text-transform: uppercase;
            }
            input {
                text-transform: uppercase;
            }

            select{
                text-transform: uppercase;
            }

        }
    }

// Estilos de Impressão
    @media print {
        .box input, .box select {
            border: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
        }

        
        .seletorUnidade {
            border: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
        }
    
    }

    // Medias
    @media (max-width: 600px){
        .box {
            flex-wrap: wrap-reverse;
        }

        @media print {
            .seletorUnidade {
                border: none;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                text-transform: uppercase;
            }
        }
    }

</style>
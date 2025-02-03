<template>
    <!-- Componente refere a definição dos Responsáveis por executar a demanda -->
    <section class="content">

        <div class="box">
            <!-- Recebe componente 'Rotulo' e passa valores via 'props' para componente Filho -->
            <!-- Rotulo: Recebe 'nomes' via 'props' e 'slot' para receber qualquer tipo de valor ou Tipo de Input -->
            <Rotulo labelName="micro" lengthInput="small">

                <!-- Input do tipo Select: faz 'two-way-databind' por meio da diretiva 'v-model'-->
                <select v-model="micro" required>

                    <option value="" disabled selected>Selecione um ACS</option> <!-- Placeholder -->
                    <!-- Option: percorre arrey de objetos 'equipes' e a 'equipe' selecionada é enviada via 'value' para o 'v-model' no 'select'-->
                    <option 
                        v-for="(microArea, index) in microAreas"
                        :key="index"
                        :value="microArea"
                    >
                        <!-- {{ micro.acs.toUpperCase() }} -->
                        {{ microArea.micro.toUpperCase() }}
                    </option>

                </select>

            </Rotulo>

            <Rotulo labelName="acs" lengthInput="small">
                <!-- Lógica de Renderização: Se houver o valor indicado = ficar em letras maiusculas, senão, indicar texto generico -->
                {{ micro.acs ? micro.acs.toUpperCase() : 'Indefinido' }}
            </Rotulo>

            <Rotulo labelName="eq." lengthInput="small">
                <!-- Lógica de Renderização: Se houver o valor indicado = ficar em letras maiusculas, senão, indicar texto generico -->
                {{ micro.equipe ? micro.equipe.toUpperCase() : 'Indefinido' }}
            </Rotulo>

            <Rotulo labelName="enfº" lengthInput="small">
                <!-- Lógica de Renderização: Se houver o valor indicado = ficar em letras maiusculas, senão, indicar texto generico -->
                {{ micro.enfermeira ? micro.enfermeira.toUpperCase() : 'Indefinido' }}
            </Rotulo>

                
        </div>

        <!-- Componente Renderiza data. Props enviada para Elemento filho -->
        <MostrarData propsValor="1" propsTexto="documento válido até:" :style="{width: '100%'}"/>

    </section>
    
</template>

<script>
// import de Componentes
import Rotulo from '../component/Input.vue';
import MostrarData from '../component/MostrarData.vue';

// import de Dados
import eventBus from '../../eventBus.js';

    export default {

        // Registro de Componentes
        components: {Rotulo, MostrarData},

        // Dados manipulados pelo Compoennte
        data(){
            return {
                // Objeto Vazio, receberá 'objeto' de responsáveis pela demanda
                micro: {},
                // Variavel armazena Array de Objetos com as opções de equipes
                microAreas: []

            }
        },

        // Eventos ao 'criar' a aplicação
        mounted(){
            // Ouvir o evento indicado  e executar a função 'callback'
            eventBus.on('escolheuUnidade', (unidadeEscolhida)=> {
                // Evento, primeiramente, reseta os valores das variaveis
                this.microAreas = []
                this.micro = {}
                // Atribui o Array de Objetos enviado pelo Evento Personalizado na Variavel Local
                this.microAreas = unidadeEscolhida
            })
        },

        unmounted() {
            // Remove o evento ao destruir o componente para evitar vazamento de memória
            eventBus.off('escolheuUnidade', this.listener);
        },

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
            padding: 1rem 0;

            select {
                display: block;
            }
            
        }
        
    }

    @media print {
        .box select {
            border: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
        }
    }

    // Medias
    @media (max-width: 600px){
        .box {
            flex-wrap: wrap;
        }
    }
    

</style>
<template>

    <!-- Corpo da Aplicação, renderiza os componentes indicados -->
    <main>

        <!-- Renderiza o tipo e qual unidade será feita o documento de visita -->
        
        <select class="seletorUnidade" v-model="unidadeEscolhida" @change="selecionarUnidade()">
            <option value="" disabled selected>selecione uma unidade</option> <!-- Placeholder -->
            <option v-for="(unidade, index) in opcoesUnidades"
                :key="index"
                :value="unidade"
            >
                {{ unidade.tipoUnidade }} - {{ unidade.unidade }}
                    
            </option>
        </select>

        <!-- Componentes Renderizados -->
        <IdentificadorVisita />
        <Tentativas />
        <IdentificadorAcs />
        
    </main>

</template>

<script>
// Import de Componentes
import eventBus from '../../eventBus';
import Rotulo from '../component/Input.vue';
import IdentificadorAcs from '../sections/IdentificadorAcs.vue';
import IdentificadorVisita from '../sections/IdentificadorVisita.vue';
import Tentativas from '../sections/Tentativas.vue';

    export default {
        // Registro de Componentes
        components: {IdentificadorVisita, IdentificadorAcs, Tentativas, Rotulo},
        // Dados usados pelo Componente
        data(){
            return {
                unidadeEscolhida: '',
                opcoesUnidades: [],
            }
        },

        mounted(){

            eventBus.on('equipesCarregadas', (unidades) => {
                this.opcoesUnidades = unidades
            })
        },
        // .flatMap(equipe => equipe.unidade)
        methods: {
            selecionarUnidade(){
                console.log()
                eventBus.emit('escolheuUnidade', this.unidadeEscolhida)
            }
        }

    }

</script>

<style lang="scss">

    main {
        padding: 1rem 0;

        .seletorUnidade{
            width: 100%;
            font-size: 1.5rem;
            text-align: center;
            text-transform: uppercase;
        }

        h2 {
            text-align: center;
            padding: .5rem 0;
            text-transform: uppercase;
        }
    }

    @media print {
        .seletorUnidade {
            border: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
        }
    }

</style>
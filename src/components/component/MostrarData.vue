<template>
    <!-- Componente que renderiza data -->
    <div class="boxData">
        <!-- Método recebe valor via 'props' do componente Pai -->
        <span>{{ propsTexto }} {{ mostrarData(propsValor) }} </span>
    </div>

</template>

<script>
// Import serviços
import { pegarData } from '../../services/service';

    export default {
        // Registrando Props
        props: ['propsValor', 'propsTexto'],

        // Método pega a data do Sistema e, caso seja indicado, adiciona 1 na variavel 'ano'
        methods: {
            mostrarData(adicional){
                return pegarData(adicional)
            }
        }
    }

</script>

<style scoped>

    .boxData{
        width: 30%;
        text-transform: uppercase;
    }

    /*  */
    @media (max-width: 600px){
        .boxData {
            width: 100%;
        }
    }

</style>
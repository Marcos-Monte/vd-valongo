<template>

    <!-- Corpo da Aplicação, renderiza os componentes indicados -->
    <main>
        <!-- Componentes Renderizados -->
        <IdentificadorVisita />
        <Tentativas />
        <IdentificadorAcs />
        
    </main>

</template>

<script>
// Import de Componentes
import Rotulo from '../component/Input.vue';
import IdentificadorAcs from '../sections/IdentificadorAcs.vue';
import IdentificadorVisita from '../sections/IdentificadorVisita.vue';
import Tentativas from '../sections/Tentativas.vue';

    export default {
        // Registro de Componentes
        components: {IdentificadorVisita, IdentificadorAcs, Tentativas, Rotulo},
        // Dados usados pelo Componente

    }

</script>

<style lang="scss">

    main {
        padding: 1rem 0;

        h2 {
            text-align: center;
            padding: .5rem 0;
            text-transform: uppercase;
        }
    }

</style>
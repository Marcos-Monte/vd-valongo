<template>
    <!-- Pagina da aplicação, renderiza o 'Cabelalho e o Corpo da aplicação' -->
    <div class="page">

        <Header />
        <Body />

    </div>
    

</template>

<script>
// Import dos Componentes
import Body from './Body.vue';
import Header from './Header.vue';

    export default {
        // Registro dos Componentes
        components: {Header , Body}

    }

</script>

<style lang="scss" scoped>

    .page {
        // max-width: 36.5rem;
        
    }

</style>
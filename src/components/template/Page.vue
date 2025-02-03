<template>
    <!-- Pagina da aplicação, renderiza o 'Cabelalho e o Corpo da aplicação' -->
    <div class="page">
        
        <Body />

    </div>
    

</template>

<script>
// Import dos Componentes
import Body from './Body.vue';

    export default {
        // Registro dos Componentes
        components: { Body}

    }

</script>

<style lang="scss" scoped>

    .page{
        max-width: 40rem ;
    }

</style>
<template>
    <!-- Componente central da Aplicação. Importa e Renderiza Componente 'Linha' -->
    <section class="content">

        <h2>Tentativas</h2>
        <!-- Componentes 'Linha' sendo renderizados e enviando valor via 'props' para elemento Filho -->
        <Linha propsNumero='1'/>
        <Linha propsNumero='2'/>
        <Linha propsNumero='3'/>

        <!-- Sequencia de Linhas para o Usuário escrever durante a Visita -->
        <span class="underline"></span>
        <span class="underline"></span>
        <span class="underline"></span>
        <span class="underline"></span>
        <span class="underline"></span>
        <span class="underline"></span>
        <span class="underline"></span>
        <span class="underline"></span>
        <span class="underline"></span>

    </section>

</template>

<script>
// Import de Componentes
import Linha from '../component/Linha.vue';

export default {
    // Registros de Componentes
    components: {Linha}

}

</script>

<style lang="scss" scoped>

    .content{
        display: flex;
        height: 500px;
        flex-direction: column;

        // Renderiza sequencia de Linhas 
        .underline {
            flex: 1;
            height: 30px;
            border-bottom: 1px solid black;
        }

    }

</style>
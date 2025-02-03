<template>

    <header class="naoImprimir">

        <h3>Copyright © 2025 <a class='link' href="https://marcosmontedev.vercel.app/" target="_blank">Marcos Monte</a>. Todos os direitos reservados.</h3>
        <p>O conteúdo e os materiais apresentados nesta aplicação são de propriedade exclusiva de Marcos Monte. Nenhuma parte deste material pode ser copiada, reproduzida, distribuída, transmitida, exibida ou de qualquer forma explorada para fins comerciais sem a permissão expressa do titular dos direitos autorais.</p>

    </header>

</template>

<script>

    export default {

    }

</script>

<style lang="scss" scoped>

    header {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        padding: 1rem;
        line-height: 1.5rem;
        background-color: #3b9e43;

        .link{
            color: black
        }

        .link:hover {
            color: #fff
        }
        
    }

    @media print {
        .naoImprimir {
            display: none;
        }
    }

</style>
<template>
    <!-- Topo da Aplicação: Tem o logo da Prefeitura e a Descrição da mesma -->
    <section class="cabecalho">

        <!-- Logo da Prefeitura -->
        <img src="../../assets/brasaoPreto.png" alt="Brasão da Prefeitura Municipal de Santos em Preto e Branco" />

        <!-- Componente com os dados da Prefeitura -->
        <div class="content">

            <h1>prefeitura municipal de santos</h1>
            <h3>secretaria municipal de saúde</h3>
            <p>pacs - programa de agentes comunitários</p>

        </div>

    </section>

</template>

<script>

    export default {



    }

</script>

<style lang="scss" scoped>

    .cabecalho {
        width: 100%;
        height: 7rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        position: relative;

        img {
            width: 4rem;
            height: 4rem;
            position: absolute;
            left: 0;
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
        
            h1, h3, p{
                text-transform: capitalize;
            }

            h1 {
                font-size: 1.5rem;
            }
            h3 {
                font-size: 1.3rem;
            }
            p {
                font-size: 1.1rem;
                
            }
        }
        
    }

    // Estilização da 'linha' no Header
    .cabecalho::after {
        position: absolute;
        content: '';
        width: 88%;
        height: 100%;
        border-bottom: 1px solid black
    }
    // Medias
    @media (max-width: 600px){
        .cabecalho{
            display: none;
        }
    }

</style>
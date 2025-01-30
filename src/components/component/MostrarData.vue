<template>
    <!-- Componente que renderiza data -->
    <div class="boxData">
        <!-- Método recebe valor via 'props' do componente Pai -->
        <span>{{ propsTexto }} {{ mostrarData(propsValor) }} </span>
    </div>

</template>

<script>

    export default {
        // Registrando Props
        props: ['propsValor', 'propsTexto'],

        // Método pega a data do Sistema e, caso seja indicado, adiciona 1 na variavel 'ano'
        methods: {
            mostrarData(adicional = 0){
                const data = new Date;
                let dia = data.getDate()
                let mes = data.getMonth() + 1
                let ano = data.getFullYear() + parseInt(adicional)

                // Retorna Template String para Renderização
                return `${dia}/${mes}/${ano}`
            }
        }
    }

</script>

<style>

    .boxData{
        width: 30%;
        text-transform: uppercase;
    }

</style>
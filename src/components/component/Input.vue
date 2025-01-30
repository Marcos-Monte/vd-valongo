<template>
    <!-- Componente que Renderiza uma 'label' e um 'slot' que pode receber qualquer elemento e tipos de Input -->
    <div class="rotulo">

        <!-- Label renderiza com o valor/nome indicado pelo Componente Pai -->
        <label>{{ computedLabelName }}</label>

        <!-- Essa props, indica a 'largura' que o elemento indicado terá (pode ser um Input, por exemplo) -->
        <div :class='lengthInput'>
            <!-- Recebe um valor do Elemento pai (similar ao Children) -->
            <slot></slot>

        </div>
    </div>
    
</template>

<script>

    export default {

        // Registrando Props
        props: {
            labelName: String,
            lengthInput: String // Label renderiza com o valor/nome indicado pelo Componente Pai
        },

        // Métodos Computados
        computed: {
            // Retorna valor em letas Maiusculas
            computedLabelName(){
                return this.labelName.toUpperCase()
            }
        }

    }

</script>

<style lang="scss">

    .rotulo {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        margin: .5rem 0;
        gap: .3rem;

        .large {
            flex: 1;
        }

        .medium {
            width: 280px;
        }

        .small {
            flex: 1;
        }

        .large input, .large select, .small input, .medium input {
            width: 100%;
        }

    }

</style>
<template>
    <!-- Componente que representa cada 'Linha' que constará as  -->
    <div class="visitas">
        <!-- Recebe o valor via 'props' do elemento Pai -->
        <div>
            <p>{{ propsNumero }}ª - DATA</p>
            <span></span>
        </div>

        <div>
            <p>HORAS: </p>
            <span></span>
        </div>

        <div>
            <p>OBS: </p>
            <span></span>
        </div>

    </div>

    
</template>
    
<script>

export default {

    // Registrando props
    props:['propsNumero'],

}

</script>

<style lang="scss" scoped>

    .visitas {
        display: flex;
        padding: .7rem 0;
        gap: .7rem;

        div {
            display: flex;
            width: 100%;

            // Renderiza as linhas do Componente
            span {
                flex: 1;
                border-bottom: .5px solid black;
            }
        }
    }

</style>
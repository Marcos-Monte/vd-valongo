<template>
  <!-- Componente PRINCIPAL da aplicação -->
  <div id="App">
    <!-- Renderiza a pagina por completo -->
    <Page />
    <!-- Botão que gera ação de Imprimir (Desktop) ou Gerar o PDF (Mobile) -->
    <button @click="imprimirConteudo()" class="naoImprimir">Imprimir</button>
  </div>

</template>

<script>
// Import de Componentes
import Page from './components/template/Page.vue';
// Import serviços
import { imprimir } from './services/service';

  export default {
    // Registro de Componentes
    components: { Page },

    methods: {
      // Necessário criar um método que 'ative' o método importado
      imprimirConteudo(){
        imprimir('App') // Recebe o valor do Id da Pagina
      }

    }

  }

</script>

<style lang="scss" scoped>
  
    #App {
      width: 100vw;
      height: 100vh;

      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items:center;
      padding-bottom: 2rem;

      button {
        padding: 1rem;
        border-radius: 1rem;
        background-color: greenyellow;
        font-size: 1.2rem;
      }

      button:hover {
        background-color: green;
        color: #fff;
      }
    }

    @media print {
      .naoImprimir {
        display: none;
      }

    }


</style>

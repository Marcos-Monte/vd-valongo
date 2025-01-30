<template>
  <!-- Componente PRINCIPAL da aplicação -->
  <div id="App">
    <!-- Renderiza a pagina por completo -->
    <Page />

    <button @click="imprimirConteudo()" class="naoImprimir">Imprimir</button>
  </div>

</template>

<script>
// Import de Componentes
import Page from './components/template/Page.vue';
// Import de Dados
import { tiposVisitas, unidades } from './data/data';
import eventBus from './eventBus';
// Import serviços
import { imprimir } from './services/service';

  export default {
    // Registro de Componentes
    components: { Page },

    data(){
      return{
        equipes: unidades,
        tiposVisitas: tiposVisitas,
        
      }
    },
    // Ao 'montar / inicializar o componente', executar as ações seguintes
    mounted(){
      // Emitir os eventos:
      eventBus.emit('tiposVisitasCarregado', this.tiposVisitas); // Evento: Tipos de Visitas Carregado
      eventBus.emit('equipesCarregadas', this.equipes); // Evento: Equipes Cadastradas Carregadas

    }, 

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

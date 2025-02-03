<template>
  <!-- Componente PRINCIPAL da aplicação -->
  <div id="App">
    <!-- Alerta para o Usuário girar o Celular -->
    {{ seMobileAlertar() }}

    <Header class="naoImprimir"/>
    <!-- Renderiza a pagina por completo -->
    <Page id="Page"/>
    <!-- Botão que gera ação de Imprimir (Desktop) ou Gerar o PDF (Mobile) -->
    <button @click="imprimirConteudo()" class="naoImprimir">{{ windowWidth < 600? 'Salvar': 'Imprimir' }}</button>
  </div>

</template>

<script>
// Import de Componentes
import Header from './components/template/Header.vue';
import Page from './components/template/Page.vue';
// Import serviços
import { imprimir } from './services/service';

  export default {
    // Registro de Componentes
    components: { Page, Header },

    data(){
      return{
        // Armazena a largura da tela do dispositivo no momento que é inicializado (sem necessidade de ficar monitorando)
        windowWidth: window.innerWidth,
        teste: true,
      }
    },

    methods: {
      // Necessário criar um método que 'ative' o método importado
      imprimirConteudo(){
        
        imprimir() // Recebe o valor do Id da Pagina
      }, 

      seMobileAlertar(){
        this.windowWidth<600&&alert('Para melhor experiencia, rode o celular e use no Modo Horizontal!')
      }
    }

  }

</script>

<style lang="scss" scoped>
  
    #App {
      // width: 100vw;
      height: 100vh;

      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items:center;
      padding-bottom: 2rem;

      button {
        padding: 1rem;
        border-radius: 2rem;
        background-color: greenyellow;
        font-size: 1.2rem;
        font-weight: 900;
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

<template>
  <!-- Componente PRINCIPAL da aplicação -->
  <div id="App">
    <!-- Renderiza a pagina por completo -->
    <Page />

    <button @click="imprimir()" class="naoImprimir">Imprimir</button>
  </div>

</template>

<script>
// Import de Componentes
import Page from './components/template/Page.vue';
// Import de Dados
import { tiposVisitas, unidades } from './data/data';
import eventBus from './eventBus';
// Import Dependencias
import html2canvas from "html2canvas";
import jsPDF from 'jspdf'; // Dependencia que gera e salva arquivo em PDF via navegador

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
      async imprimir(){

        // Verificar se o usuario está em um dispositivo mobile
        const isMobile = /Android|IPhone|iPad|iPod/i.test(navigator.userAgent);

        if(isMobile){

          await this.gerarPDF(); // Se for 'mobile', gera um PDF

        } else {

          // Mostra um alerta ao usuário
          alert('Duas caixas de diálogo de impressão serão abertas. Por favor, salve uma e imprima a outra.');

          // Abre a primeira caixa de impressão
          window.print();

          // Após a primeira impressão, abre a segunda caixa de impressão após um pequeno atraso
          setTimeout(() => {
              // Abre a segunda caixa de impressão
              window.print();

              // Após a segunda impressão, oculta o conteúdo e recarrega a página
              setTimeout(() => {
                  
                  window.location.reload();
              }, 100);
          }, 500); // Ajuste o tempo se necessário para garantir que o usuário tenha tempo suficiente

        }

        
      },

      async gerarPDF(){

        const arquivo = document.getElementById('App'); // Armazena o que deve ser transformado em PDF

        if(!arquivo){
          alert('Erro: Arquivo não encontrado para gerar o PDF!');
          return;
        }

        const canvas = await html2canvas(arquivo); // Captura a área como imagem
        const imgData = canvas.toDataURL('image/png'); // Converte a imagem para formato PNG

        const pdf = new jsPDF('p', 'mm', 'a4'); // Criando um PDF no formato A4
        const imgWidth = 210; // Largura do PDF em mm (A4 = 210mm)
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calcula altura proporcional

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight); // Adicionando a imagem ao PDF
        pdf.save('arquivo-preendhico.pdf'); // Salva o PDF no dispositivo do usuário

      }
    }

  }

</script>

<style lang="scss" scoped>
  
    #App {
      // width: 100vw;
      // height: 100vh;

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

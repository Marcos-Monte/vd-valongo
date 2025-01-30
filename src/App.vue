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
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

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

      // imprimir(){

      //   // Verificar se o usuario está em um dispositivo mobile
      //   const isMobile = /Android|IPhone|iPad|iPod/i.test(navigator.userAgent);

      //   if(isMobile){

      //     // await this.gerarPDF(); // Se for 'mobile', gera um PDF
      //     alert("O documento será salvo automaticamente como PDF.");

      //     // Simula a impressão e força a opção de salvar como PDF
      //     const printSettings = {
      //         printBackground: true, // Garante que estilos CSS sejam mantidos
      //         preferCSSPageSize: true // Usa o tamanho do papel definido no CSS
      //     };

      //     window.print(); // No mobile, o usuário escolhe salvar como PDF manualmente
      //     window.location.reload();

      //   } else {

      //     // Mostra um alerta ao usuário
      //     alert('Duas caixas de diálogo de impressão serão abertas. Por favor, salve uma e imprima a outra.');

      //     // Abre a primeira caixa de impressão
      //     window.print();

      //     // Após a primeira impressão, abre a segunda caixa de impressão após um pequeno atraso
      //     setTimeout(() => {
      //         // Abre a segunda caixa de impressão
      //         window.print();

      //         // Após a segunda impressão, oculta o conteúdo e recarrega a página
      //         setTimeout(() => {
                  
      //             window.location.reload();
      //         }, 100);
      //     }, 500); // Ajuste o tempo se necessário para garantir que o usuário tenha tempo suficiente

      //   }

        
      // },

      async imprimir(){

        // Verificar se o usuario está em um dispositivo mobile
        const isMobile = /Android|IPhone|iPad|iPod/i.test(navigator.userAgent);

        if(isMobile){

          // await this.gerarPDF(); // Se for 'mobile', gera um PDF
          alert("O documento será salvo automaticamente como PDF.");

          await this.gerarPDF(); // Gera o PDF no celular

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
      // Método que gera e salva o arquivo em PDF se o usuario estiver em um disponitivo mobile
      async gerarPDF(){
        
        const pdf = new jsPDF("p", "mm", "a4"); // Cria um PDF no formato A4

        const elemento = document.getElementById("App"); // O elemento que será salvo

        // Garante que o layout do Desktop será usado no Mobile
        elemento.style.width = "210mm"; 
        elemento.style.height = "297mm"; 

        // Captura a tela como imagem
        const canvas = await html2canvas(elemento, {
            scale: 2, // Garante boa qualidade
            useCORS: true // Suporte para imagens externas
        });

        const imgData = canvas.toDataURL("image/png"); // Converte para imagem PNG

        // Adiciona a imagem ao PDF
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297); 

        // Salva automaticamente sem abrir janela
        pdf.save("documento.pdf");

        window.location.reload();
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

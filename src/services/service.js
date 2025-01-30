// Import Dependencias
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

async function imprimir(conteudo){

    // Verificar se o usuario está em um dispositivo mobile
    const isMobile = /Android|IPhone|iPad|iPod/i.test(navigator.userAgent);

    if(isMobile){

      // await this.gerarPDF(); // Se for 'mobile', gera um PDF
        alert("O documento será salvo automaticamente como PDF.");

        await gerarPDF(conteudo); // Gera o PDF no celular

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
    
};

// Método que gera e salva o arquivo em PDF se o usuario estiver em um disponitivo mobile
async function gerarPDF(conteudo){
        
    const pdf = new jsPDF("p", "mm", "a4"); // Cria um PDF no formato A4

    const elemento = document.getElementById(conteudo); // O elemento que será salvo

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
// Método pega a data do Sistema e, caso seja indicado, adiciona 1 na variavel 'ano'
function pegarData(adicional = 0){
    const data = new Date;
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear() + parseInt(adicional)

    // Retorna Template String para Renderização
    return `${dia}/${mes}/${ano}`
}

export { imprimir, pegarData };


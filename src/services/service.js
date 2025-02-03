// Import Dependencias

async function imprimir(){

    // Verificar se o usuario está em um dispositivo mobile
    const isMobile = /Android|IPhone|iPad|iPod/i.test(navigator.userAgent);

    if(isMobile){

        // Abre a primeira caixa de impressão
        window.print();

        setTimeout(() => {
            // Após a 'impressão', oculta o conteúdo e recarrega a página
            window.location.reload();
        }, 8000)

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


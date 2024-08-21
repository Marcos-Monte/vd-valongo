const dataAtual = new Date();

function pegarDataAtual(){
    const dia = dataAtual.getDate();
    const mes = (dataAtual.getMonth() + 1);
    const ano = dataAtual.getFullYear();
    
    return `${dia}/${mes}/${ano}`
}

function pegarDataDevolução(){
    const dia = dataAtual.getDate();
    const mes = (dataAtual.getMonth() + 1);
    const ano = dataAtual.getFullYear() + 1;
    
    return `${dia}/${mes}/${ano}`

}

export default function handlePrint(printRef) {
    if (printRef.current) {
        // Mostra um alerta ao usuário
        alert('Duas caixas de diálogo de impressão serão abertas. Por favor, salve uma e imprima a outra.');

        // Torna o conteúdo visível para impressão/salvamento
        printRef.current.style.visibility = 'visible';

        // Abre a primeira caixa de impressão
        window.print();

        // Após a primeira impressão, abre a segunda caixa de impressão após um pequeno atraso
        setTimeout(() => {
            // Abre a segunda caixa de impressão
            window.print();

            // Após a segunda impressão, oculta o conteúdo e recarrega a página
            setTimeout(() => {
                printRef.current.style.visibility = 'hidden';
                window.location.reload();
            }, 100);
        }, 500); // Ajuste o tempo se necessário para garantir que o usuário tenha tempo suficiente
    }
}


export { pegarDataAtual, pegarDataDevolução };


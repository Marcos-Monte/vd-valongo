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

export default function handlePrint(printRef){
    // console.log('Botao Fora')
    
    if(printRef.current){
        printRef.current.style.visibility = 'visible';

         // Usando um setTimeout para garantir que a impressão seja concluída antes do reload
        window.print();
        setTimeout(() => {
            printRef.current.style.visibility = 'hidden';
            window.location.reload();
            // console.log('Botão Dentro');
        }, 100); // Pequeno atraso para garantir que a impressão foi completada

    }

}

export { pegarDataAtual, pegarDataDevolução };


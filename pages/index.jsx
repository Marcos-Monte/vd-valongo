import { useRef } from 'react';

import styles from "@/styles/Home.module.css";

import Head from "next/head";
import Dados from "./Components/Dados";
import Header from "./Components/Header";
import Obs from "./Components/Obs";

export default function Home() {
  
  const printRef = useRef();

  function handlePrint(){
    console.log('Botao Fora')
      if(printRef.current){
          printRef.current.style.visibility = 'visible';
          window.print();
          printRef.current.style.visibility = 'hidden';
          console.log('Botao Dentro')
      }
  }

  return (
    <>
      <Head>
        <title>Solicitação de Visita Domiciliar</title>
        <meta name="description" content="Criação de Solicitação de Visita Domiciliar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brasaoColorido.png" />
      </Head>
      
      <main className={`${styles.main} `}  ref={printRef}>
        <div className={styles.container}>

          <Header />
          <Dados/>
          <Obs />

          <button onClick={handlePrint} className={styles.printButton}>
                Imprimir Formulário
            </button>
        </div>
        
      </main>
    </>
  );
}

import { useRef } from 'react';

import styles from "@/styles/Home.module.css";

import Head from "next/head";
import Dados from "./Components/Dados";
import Equipe from './Components/Equipe';
import Header from "./Components/Header";
import Obs from "./Components/Obs";

import handlePrint from './services/service';

export default function Home() {

  const printRef = useRef();

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
          <Equipe />

          <button onClick={() => handlePrint(printRef)} className={styles.printButton}>
                Imprimir Formulário
            </button>
        </div>
        
      </main>
    </>
  );
}

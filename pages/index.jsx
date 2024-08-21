import { useRef } from 'react';

import styles from "@/styles/Home.module.css";

import Head from "next/head";
import Botao from './Components/Botao';
import Documento from './Components/Documento';

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
      
      <main className={`${styles.main}`}  ref={printRef}>
        
        <Documento />

        <div className={styles.buttons}>

          <Botao
            nome='imprimir'
            funcao={() => handlePrint(printRef)}
          />

        </div>
        
      </main>
    </>
  );
}

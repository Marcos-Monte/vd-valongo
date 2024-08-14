import styles from "@/styles/Home.module.css";

import Head from "next/head";
import Dados from "./Components/Dados";
import Header from "./Components/Header";
import Obs from "./Components/Obs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Solicitação de Visita Domiciliar</title>
        <meta name="description" content="Criação de Solicitação de Visita Domiciliar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brasaoColorido.png" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.container}>
          <Header />
          <Dados />
          <Obs />
        </div>
        
      </main>
    </>
  );
}

import styles from '@/styles/Documento.module.css';

import Dados from "./Dados";
import Equipe from './Equipe';
import Header from "./Header";
import Obs from "./Obs";

import { pegarDataAtual, pegarDataDevolução } from '@/pages/services/service';

export default function Documento(){

    return(
        
        <div className={styles.container}>
            <Header />
            <Dados
                data={pegarDataAtual()}
            />
            <Obs />
            <Equipe 
                devolucao={pegarDataDevolução()}
            />
        </div>
        
    )
}
import styles from '@/styles/Equipe.module.css';

import { useState } from 'react';

export default function Equipe(props){

    const [equipe, setEquipe] = useState('');
    const [acs, setAcs] = useState('');

    function handleAcs(event){
        setAcs(event.target.value)
    }

    function hangleEquipe(event){
        setEquipe(event.target.value)
    }

    return(
        <section className={styles.selecaoEquipe}>

            <div className={styles.box}>

                <div>
                    <label>Equipe: </label>
                    <select className={styles.selecao} value={equipe} onChange={hangleEquipe} required>
                        <option className={styles.opcao} value="">---</option>
                        <option className={styles.opcao} value="azul">azul</option>
                        <option className={styles.opcao} value="verde">verde</option>
                        <option className={styles.opcao} value="amarela">amarela</option>
                    </select>
                </div>
                                
                <div>
                    <label>ACS: </label>
                    <select className={styles.selecao} value={acs} onChange={handleAcs} required>
                        <option className={styles.opcao} value="">---</option>
                        <option value="carlos">carlos</option>
                        <option value="fernanda">fernanda</option>
                        <option value="bianca">bianca</option>
                        <option value="michelle">michelle</option>
                        <option value="luana">luana</option>
                        <option value="aline">aline</option>
                    </select>
                </div>

            </div>

            <div>
                <p className={styles.texto}>
                    documento válido até: <strong>{props.devolucao}</strong>
                </p>
            </div>

        </section>
    )
}
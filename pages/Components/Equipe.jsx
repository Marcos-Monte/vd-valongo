import styles from '@/styles/Equipe.module.css';

import { pegarDataDevolução } from '@/pages/services/service';
import { useState } from 'react';

export default function Equipe(){

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

                    <div>
                        <label>Equipe: </label>
                        <select className={styles.selecao} value={equipe} onChange={hangleEquipe} required>
                            <option className={styles.opcao} value="">Selecione uma opção</option>
                            <option className={styles.opcao} value="azul">azul</option>
                            <option className={styles.opcao} value="verde">verde</option>
                            <option className={styles.opcao} value="amarela">amarela</option>
                        </select>
                    </div>
                                
                    <div>
                        <label>Agente Comunitário de Saúde: </label>
                        <select className={styles.selecao} value={acs} onChange={handleAcs} required>
                            <option className={styles.opcao} value="">Selecione uma opção</option>
                            <option value="carlos">carlos</option>
                            <option value="fernanda">fernanda</option>
                            <option value="bianca">bianca</option>
                            <option value="michelle">michelle</option>
                            <option value="luana">luana</option>
                            <option value="aline">aline</option>
                        </select>
                    </div>

                <div>

                    <p className={styles.texto}>
                        documento válido até: <strong>{pegarDataDevolução()}</strong>
                    </p>
                </div>

                </section>
    )
}
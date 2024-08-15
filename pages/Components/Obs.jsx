import styles from '@/styles/Obs.module.css';
import { useState } from 'react';

export default function Obs(){

    const [equipe, setEquipe]=useState('');
    const [acs, setAcs]=useState('');

    return(
        <section className={styles.container}>

            <div className={styles.box}>
                
                <div className={styles.tentativas}>

                    <h3 className={styles.titulo}>tentativas</h3>

                    <div className={styles.infos}>

                        <div className={styles.info}>
                            <p>1ª - data: </p>
                            <span className={styles.underline}></span>
                        </div>

                        <div className={styles.info}>
                            <p>horas: </p>
                            <span className={styles.underline}></span>
                        </div>

                        <div className={styles.assinatura}>
                            <p>obs: </p>
                            <span className={styles.underline}></span>
                        </div>

                    </div>

                    <div className={styles.infos}>

                        <div className={styles.info}>
                            <p>2ª - data: </p>
                            <span className={styles.underline}></span>
                        </div>

                        <div className={styles.info}>
                            <p>horas: </p>
                            <span className={styles.underline}></span>
                        </div>

                        <div className={styles.assinatura}>
                            <p>obs: </p>
                            <span className={styles.underline}></span>
                        </div>

                    </div>

                    <div className={styles.infos}>

                        <div className={styles.info}>
                            <p>3ª - data: </p>
                            <span className={styles.underline}></span>
                        </div>

                        <div className={styles.info}>
                            <p>horas: </p>
                            <span className={styles.underline}></span>
                        </div>

                        <div className={styles.assinatura}>
                            <p>obs: </p>
                            <span className={styles.underline}></span>
                        </div>

                    </div>

                </div>

                <div className={styles.observacao}>

                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    

                </div>

                <div className={styles.selecaoEquipe}>

                    <div>
                        <label>Equipe: </label>
                        <select className={styles.selecao}
                            value={equipe}
                            onChange={(e) => setEquipe(e.target.value)}
                        >
                            <option value="" disabled>Selecione uma opção</option>
                            <option value="" onChange={(e) => setEquipe('azul')}>Azul</option>
                            <option value="" onChange={(e) => setEquipe('verde')}>Verde</option>
                            <option value="" onChange={(e) => setEquipe('amarela')}>Amarela</option>
                        </select>
                    </div>
                                
                    <div>
                        <label>Agente Comunitário de Saúde: </label>
                        <select className={styles.selecao}
                            value={acs}
                            onChange={(e) => setAcs(e.target.value)}
                            required
                        >
                            <option value="" disabled>Selecione uma opção</option>
                            <option value="" onChange={(e) => setEquipe('Carlos')}>Carlos</option>
                            <option value="" onChange={(e) => setEquipe('Michelle')}>Michelle</option>
                            <option value="" onChange={(e) => setEquipe('Aline')}>Aline</option>
                        </select>
                    </div>

                </div>
                    
            </div>
        </section>
    )
}
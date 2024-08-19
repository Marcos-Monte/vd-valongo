import styles from '@/styles/Obs.module.css';

export default function Obs(){

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

                
                    
            </div>
        </section>
    )
}
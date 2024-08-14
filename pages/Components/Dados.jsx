import styles from '@/styles/Dados.module.css';

export default function Dados(){
    return(
        <section className={styles.container}>
            <div className={styles.box}>
                <h2 className={styles.titulo}>seub valongo</h2>

                <p className={styles.texto}>
                    responsável pela solicitação: <strong>recepção</strong> - data: <strong>14/08/24</strong>
                </p>

                <p className={styles.texto}>
                    identificação: <strong>confirmação de endereço</strong>
                </p>

                <p className={styles.texto}
                    >nome: <strong>marcos monte da silva junior </strong>
                     - sigss: <strong>10370161-0</strong>
                </p>

                <p className={styles.texto}>
                    end: <strong>renata camara agondi - </strong> 
                    Compl: <strong> nº 86, Apto 86 -  Saboó</strong>
                </p>

                {/* <p className={styles.texto}>
                    Compl: <strong> nº 86, Apto 86 -  Saboó</strong>
                </p> */}


                <p className={styles.texto}>Telefones: <strong>13 999999999</strong></p>
            </div>
            
        </section>
    )
}
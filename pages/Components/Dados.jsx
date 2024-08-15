import styles from '@/styles/Dados.module.css';
import { forwardRef, useState } from 'react';

const Dados = forwardRef(function Dados(props, ref){

    function pegarDataAtual(){
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        const mes = (dataAtual.getMonth() + 1);
        const ano = dataAtual.getFullYear();
        
        return `${dia}/${mes}/${ano}`
    }

    
    const [data, setData] = useState(pegarDataAtual());

    const [responsavel, setResponsavel] = useState('');
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [sigss, setSigss] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [telefones, setTelefones] = useState('');

    return(
        <section className={`${styles.container}`} ref={props.ref}>

            <h2 className={styles.titulo}>seub valongo</h2>

            <form className={styles.box}>

                <div className={`${styles.boxInfos}`}>

                    <div className={`${styles.info}`}>
                        <label>responsável pela solicitação:</label>
                        <input type="text" 
                            className={`${styles.small} inputPrint`}
                            placeholder='Responsável'
                            value={responsavel}
                            onChange={(e) => setResponsavel(e.target.value)}
                        />
                    </div>

                    <div className={`${styles.info}`}>
                        <p>- data: <strong>{data}</strong></p>
                    </div>
                </div>

                <div className={`${styles.info}  `}>
                    <label>identificação: </label>
                    <input type="text" 
                        className={styles.large}
                        placeholder='Objetivo da Visita Domiciliar'
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>

                <div className={`${styles.boxInfos}`}>
                    
                    <div className={`${styles.info} ${styles.large}`}>
                        <label>nome: </label>
                        <input type="text" 
                            className={styles.large}
                            placeholder='Nome Completo'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    
                    <div className={styles.info}>
                        <label>sigss: </label>
                        <input type="text" 
                            className={styles.small}
                            placeholder='Código do MV'
                            value={sigss}
                            onChange={(e) => setSigss(e.target.value)}
                        />
                    </div>

                </div>

                <div className={`${styles.boxInfos}`}>
                    
                    <div className={`${styles.info} ${styles.large}`}>
                        <label>end: </label>
                        <input type="text" 
                            className={styles.large}
                            placeholder='Rua e Bairro'
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                    </div>

                    
                    <div className={styles.info}>
                        <label>compl: </label>
                        <input type="text" 
                            className={styles.small}
                            placeholder='Número'
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                        />
                    </div>

                </div>
                    
                <div className={`${styles.info}`}>
                    <label>telefones: </label>
                    <input type="text" 
                        className={styles.large}
                        placeholder='Todos os contatos'
                        value={telefones}
                        onChange={(e) => setTelefones(e.target.value)}
                    />
                </div>

            </form>
            
        </section>
    )
});

export default Dados
import styles from '@/styles/Dados.module.css';
import { forwardRef, useState } from 'react';

import { pegarDataAtual } from '@/pages/services/service';

const Dados = forwardRef(function Dados(props, ref){
    
    const [data, setData] = useState(pegarDataAtual());

    const [responsavel, setResponsavel] = useState('');
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [sigss, setSigss] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [telefones, setTelefones] = useState('');

    function handleId(event){
        setId(event.target.value)
    }

    return(
        <section className={`${styles.container}`} ref={props.ref}>

            <h2 className={styles.titulo}>usf valongo</h2>

            <form className={styles.box}>

                <div className={`${styles.boxInfos}`}>

                    <div className={`${styles.info}`}>
                        <label>responsável pela solicitação:</label>
                        <input type="text" 
                            className={`${styles.small} inputPrint`}
                            placeholder='Responsável'
                            value={responsavel}
                            onChange={(e) => setResponsavel(e.target.value)}
                            required
                        />
                    </div>

                    <div className={`${styles.info}`}>
                        <p>- data: <strong>{data}</strong></p>
                    </div>
                </div>

                <div className={`${styles.boxInfos}  `}>

                    <label>identificação: </label>

                    <select
                        className={`${styles.large} inputPrint`}
                        value={id} 
                        onChange={handleId} 
                        required
                    >
                        <option className={styles.opcao} value="">---</option>
                        <option className={styles.opcao}  value="confirmar endereco">CONFIRMAÇÃO DE ENDEREÇO</option>
                        <option className={styles.opcao}  value="busca ativa">BUSCA ATIVA</option>
                        <option className={styles.opcao}  value="abertura pn">ABERTURA DE PRÉ-NATAL</option>
                        <option className={styles.opcao}  value="outros">OUTROS</option>
                    </select>
                </div>

                <div className={`${styles.boxInfos}`}>
                    
                    <div className={`${styles.info} ${styles.large}`}>
                        <label>nome: </label>
                        <input type="text" 
                            className={`${styles.large} inputPrint`}
                            placeholder='Nome Completo'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    
                    <div className={styles.info}>
                        <label>sigss: </label>
                        <input type="text" 
                            className={`${styles.small} inputPrint`}
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
                            className={`${styles.large} inputPrint`}
                            placeholder='Rua e Bairro'
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                    </div>

                    
                    <div className={styles.info}>
                        <label>compl: </label>
                        <input type="text" 
                            className={`${styles.small} inputPrint`}
                            placeholder='Número'
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                        />
                    </div>

                </div>
                    
                <div className={`${styles.boxInfos}`}>
                    <label>telefones: </label>
                    <input type="text" 
                        className={`${styles.large} inputPrint`}
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
import styles from '@/styles/Botao.module.css'

export default function Botao(props){
    return(
        <button 
            className={styles.printButton}
            onClick={props.funcao}
        >
            {props.nome}
        </button>
    )
}
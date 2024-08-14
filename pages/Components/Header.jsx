import Image from 'next/image';

import Logo from '@/public/brasaoPreto.png';

import styles from '@/styles/Header.module.css';

export default function Header(){
    return(
        <header className={styles.container}>
            
            <div className={styles.box}>
            <Image 
                className={styles.logo} 
                src={Logo} 
                alt="Logotipo da Prefeitura Municipal de Santos"
            />
                <h1 className={styles.titulo}>Prefeitura Municipal de Santos</h1>
                <h2 className={styles.subTitulo}>Secretaria Municipal de Saúde</h2>
                <span className={styles.texto}>pacs - programa de agentes comunitários</span>
            </div>
        </header>
    )
}
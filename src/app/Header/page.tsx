
import styles from "./page.module.scss";
import Projetos from "../Projetos/page";

import Link from "next/link";

export function Header() {

    return (
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                   <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/Sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/Projetos">Projetos</Link>
                    </li>
                    <li>
                        <Link href="/Contato">Contato</Link>
                    </li>
                   
                   </ul>
                </nav>
            </section>
        </header>
    )
}
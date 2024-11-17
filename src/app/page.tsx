
import styles from "../../styles/page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.title}>KTPC PC Seminar</h1>
                <p className={styles.description}>
                    A simple ToDo list app
                </p>
                <li>
                    <Link href="/todos" className={styles.link}>/todo</Link><br/>
                    <Link href="/tetris" className={styles.link}>/tetris</Link>
                </li>
            </main>
        </div>
    );
}

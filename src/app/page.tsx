
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to ToDo List</h1>
                <p className={styles.description}>
                    A simple ToDo list app
                </p>
                <Link href="/todos" className={styles.link}>Go to ToDo List</Link>
                <Link href="/tetris" className={styles.link}>Go to Tetris</Link>
            </main>
        </div>
    );
}

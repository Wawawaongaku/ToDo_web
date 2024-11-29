import React from "react";
import styles from "../styles/page.module.css";
import Link from "next/link";
import Header from "./(components)/Header";

export default function Home() {
    return (
        <>
            <Header />
            <div className={styles.page}>
                <main className={styles.main}>
                    <p className={styles.description}>
                        A simple ToDo list app
                        <br />
                        +tetris
                    </p>
                    <li>
                        <Link href="/todo" className={styles.link}>
                            /todo
                        </Link>
                        <br />
                        <Link href="/tetris" className={styles.link}>
                            /tetris
                        </Link>
                    </li>
                </main>
            </div>
        </>
    );
}

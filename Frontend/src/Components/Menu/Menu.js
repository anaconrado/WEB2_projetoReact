import React from "react";

import styles from "./menu.module.css";

export default function Menu() {
    return(
        <div className={styles.containerQuickMenu}>
            <div className={styles.wrapQuickMenu}>
                <ul>
                    <li><a href="/trelo" className={styles.Colorir}>Home</a></li>
                    <li><a href="/batalha" className={styles.Colorir}>Batalha</a></li>
                    <li><a href="/costumizacao" className={styles.Colorir}>Customizar</a></li>
                    <li><a href="/" class={styles.Colorir}>Sair</a></li>
                </ul>
        </div>
    </div>
    );
}
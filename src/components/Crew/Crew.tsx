import styles from "./styles.module.css"

export const Crew = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.face}></div>
                <h4>John Doe</h4>
                <a href="https://en.wikipedia.org/wiki/John_Doe">@linktosocial</a>
            </div>
        </div>
    )
}
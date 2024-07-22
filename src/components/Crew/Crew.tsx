import styles from "./styles.module.css"

export const Crew = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>               
                <img className={styles.racoon} src="https://media.tenor.com/tCL3HGcaV4UAAAAM/raccoon-dance.gif" />
                <h4>John Doe</h4>
                <a href="https://en.wikipedia.org/wiki/John_Doe">@linktosocial</a>
            </div>
        </div>
    )
}
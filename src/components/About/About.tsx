import styles from "./styles.module.css"
import qr from "../../resources/frame.png"

export const About = () => {
    return (
        <div className={styles.container}>
            <img src={ qr } alt="qr" />
        </div>
    )   
}
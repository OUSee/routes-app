import styles from "./styles.module.css"
import { BigIcon } from "../IconsAndImages/Image"

export const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.welcome}>Welcome</h1>             
            <BigIcon width="450px" height="450px"/>
        </div>
    )
}
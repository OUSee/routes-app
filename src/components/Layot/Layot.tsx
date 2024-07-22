import { Outlet } from "react-router-dom"
import { Head } from "../Head/Head"
import { Footer } from "../Footer/Foot"


export const Layot = () => {
    return (
        <div>
            <Head />

            <Outlet />

            <Footer />
        </div>
    )
}
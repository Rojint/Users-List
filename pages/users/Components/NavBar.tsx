import Image from "next/image"
import Styles from "../Styles/navbar.module.css"
export default function Navbar() {
    return (
        <>
        <nav className={Styles.navbar}>
            <img className={Styles.navbarSvg1} src="./images/user.svg" height={28} width={28} />
            <img className={Styles.navbarSvg2} src="./images/notification.svg" height={28} width={28} />
            <h2 className={Styles.logo}>LOGO</h2>
        </nav>
        </>
    )
}
import Link from "next/link"
import Styles from "./login.module.css"
import Image from "next/image"
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

export default function Login() {
    return(
        <>
        <section className={Styles.background}>
            <div className={Styles.container}>
                <div className={Styles["img-container"]}>
                    <img className={Styles["login-image"]} src="/images/login.png" />
                    </div>
                <div className={Styles["form-container"]}>
                    <form className={Styles.form}>
                        <h1 className={Styles["form-title"]}>Hello Again!</h1>
                    <div className={Styles.inputs}>
                        <label className={Styles.labelBox}>Username or Email</label>
                        <input className={Styles.inputBox} type="text" placeholder="Enter your username or email" />
                    </div>
                    <div className={Styles.inputs}>
                        <label className={Styles.labelBox}>Password</label>
                        <input className={Styles.inputBox} type="password" placeholder="Enter your password" />
                    </div>
                    <div className={Styles.inputs}>
                        <input className={Styles.formBtn} type="submit"  value="Login" />
                    </div>

                    <span className={Styles.register}>
                        <p>Not a member? <Link href="/">Register now</Link></p>
                    </span>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}
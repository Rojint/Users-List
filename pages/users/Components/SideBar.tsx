import Head from "next/head";
import Link from "next/link";
import Styles from '../Styles/SideBar.module.css';

export default function SideBar() {
    return (
        <>
        <div className={Styles.sidebarContainer}>
            <ul className={Styles.listContainer}>
                <li><img src="./images/home.svg" width={24} height={24} />Home</li>
                <li><img src="./images/users.svg" width={22} height={22} />Users</li>
                <li><img src="./images/file-document.svg" width={22} height={22} />Reports</li>
                <li><img src="./images/components.svg" width={22} height={22} />Projects</li>
                <li><img src="./images/tasks.svg" width={22} height={22} />Tasks</li>
            </ul>
        </div>
        </>
    )
}
import Link from "next/link";
import Navbar from "./NavBar";
import SideBar from "./SideBar";
import Styles from "./users.module.css"
import Table from "./Table";

export default function Users() {
    return(
        <>
        <Navbar />
        <SideBar />
        <section className={Styles["users-container"]}>            
            <div className={Styles["users-list"]}>
            <h2 className={Styles["users-title"]}>Users</h2>
            <Table />
            {/* <ul>
                <li >
                    <Link href="https://i.pravatar.cc/150?img=23" />
                  <p>Rozhin</p>
                    <p>Tarigh</p>
                    <p>11223445</p>
          </li>
      </ul> */}
            </div>
        </section>
        </>
    )
}
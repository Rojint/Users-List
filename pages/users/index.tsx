import Navbar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Styles from './users.module.css'
import Table from "./Components/Table";
import axios from "axios";
import { useState, useEffect } from "react";

export interface RequestParam {
  id: boolean;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  nationalCode: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  avatarUrl: string
  nationalCode: string;
}


const fetchUser = async () => {  
  try {
    const response = await axios.get("https://maja.hoitek.fi/api/v1/users?page=1&limit=10");
    console.log(response.data.data.items)
    return response.data.data.items;
  } catch (e) {
    console.log(e);
    return [];
  }
}
export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUser().then((data) => setUsers(data));
  }, []);

  return(
    <>
      <Navbar />
      <SideBar />
      <section className={Styles["users-container"]}>            
        <div className={Styles["users-list"]}>
          <h2 className={Styles["users-title"]}>Users</h2>

          <table className={Styles.table}>
      <thead>
        <tr className={Styles.table}>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>National Code</th>
        </tr>
      </thead>
      {users && users.map((user) => (
  <Table user={user} key={user.id} />
))}
    </table>
          
        </div>
      </section>
    </>
  )
}
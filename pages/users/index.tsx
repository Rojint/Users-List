import Navbar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Styles from "./users.module.css";
import Table from "./Components/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Container,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Loading from "./Loading";

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
  avatarUrl: string;
  nationalCode: string;
}

const fetchUser = async () => {
  try {
    const response = await axios.get(
      "https://maja.hoitek.fi/api/v1/users?page=1&limit=10"
    );
    return response.data.data.items;
  } catch (e) {
    return [];
  }
};
export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchUser().then((data) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      <SideBar />
      <Container className={Styles["users-container"]}>
        <Container className={Styles["users-list"]}>
          <Typography variant="h4" className={Styles["users-title"]}>
            Users
          </Typography>
          <TableContainer className={Styles.table}>
            <TableHead>
              <TableRow className={Styles.table}>
                <TableCell>Photo</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>National Code</TableCell>
              </TableRow>
            </TableHead>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {users.map((user) => (
                  <Table user={user} key={user.id} />
                ))}
              </>
            )}
          </TableContainer>
        </Container>
      </Container>
    </>
  );
}

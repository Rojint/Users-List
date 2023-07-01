import { TableBody, TableCell, TableRow } from "@mui/material";
import { RequestParam, User } from "..";
import Styles from "../Styles/table.module.css";

interface Props {
  user: User;
}
const Table = ({ user }: Props) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>
          <img className={Styles.avatar} src={user.avatarUrl} />
        </TableCell>
        <TableCell>{user.firstName}</TableCell>
        <TableCell>{user.lastName}</TableCell>
        <TableCell>{user.nationalCode}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default Table;

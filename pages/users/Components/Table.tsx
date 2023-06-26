import { RequestParam, User } from '..';
import Styles from '../Styles/table.module.css'

interface Props {
 user : User

}
const Table = ({user}: Props) => {
  return (
      <tbody>
        <tr>
          <td><img className={Styles.avatar} src={user.avatarUrl} /></td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.nationalCode}</td>
        </tr>
      </tbody>
  );
};

export default Table;


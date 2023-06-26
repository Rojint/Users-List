import Styles from './table.module.css'
const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>National Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img className={Styles.avatar} src={`https://i.pravatar.cc/150?img=23`} /></td>
          <td>John</td>
          <td>Doe</td>
          <td>123123</td>

        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>jane@example.com</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
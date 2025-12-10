const TableRow = ({ item }) => {
  return (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
  );
};
export default TableRow;
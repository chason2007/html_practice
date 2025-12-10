const TableRow2 = ({ item }) => {
  return (
    <tr key={item.id}>
      <td>{item.userId}</td>
      <td>{item.title}</td>
      <td>{item.body}</td>
    </tr>
  );
};
export default TableRow2;
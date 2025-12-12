import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const { data } = useOutletContext();

    return (
        <div>
            <h1>Home</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>College Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.email}</td>
                            <td>{student.collegeName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Home;  
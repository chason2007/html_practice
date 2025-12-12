import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/Data.json')
            .then(response => response.json())
            .then(data => setUsers(data.students))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>College Name</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.collegeName}</td>
                            <td><Link to={`/products/${user.id}`}><button className="viewButton">View Details</button></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Home;
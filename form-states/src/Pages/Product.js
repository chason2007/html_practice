import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Product.css';

const Product = () => {
    const { userId } = useParams();
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('/Data.json')
            .then(response => response.json())
            .then(data => {
                setUsers(data.students);
                if (userId !== undefined) {
                    setUser(data.students.find(u => u.id === parseInt(userId)));
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [userId]);

    if (userId !== undefined) {
        return (
            <div className="product-container">
                <h1>User Details</h1>
                {user ? (
                    <div className="user-details">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>College:</strong> {user.collegeName}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }

    return (
        <div className="product-container">
            <h1>All Users</h1>
            <ul className="users-list">
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Product;
import { useState } from 'react';
import '../Styles/Registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
        collegeName: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New user registered:', formData);
        alert('User registered successfully!');
        setFormData({ name: '', age: '', email: '', password: '', collegeName: '' });
    };

    return (
        <div className="registration-container">
            <h1>Register</h1>
            <p>All fields are required</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} minLength="3" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Age:</label>
                    <input className="form-input" type="number" name="age" value={formData.age} onChange={handleChange} min="18" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} minLength="8" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input className="form-input" type="password" name="password" value={formData.password} onChange={handleChange} minLength="8" required />
                </div>
                <div className="form-group">
                    <label className="form-label">College Name:</label>
                    <input className="form-input" type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} minLength="8" required />
                </div>
                <button className="form-button" type="submit">Register</button>
            </form>
        </div>
    );
}
export default Registration;
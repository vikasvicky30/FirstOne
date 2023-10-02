import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    address: '',
    gender: 'male',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending data to the server
    console.log(formData);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;

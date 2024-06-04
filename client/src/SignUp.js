import React, { useState } from 'react';
import './SignUp.css'; // Import CSS file for styling

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Signup with:', username, password);
    } else {
      console.log('Login with:', username, password);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="abc">
      <h2>{isLogin ? 'SignUp' : 'Login'}</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username:</label>
          <br />

          <input placeholder='Enter UserName' type="text" value={username} onChange={handleUsernameChange} />

          
        </div>
        
       
        <div> {/* Separate row for password */}
          <label>Password:</label>
          

          <input placeholder='Enter Password' type="password" value={password} onChange={handlePasswordChange} />

          
        </div>
        <button type="submit">{isLogin ? 'Login' : 'SignUp'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button onClick={toggleForm}>{isLogin ? 'SignUp' : 'Login'}</button>
      </p>
    </div>
  );
};

export default SignUp;

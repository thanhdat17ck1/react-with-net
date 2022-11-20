import { useState } from "react";
import { Link } from "react-router-dom"
import Register from "../register/Register";

async function loginUser(credentials) {
  return fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  
  const handleSubmit = async e => {
    console.log("username",username,"password",password);
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" onChange={e => setUserName(e.target.value)} placeholder="username"/>
            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="password"/>
            <button>login</button>
            <p className="message">Not registered? <Link to={Register}>Create an account</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Login;
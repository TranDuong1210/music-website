import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <form style={{ width: 400 }}>
      <div>
        <label>Email</label><br />
        <input type="email" placeholder="admin@gmail.com" style={{ width: '100%', padding: 8 }} />
      </div>

      <div style={{ marginTop: 10 }}>
        <label>Password</label><br />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: 8 }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
        <label>
          <input type="checkbox" /> Remember Me
        </label>
        <Link to="#">Forgot password?</Link>
      </div>

      <button type="submit" style={{
        width: '100%',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#4f76f6',
        color: '#fff',
        border: 'none',
        fontWeight: 'bold'
      }}>
        LOGIN
      </button>
    </form>
  );
}

export default LoginForm;

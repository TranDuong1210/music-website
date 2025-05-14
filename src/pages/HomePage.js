import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>Welcome to Music 2.0</h1>
      <button onClick={() => navigate('/login')}>Sign In</button>
      <br /><br />
      <button onClick={() => navigate('/')}>Sign Up</button> {/* Quay lại chính nó */}
    </div>
  );
}

export default HomePage;

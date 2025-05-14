import React from 'react';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import SongList from './components/SongList';

function App() {
  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
      <Navbar />
      <SongList />
      <MusicPlayer />
    </div>
  );
}

export default App;

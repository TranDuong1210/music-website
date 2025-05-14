import React from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  return (
    <div className="player">
      <button className="btn">⏮</button>
      <button className="btn">⏯</button>
      <button className="btn">⏭</button>
      <div className="track-info">
        <span>Now Playing: Song Name</span>
      </div>
    </div>
  );
};

export default MusicPlayer;

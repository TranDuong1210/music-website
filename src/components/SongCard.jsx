import React from 'react';
import './SongCard.css';

const SongCard = ({ title, artist }) => {
  return (
    <div className="song-card">
      <div className="song-info">
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default SongCard;

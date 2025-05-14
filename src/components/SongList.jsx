import React from 'react';
import SongCard from './SongCard';

const SongList = () => {
  const songs = [
    { title: 'Nắng Ấm Xa Dần', artist: 'Sơn Tùng M-TP' },
    { title: 'Em Của Ngày Hôm Qua', artist: 'Sơn Tùng M-TP' },
    { title: 'Lạc Trôi', artist: 'Sơn Tùng M-TP' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'white' }}>Danh sách bài hát</h2>
      {songs.map((song, index) => (
        <SongCard key={index} title={song.title} artist={song.artist} />
      ))}
    </div>
  );
};

export default SongList;

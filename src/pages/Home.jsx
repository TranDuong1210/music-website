import Navbar from '../components/Navbar';
import MusicPlayer from '../components/MusicPlayer';
import SongList from '../components/SongList';

const Home = () => (
  <>
    <Navbar />
    <div className="p-6">
      <MusicPlayer />
      <SongList />
    </div>
  </>
);

export default Home;

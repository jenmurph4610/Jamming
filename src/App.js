import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Track from './Track';
import Tracklist from './Tracklist';
import SaveToSpotifyButton from './SaveToSpotifyButton';
import SearchButton from './SearchButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming</h1>
        <SearchBar />
        <SearchButton />
        <SearchResults />
        <Playlist />
        <Track />
        <Tracklist />
        <SaveToSpotifyButton />
        
      </header>
    </div>
  );
}

export default App;

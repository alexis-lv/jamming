import React from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
          {name: 'Honda Civic', artist: 'Tory Lanez', album: 'Memories Dont Die', id: 1 },
          {name: 'Under The Influence', artist: 'Chris Brown', album: 'Indigo', id: 2},
          {name: 'Dark Paradise', artist: 'Lana Del Ray', album: 'Dark Paradise', id: 3},
          {name: "After Hours", artist: 'The Weeknd', album: "After Hours", id: 4}
        ],
      playlistName: 'Gym',
      playlistTracks: [
          {name: 'Frustrated', artist: 'Chris Brown', album: 'Indigo', id: 5},
          {name: 'Story To Tell', artist: 'Fredo Bang', album: '', id: 6},
          {name: 'Cleveland is The Reason', artist: 'Kid Cudi', album: 'High', id: 7},
          {name: 'Eventuall', artist: 'Tame Impala', album: 'Memories', id: 8}
        ]
    
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  search(term) {
    console.log(term);
  }


  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }


  updatePlaylistName(newPlaylistName) {
    this.setState({playlistName: newPlaylistName});
  }


  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }




  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>        
          <div className="App-playlist">
             <SearchResults searchResults={this.state.searchResults} 
                            onAdd={this.addTrack}/>    
                <Playlist playlistTracks={this.state.playlistTracks} 
                          playlistName={this.state.playlistName}
                          onRemove={this.removeTrack}
                          onNameChange={this.updatePlaylistName}
                          onSave={this.savePlaylist}/>     
          </div>
        </div>
      </div>
    )
  }
}

export default App;

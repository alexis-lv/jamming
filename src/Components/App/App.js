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

  }


  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }




  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />        
          <div className="App-playlist">
             <SearchResults searchResults={this.state.searchResults} 
                            onAdd={this.addTrack}/>    
                <Playlist playlistTracks={this.state.playlistTracks} 
                          playlistName={this.state.playlistName}/>     
          </div>
        </div>
      </div>
    )
  }
}

export default App;

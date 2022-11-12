import React from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'Honda Civic', artist: 'Tory Lanez', album: 'Memories Dont Die', id: 1 },
        {name: 'Under The Influence', artist: 'Chris Brown', ablum: 'Indigo', id: 2},
        {name: 'Dark Paradise', artist: 'Lana Del Ray', album: 'Dark Paradise', id: 3},
        {name: "After Hours", artist: 'The Weeknd', album: "After Hours", id: 4}]
    }
  }




  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />        
          <div className="App-playlist">
             <SearchResults searchResults={this.state.searchResults} />    
                <Playlist />     
          </div>
        </div>
      </div>
    )
  }
}

export default App;

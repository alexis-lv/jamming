import React from 'react';
import './Searchbar.css';

class SearchBar extends React.Component {
    constructor(prop) {
        super(props);
        this.search = this.search.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }


    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;
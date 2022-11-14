import React from 'react';
import './Searchbar.css';

class SearchBar extends React.Component {
    constructor(props) {  
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange;
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        const newTerm = e.target.value;
        this.setState({term: newTerm});
    }


    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;
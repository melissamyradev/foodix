import { useState } from 'react';
import './SearchBar.css';

function SearchBar({searchYelp}) {

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };

    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState(sortByOptions['Best Match']);

    const getSortByClass = sortByOption => {
        return sortBy === sortByOption ? 'active' : '';
    };

    const handleSortByChange = sortByOption => {
        setSortBy(sortByOption);
    };

    const handleTermChange = event => {
        setTerm(event.target.value)
    };

    const handleLocationChange = event => {
        setLocation(event.target.value)
    };

    const handleSearch = event => {
        searchYelp(term, location, sortBy);
        event.preventDefault();
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li onClick={() => handleSortByChange(sortByOptionValue)} className={getSortByClass(sortByOption)} key={sortByOptionValue}>{sortByOption}</li>
            )
        })
    };

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input onChange={handleTermChange} placeholder="Search Businesses" />
                <input onChange={handleLocationChange} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a onClick={handleSearch}>Let's Go</a>
            </div>
        </div>
    );
}

export default SearchBar;
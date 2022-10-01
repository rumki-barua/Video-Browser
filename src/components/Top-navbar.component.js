import React, { Component } from 'react';

class SearchBar extends Component {
    render() { 
        const { handleChange, trigger } = this.props;

        return (
            <div className='row'>
                <div className='col-lg-2'>
                    <img className='icon' src='https://static.vecteezy.com/system/resources/previews/003/206/623/original/youtube-editorial-app-icon-free-vector.jpg' />
                </div>
                <div className='col-lg-6 me-auto'>
                    <div className='search'>
                        <input 
                            onChange = { handleChange } 
                            placeholder = 'Search'
                            className = 'search-box'
                        />
                        <button className='search-btn' onClick={ trigger }>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SearchBar;
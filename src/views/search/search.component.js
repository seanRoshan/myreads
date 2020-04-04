import React from 'react';
import {Link} from "react-router-dom";

export const SearchComponent = (props) => {
    return (
        <div className="searchView">
            <input className="searchbar" placeholder="Search by title or author"/>
            <h1>TEST</h1>
            <Link to="/" className="backButton">
                <i title="Back" className="fa fa-arrow-left"/>
            </Link>
        </div>
    );
};

import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {ShelfComponent} from "../../components";

export const SearchComponent = (props) => {

    const {books, bookShelves, search, moveBook} = props;

    return (
        <div className="searchView">
            <input className="searchbar" onChange={(event) => (search(event.target.value))}
                   placeholder="Search by title or author"/>
            <ShelfComponent key="Search"
                            title="Search Results"
                            books={books}
                            shelves={bookShelves}
                            moveBook={(book, destination) => moveBook(book, destination)}
            />
            <Link to="/" className="backButton" onClick={()=>(search(""))}>
                <i title="Back" className="fa fa-arrow-left"/>
            </Link>
        </div>
    );
};

SearchComponent.propTypes = {
    books: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired,
    bookShelves: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
};

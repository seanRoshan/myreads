import React from 'react';
import {ShelfComponent} from "../../components";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export const HomeComponent = (props) => {
    const {bookShelves, moveBook} = props;

    return Object.keys(bookShelves).filter((key) => (!bookShelves[key].hidden)).map((key) => {
        const {title, books} = bookShelves[key];
        return (
            <React.Fragment>
                <ShelfComponent key={key}
                                title={title}
                                books={books}
                                shelves={bookShelves}
                                moveBook={(book, destination) => moveBook(book, destination)}
                />
                <Link to="/search" className="searchButton">
                    <i title="Search" className="fa fa-search"/>
                </Link>
            </React.Fragment>
        )
    })
};


HomeComponent.propTypes = {
    bookShelves: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
};

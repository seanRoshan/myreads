import React, {Component} from 'react';
import {BooksService} from "../../services";
import {HomeComponent, SearchComponent} from "../../views";
import {Route} from "react-router-dom";

export class DashboardComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            books: [],
            bookShelves: {
                'currentlyReading': {
                    books: [],
                    title: "Currently Reading"
                },
                'read': {
                    books: [],
                    title: "Read"
                },
                'wantToRead': {
                    books: [],
                    title: "Want to Read"
                },
                'none': {
                    books: [],
                    title: "None",
                    hidden: true
                }
            }

        };
        this.bookService = new BooksService();
    }

    componentDidMount() {
        this.loadBooks();
    }


    loadBooks() {
        const {bookShelves} = this.state;
        this.bookService.getAll().then((books) => {

            if (books && books.length > 0) {
                Object.keys(bookShelves).map((key) => (
                        bookShelves[key].books = books.filter((book) => (book.shelf === key))
                    )
                );
            }

            this.setState(() => ({
                    books,
                    bookShelves
                })
            );
        });
    }

    moveBook(book, destination) {
        console.log(`Move ${book.title} from ${book.shelf} to ${destination}!`);
        this.bookService.update(book, destination).then(() => (this.loadBooks()));
    }

    render() {

        return (
            <main className="dashboard">
                <Route exact path='/search' render={() => {
                    return (<SearchComponent/>)
                }}>
                </Route>
                <Route exact path='/' render={() => {
                    const {bookShelves} = this.state;
                    return (<HomeComponent
                        bookShelves={bookShelves}
                        moveBook={this.moveBook.bind(this)}
                    />)
                }}>
                </Route>
            </main>
        );
    }
}

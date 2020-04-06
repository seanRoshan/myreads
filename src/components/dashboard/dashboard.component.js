import React, {Component} from 'react';
import {BooksService} from "../../services";
import {HomeComponent, SearchComponent} from "../../views";
import {HashRouter, Route} from "react-router-dom";

export class DashboardComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchBooks: [],
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
        const {bookShelves, searchBooks} = this.state;
        this.bookService.getAll().then((books) => {
            if (books && books.length > 0) {
                Object.keys(bookShelves).map((key) => (
                        bookShelves[key].books = books.filter((book) => (book.shelf === key))
                    )
                );
            } else {
                books = [];
                Object.keys(bookShelves).map((key) => (
                        bookShelves[key].books = []
                    )
                );

            }
            this.setState(() => ({
                    books,
                    searchBooks: this.addBookShelfInfo(books, searchBooks),
                    bookShelves
                })
            );
        });
    }

    moveBook(book, destination) {
        if (!(book && destination)) return;
        this.bookService.update(book, destination).then(() => (this.loadBooks()));
    }

    addBookShelfInfo(books, searchBooks) {
        for (let searchBook of searchBooks) {
            searchBook.shelf = "none";
        }
        for (let book of books) {
            for (let searchBook of searchBooks) {
                if (book.id === searchBook.id) {
                    searchBook.shelf = book.shelf;
                    break;
                }
            }
        }
        return searchBooks;
    }

    searchBook(query) {
        if (!query) {
            this.setState(() => ({
                searchBooks: [],
            }));
            return;
        }
        this.bookService.search(query).then((searchBooks) => {
            const {books} = this.state;
            this.setState(() => ({
                    searchBooks: searchBooks && searchBooks.length ? this.addBookShelfInfo(books, searchBooks) : [],
                })
            )
        });
    }


    render() {
        return (
            <main className="dashboard">
                <HashRouter basename="/">
                    <Route exact path='/search' render={() => {
                        const {searchBooks, bookShelves} = this.state;
                        return (<SearchComponent
                            books={searchBooks}
                            bookShelves={bookShelves}
                            search={this.searchBook.bind(this)}
                            moveBook={this.moveBook.bind(this)}
                        />)
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
                </HashRouter>
            </main>
        );
    }
}

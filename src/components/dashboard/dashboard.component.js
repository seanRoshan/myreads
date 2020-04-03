import React, {Component} from 'react';
import {CardComponent} from "..";
import {BooksService} from "../../services";
import Grid from "@material-ui/core/Grid";


export class DashboardComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.bookService = new BooksService();
    }

    componentDidMount() {
        this.bookService.getAll().then((books) => {
            console.log(books);
            this.setState(() => ({
                    books
                })
            );
        });
    }

    moveBook(destination, bookTitle) {
        console.log(`Move ${bookTitle} to ${destination}!`);
    }

    render() {
        return (
            <main className="dashboard">
                <Grid className="item" container spacing={4}>
                    {this.state.books.map((book) => (
                        <Grid key={book.id} item xs={12} sm={6} md={4} lg={3} xl={4}>
                            <CardComponent
                                title={book.title}
                                authors={book.authors}
                                imageLink={book.imageLinks.thumbnail}
                                moveBook={(destination) => this.moveBook(destination, book.title)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </main>
        );
    }
}

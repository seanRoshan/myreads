export class BooksService {

    api = "https://reactnd-books-api.udacity.com";
    token = "";
    headers = {};

    constructor() {
        // Generate a unique token for storing your bookshelf data on the backend server.
        this.token = localStorage.token;
        if (!this.token)
            this.token = localStorage.token = Math.random().toString(36).substr(-8);

        this.headers = {
            'Accept': 'application/json',
            'Authorization': this.token
        };
    }

    get(bookId) {
        const {api, headers} = this;
        return fetch(`${api}/books/${bookId}`, headers)
            .then(res => res.json())
            .then(data => data.book);

    }

    getAll() {
        const {api, headers} = this;
        return fetch(`${api}/books`, {headers})
            .then(res => res.json())
            .then(data => data.books);

    }

    update(book, shelf) {
        const {api, headers} = this;
        return fetch(`${api}/books/${book.id}`, {
            method: 'PUT',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({shelf})
        }).then(res => res.json());
    }

    search(query) {
        const {api, headers} = this;
        return fetch(`${api}/search`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query})
        }).then(res => res.json())
            .then(data => data.books);
    }
}

import React, { useState } from 'react';
import Book from './Book';

function BookList(props) {
    let [books, setBooks] = useState([]);

    console.log(props.num);
    if (books.length === 0 || books.length!=props.num) {
        fetch('https://kob-e.github.io/react-book-store/books-data/books.json').then(responseData => {
            responseData.json().then(booksData => {
                const filteredBooks = booksData.slice(0, props.num);
                console.log(filteredBooks);
                for (let i = 0; i < filteredBooks.length; i++) {
                    filteredBooks[i].price = Math.ceil(Math.random() * 100);
                }
                setBooks(filteredBooks);
            })
        })
    }
    console.log(books);
    return (
        <section className="row">
            {books.map(b => <Book {...b} key={b.key} id={b.id} />)}
        </section>
    );
}

export default BookList;

import React, { useState } from 'react';
import Book from './Book';

function BookList(props){
    let[books, setBooks]=useState([]);
    fetch('https://kob-e.github.io/react-book-store/books-data/books.json').then(responseData => {
        responseData.json().then(booksData=>{ 
            const filteredBooks=booksData.slice(0, props.num);
            setBooks(filteredBooks);
        })
    });
return (
    <section>
        <h3>Books:</h3>
        {books.map(b=><Book {...b} key={b.key} />)}
      </section>
      );
}

export default BookList;
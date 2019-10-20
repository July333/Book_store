import React, { useState } from 'react';
import Book from './Book';

function BookList(){
    //fetch('https://kob-e.github.io/react-book-store/books-data/books.json').then(responseData => {
    //    responseData.json()
    const books=[{
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958,
        "id": 1
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836,
        "id": 2
    }];
return (
    <section>
        <h3>Books:</h3>
        <Book { ...books[0]} />
      </section>
      );
}

export default BookList;
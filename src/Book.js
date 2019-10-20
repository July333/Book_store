import React, { useState } from 'react';

function Book(props){
    const imagesBaseUrl = 'https://kob-e.github.io/react-book-store/books-data/';
return (
    <div>
          <h2>title: {props.title}</h2>
          <div>author: {props.author} </div>
          <div><img alt='picture' src={imagesBaseUrl + props.imageLink} /></div>
      </div>
      );
}

export default Book;
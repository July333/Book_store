import React, { useState } from 'react';

function Book(props) {
    const imagesBaseUrl = 'https://kob-e.github.io/react-book-store/books-data/';
    //<div>
    //    <h2>Title: {props.title}</h2>
    //    <div>Author: {props.author} </div>
    //    <div><img alt='picture' src={imagesBaseUrl + props.imageLink} /></div>
    //</div>
               // <a href="#" class="card-link">Card link</a>
    return (
        <div className="col-auto card border-info mb-3" style={{width: '20rem', height: '33rem'}}>
            <div className="card-header">Title: {props.title}</div>
            <div className="card-body">
                <h4 className="card-title">Author: {props.author}</h4>
                <p className="card-text">Price </p>
            </div>
            <img style={{height: '300px', width: '100%', display: 'block'}} src={imagesBaseUrl + props.imageLink} alt="Card image" />
        </div>
    );
}

export default Book;



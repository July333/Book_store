import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'jquery/dist/jquery.min';
import BookList from './BookList';
import Form from './Form';

function App() {
  return (
    <div className="container">
      <h1>My book store</h1>
      <Form />
      <BookList />
    </div>
  );
}

export default App;

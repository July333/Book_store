import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'jquery/dist/jquery.min';
import BookList from './BookList';
import Form from './Form';

function App() {
  const [num, setNum] = useState(5);

  const changeNumEvent = (num) => {
    setNum(num);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">My book store</h1>
      <Form changeNum={changeNumEvent} num={num} />
      </div>
      <BookList num={num} />
    </div>
  );
}

export default App;

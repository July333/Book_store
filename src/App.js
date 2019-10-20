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
      <h1>My book store</h1>
      <Form changeNum={changeNumEvent} num={num}/>
      <BookList num={num} />
    </div>
  );
}

export default App;

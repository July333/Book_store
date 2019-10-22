import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'jquery/dist/jquery.min';
import BookList from './BookList';
import Form from './Form';
import Cart from './Cart';

function App() {
  const [num, setNum] = useState(5);

  const changeNumEvent = (num) => {
    setNum(num);
    console.log(num);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">My book store</h1>
        <Form changeNum={changeNumEvent} num={num} />
      </div>
      <div className="row">
        <main className="col-7">
          <BookList num={num} />
        </main>
        <aside className="col-5">
          <Cart />
        </aside>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Book from './Components/Book';
import Login from './Components/Login';
import Register from './Components/Register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <div id="adi">
                <Book title="Math" price="250" />
                <Book title="Physics" price="200" />
                <Book title="Chemistry" price="300" />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

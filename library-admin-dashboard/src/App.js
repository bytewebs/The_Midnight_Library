import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Librarian's Desk</h1>
        <nav>
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Authors</a></li>
            <li><a href="#">Issue Books</a></li>
            <li><a href="#">Registered Users</a></li>
            <li><a href="#">Log Me Out</a></li>
            <li><a href="#">Change Password</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="card">
          <h2>Books Listed</h2>
          <p>2</p>
        </div>
        <div className="card">
          <h2>Authors Listed</h2>
          <p>2</p>
        </div>
        <div className="card">
          <h2>Times Book Issued</h2>
          <p>6</p>
        </div>
        <div className="card">
          <h2>Times Books Returned</h2>
          <p>3</p>
        </div>
        <div className="card">
          <h2>Registered Users</h2>
          <p>6</p>
        </div>
      </main>
    </div>
  );
}

export default App;

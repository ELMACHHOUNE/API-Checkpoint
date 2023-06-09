import React from 'react';
import UserList from './UserList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-heading">User List App</h1>
      </header>
      <main className="app-main">
        <UserList />
      </main>
      <footer className="app-footer">
        <p>&copy; 2023 User List App</p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import  ThemeContextProvider from './contexts/ThemeContext'
import NavBar from './components/NavBar'
import BookList from './components/BookList'
import ThemeToggle from './components/ThemeToggle';
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

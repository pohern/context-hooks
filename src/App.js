import React from 'react';
import  ThemeContextProvider from './contexts/ThemeContext'
import NavBar from './components/NavBar'
import BookList from './components/BookList'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <NavBar />
      <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

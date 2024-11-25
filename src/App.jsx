import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';


function App() {

  return (
    <>

      <BrowserRouter> {/* Put everything inside this component */}

        <Routes> {/* Put all the routes inside this component */}
          <Route path='/' element={<HomePage />}></Route> {/* This is the home page route */}
          <Route path='/books' element={<BooksPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/contacts' element={<ContactsPage />}></Route>


        </Routes>

      </BrowserRouter>

    </>
  );
};

export default App

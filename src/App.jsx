import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import DefaultLayout from './pages/DefaultLayout';


function App() {

  return (
    <>

      <BrowserRouter> {/* Put everything inside this component */}

        <Routes> {/* Put all the routes inside this component */}

          <Route element={<DefaultLayout />}>

            <Route path='/' element={<HomePage />}></Route>
            <Route path='/books' element={<BooksPage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/contacts' element={<ContactsPage />}></Route>
          </Route>


        </Routes>

      </BrowserRouter>

    </>
  );
};

export default App

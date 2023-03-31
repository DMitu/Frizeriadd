import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookingForm from './components/BookingForm';
import FuturisticNavbar from './components/FuturisticNavbar';
import Details from './components/Details'; 
import './App.css';
import FHeader from './components/FHeader';
import CopyrightNotice from './components/CopyrightNotice';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <div className='App'>
          <ToastContainer />
          <FuturisticNavbar />
          
          <div className="content-container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div>
                    <FHeader />
                    </div>
                    <div>
                      <BookingForm />
                    </div>
                  </>
                }
              />
              <Route path="/detalii" element={<Details />} /> 
            </Routes>
          </div>

          <CopyrightNotice />
        </div>
      </Router>
    </div>
  );
}

export default App;

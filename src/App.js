import React, {useState,useEffect} from 'react';
import  {Modal} from './Components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { HomePage, LoginPage } from './Pages';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  
  return (
    <Router>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Welcome!
        </p>
        <button onClick={toggleModal}>Login</button>
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        <Link to={'/login'}>Login</Link>
        <Link to={'/home'}>Home</Link>
        {/* <Modal show={showModal} onClose={toggleModal}/> */}
      </div>
    </Router>
  );
}
export default App;
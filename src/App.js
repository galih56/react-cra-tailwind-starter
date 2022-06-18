import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="users"/>}/>
          <Route path="/users/:id" element={<HomePage />}/>
          <Route path="/users" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="" element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
}

export default App;
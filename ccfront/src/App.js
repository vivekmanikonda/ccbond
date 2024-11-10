import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LanderPage from './Pages/LanderPage';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/RegisterPage/Register';
import Enquiry from './Pages/EnquiryPage/Enquiry';
import Sidebar from './Components/Sidebar';
import EnquiryForm from './Pages/EnquiryPage/EnquiryForm';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<LanderPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Enquiry" element={<Enquiry />} />
        <Route path="/Enquirycreate" element={<EnquiryForm />} />
        
      </Routes>
    </Router>
  );
}

export default App;

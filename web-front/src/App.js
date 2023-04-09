/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Sign_up from './components/sign_up';
import Login from './components/login';
import AboutUs from './components/aboutUs';
import ForgetPassword from './components/passforgotten';
import Resetpwd from './components/resetpwd';
import ListPatients from './components/listPatients';
import Consultation from './components/consultation';
import Profil from './components/profil';
import Connect from './components/connect'
import Documents from './components/documents';
import Contact from './components/contact';
import Pathologie from './components/pathologie';
import Data from './components/data';
import Stockage from './components/stockage';
import UserContext from './components/UserContext';
import './css/main.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PatientCards from "./components/patientCards";

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function App() {
    const [userEmail, setUserEmail] = useState(null);

  return (
      <UserContext.Provider value={{ userEmail, setUserEmail }}>
      <Router>
          <Routes>
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
              <Route exact path="connect" element={<Connect/>} />
            <Route exact path="/inscription" element={<Sign_up/>} />
            <Route exact path="/aboutUs" element={<AboutUs/>} />
            <Route exact path="/resetpwd" element={<Resetpwd/>} />
            <Route exact path="/passforgotten" element={<ForgetPassword/>} />
            <Route exact path="/listPatients" element={<ListPatients/>} />
            <Route exact path="/consultation" element={<Consultation/>} />
            <Route exact path="/profil" element={<Profil/>} />
            <Route exact path="/documents" element={<Documents/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/pathologie" element={<Pathologie/>} />
            <Route exact path="/data" element={<Data/>} />
            <Route exact path="/stockage" element={<Stockage/>} />
            <Route exact path="/patientCards" element={<PatientCards/>} />
          </Routes>
      </Router>
      </UserContext.Provider>
  );
}

export default App;



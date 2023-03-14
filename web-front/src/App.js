/* eslint-disable react/jsx-pascal-case */
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Sign_up from './components/sign_up';
import Login from './components/login';
import AboutUs from './components/aboutUs';
import ForgetPassword from './components/passforgotten';
import Resetpwd from './components/resetpwd';
import Principal from './components/principal';
import ListPatients from './components/listPatients';
import Consultation from './components/consultation';
import Profil from './components/profil';
import Documents from './components/documents';
import './css/main.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
  return (
      <Router>
          <Routes>
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/inscription" element={<Sign_up/>} />
            <Route exact path="/aboutUs" element={<AboutUs/>} />
            <Route exact path="/resetpwd" element={<Resetpwd/>} />
            <Route exact path="/passforgotten" element={<ForgetPassword/>} />
            <Route exact path="/principal" element={<Principal/>} />
            <Route exact path="/listPatients" element={<ListPatients/>} />
            <Route exact path="/consultation" element={<Consultation/>} />
            <Route exact path="/profil" element={<Profil/>} />
            <Route exact path="/documents" element={<Documents/>} />
          </Routes>
      </Router>
  );
}

export default App;



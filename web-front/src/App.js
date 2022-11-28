/* eslint-disable react/jsx-pascal-case */
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Sign_up from './components/sign_up';
import Form from './components/form';
import Login from './components/login';
import Connect from './components/connect';
import './css/main.css';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Main />
			<Footer /> */}
      <Login />
      {/* <Sign_up /> */}
    </div>
  );
}

export default App;

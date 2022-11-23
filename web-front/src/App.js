/* eslint-disable react/jsx-pascal-case */
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Sign_up from './components/sign_up';
import Form from './components/form';
import './css/main.css';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Main />
			<Footer /> */}
      <Sign_up />
      <Form/>
    </div>
  );
}

export default App;


import './App.css';
import { Footer, Footer1 } from './Component/Footer';
import { Navbar } from './Component/Navbar';
import New_page from './Pages/New_page';
import { MainRouter } from './Router/MainRouter';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from './Component/Login';
import { Otp } from './Component/Otp';
function App() {
  const logvalue = useSelector((Store) => Store.login)
  if (logvalue) {
    return (
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/OTP' element={<Otp />} />
      </Routes>
    )
  }
  return (
    <div className="App">
      <Navbar />
      <MainRouter />
      <Footer />
      <Footer1 />
    </div>
  );
}

export default App;

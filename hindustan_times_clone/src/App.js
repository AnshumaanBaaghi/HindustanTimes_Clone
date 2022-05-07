
import './App.css';
import { Footer, Footer1 } from './Component/Footer';
import { Navbar } from './Component/Navbar';
import New_page from './Pages/New_page';
import { MainRouter } from './Router/MainRouter';
function App() {

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

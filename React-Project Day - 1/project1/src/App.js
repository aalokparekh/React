import './App.css';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Header from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <Footer />
    </div>
  );
}

export default App;

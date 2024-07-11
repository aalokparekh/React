
import './App.css';
import Googlebutton from './components/Googlebutton';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
    <Signup/>
    <br/>
    <br/>
    <Login/>
    <br/>
    <br/>
    <Googlebutton/>
    </div>
  );
}

export default App;

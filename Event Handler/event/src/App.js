import { useState } from 'react';
import './App.css';
import Post from './components/Post';
import './components/Post.css'

function App() {
  const [data, setData] = useState([]);
  const [hidedata, setHidedata] = useState(false)

  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
    setHidedata(!hidedata);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>{hidedata ? "Hide Data" :"Get Data"}</button>
      {hidedata && data.map((el) =>(<Post key={el.id} title={el.title} body={el.body} />))}
    </div>
  );
}

export default App;

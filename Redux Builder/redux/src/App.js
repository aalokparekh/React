import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import Counter from './Components/Counter';
import './App.css';
import './Components/Style.css'





function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Counter />
</Provider>
    </div>
  );
}

export default App;

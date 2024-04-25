import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import "./App.css"

function App() {
  const[btn,setbtn]=useState(false)
  return (
    <div >
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={()=>setbtn(!btn)} >{btn ? "Show Non-Fiction Book" :"Show Fiction Book"}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}

        {btn ? <Fiction /> : <NonFiction/>}
      </div>
    </div>
  );
}

export default App;

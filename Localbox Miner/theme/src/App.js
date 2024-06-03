
import { useContext } from 'react';
import './App.css';
import {ThemeContext} from './ThemeContext';

function App() {
  const {theme,ToggleTheme}= useContext(ThemeContext)
  return (
    <div className="App">
    <h1>BOOK : The Millionaire Fastlane</h1>
    <p>The Millionaire Fastlane by MJ DeMarco is a guidebook for building long-lasting wealth. It emphasizes the importance of entrepreneurship and provides actionable advice for starting and growing a successful business.</p>
    <p> Lessons :Having the right mindset is crucial for success as an entrepreneur. One of the lessons from The Millionaire Fastlane emphasizes the importance of being willing to take risks, being persistent in the face of failure, and constantly seeking out opportunities for growth and improvement.</p>
    <h2></h2>
    <p>A Fastlane strategy is offensive attack on wealth, where incomes and asset values explode with small investments in time and/or money. Instead of making $50,000 a year in your job, you make $50,000 a month.</p>
    <button onClick={ToggleTheme}>{theme =="light" ? "Switch to Dark Mode " :"Switch to Light Mode"}</button>    
    </div>
  );
}

export default App;

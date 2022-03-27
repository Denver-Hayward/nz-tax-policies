import logo from './logo.svg';
import './App.css';
import { CurrentFTC } from './parties/Current/CurrentFTC';
import { Household } from './household/Household';
import { findByText } from '@testing-library/react';
import { Person } from './household/Person';


const ftc = new CurrentFTC()

let household = new Household();
household.people = [
  new Person({age: 5}),
  new Person({age: 5}),
  new Person({age: 30, income: 20000}),
  new Person({age: 30, income: 30000}),
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ftc.calculate(household)}
        </a>
      </header>
    </div>
  );
}

export default App;

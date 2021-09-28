import React,{ Component } from 'react';
//import React,{ Ingredient } from 'react';
import logo from './assets/logo.svg';
import Header from "./components/header";
import Dish, { Flag, Ingredient} from "./components/dish";
import './styles/App.css';
import "./styles/dish.css";


class App extends Component{
  render(){
  return (
    <div className="App">
      <Header/>
      <Dish/>
      <Flag/>
      <header className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;

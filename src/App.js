import React, {Component, components} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from "reactstrap";

import  Menu  from "./components/MenuComponent";
import {DISHES} from "./shared/dishes";

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    }
  }

  render(){
    return (
      <div className="App">
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes}/>
        </div>
      </div>
    );

  }
}



export default App;

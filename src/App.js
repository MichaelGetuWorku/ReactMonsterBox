import React, { Component } from 'react';
import MonsterBox from './Components/MonsterBox/MonsterBox';
import classes from './App.module.css'
// import MonsterView from "./Components/MonsterView/MonsterView";
class App extends Component {
  render() {
    return (
      <div className={classes.Appheader}>
        <h1 style={{textAlign:'center', marginBottom:'80px'}}>Monster Box</h1>
        <MonsterBox />
      </div>
    );
  }
}

export default App;

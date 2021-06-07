// import React, { Component } from 'react';
import classes from './MonsterView.module.css';

const MonsterView = props => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardList}>
        {/* {props.name}
        {props.email}
        {props.dis} */}
        <img
          src={`https://robohash.org/${props.id}?set=set2&size=200x200`}
          alt="monster-pic"
          className={classes.Monsterpic}
        />
        <h2>{props.name}</h2>
        <h4>{props.email}</h4>
        {/* <p>{props.dis}</p> */}
      </div>
    </div>
  );
};

export default MonsterView;

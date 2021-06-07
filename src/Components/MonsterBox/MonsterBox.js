import React, { Component } from 'react';
import classes from './MonsterBox.module.css';
import MonsterView from '../MonsterView/MonsterView';

class MonsterBox extends Component {
  state = {
    Monster: [
      {
        id: '1',
        name: 'Michael Getu',
        email: 'test@test@.com',
        discription:
          'I am a Wolf that transforms into wolf in every full moon and if ther is a Blood moon i will kill any one who stand in my way',
      },

      {
        id: '2',
        name: 'Thomas Getu',
        email: 'test@test@.com',
        discription:
          'I am a Vampier that sucks human blood i only go out when the sun sleeps amd i will kill any one who stand in my way',
      },

      {
        id: '3',
        name: 'Henok Getu',
        email: 'test@test@.com',
        discription:
          'I am a Frankestine i came back to life every 5 years and release fear in to the world i wont hasitsite to kill any one who stand in my way',
      },
      {
        id: '4',
        name: 'Betty Getu',
        email: 'test@test@.com',
        discription:
          'I am a Shapeshifter i can cange in to any one i want boy or girl it dosent matter',
      },
      {
        id: '5',
        name: 'Mahelet Baheru',
        email: 'test@test@.com',
        discription:
          'I am a Gohol i came back to life every 5 years and release fear in to the world i wont hasitsite to kill any one who stand in my way',
      },
      {
        id: '6',
        name: 'Hilu Ferega',
        email: 'test@test@.com',
        discription:
          'I am a Frankestine i came back to life every 5 years and release fear in to the world i wont hasitsite to kill any one who stand in my way',
      },
      {
        id: '7',
        name: 'Yohanes Feleke',
        email: 'test@test@.com',
        discription:
          'I am a Frankestine i came back to life every 5 years and release fear in to the world i wont hasitsite to kill any one who stand in my way',
      },
      {
        id: '8',
        name: 'Dawit Tosheme',
        email: 'test@test@.com',
        discription:
          'I am a Frankestine i came back to life every 5 years and release fear in to the world i wont hasitsite to kill any one who stand in my way',
      },
      {
        id: '9',
        name: 'Yonata Kebedea',
        email: 'test@test@.com',
        discription:
          'I am a Frankestine i came back to life every 5 years and release fear in to the world i wont hasitsite to kill any one who stand in my way',
      },
      {
        id: '10',
        name: 'Yednekachew Tebejea',
        email: 'test@test@.com',
        discription:
          'I am a Frankestine i came back to life every 5 years and release fear in to the world i wont hasitsite to kill any one who stand in my way',
      },
      {
        id: '11',
        name: 'Yesuf Deneke',
        email: 'test@test@.com',
        discription:
          'I am a Frankestine i came back to life every 5 years and release fear in to the world i wont hasitsite to kill any one who stand in my way',
      },
      {
        id: '12',
        name: 'Gorge Floyed',
        email: 'test@test@.com',
        discription:
          'I am a Frankestine i came back to life every 5 years and release fear in to the world i wont hasitsite to kill any one who stand in my way',
      },
    ],
  };
  render() {
    let monster = this.state.Monster.map(mos => {
      return (
        <MonsterView
          key={mos.id}
          id={mos.id}
          name={mos.name}
          email={mos.email}
          dis={mos.discription}
        />
      );
    });

    return <div className={classes.cardContainer}>{monster}</div>;
  }
}

export default MonsterBox;

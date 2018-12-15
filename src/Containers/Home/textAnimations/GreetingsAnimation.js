import React from 'react';
import { rollIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  rollIn1: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rollIn, 'rollIn')
  },
  rollIn2: {
    animation: 'x 3s',
    animationName: Radium.keyframes(rollIn, 'rollIn')
  },
  rollIn3: {
    animation: 'x 4s',
    animationName: Radium.keyframes(rollIn, 'rollIn')
  },
  rollIn4: {
    animation: 'x 6s',
    animationName: Radium.keyframes(rollIn, 'rollIn')
  },
};

export const NameAnimation = () => {
  return (
    <StyleRoot>
      <div className="test" style={styles.rollIn1}>
        <h1 style={{textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px', color: 'white', fontSize: '420%'}} className='text'>Tsvetomir Batinov</h1>
      </div>
    </StyleRoot>
  );
};
export const PositionAnimation = () => {
  return (
    <StyleRoot>
      <div className="test" style={styles.rollIn2}>
        <h1 style={{textAlign: 'center', fontFamily: 'sans-serif', color: 'white', fontSize: '250%'}} className='text'>Software Developer</h1>
      </div>
    </StyleRoot>
  );
};

export const GreetingsAnimation = () => {
  return (
    <StyleRoot>
      <div className="test" style={styles.rollIn3}>
        <h1 style={{textAlign: 'center', marginTop: '152px', fontFamily: 'sans-serif', color: 'white'}} className='text'>Welcome to my web site! </h1>
      </div>
    </StyleRoot>
  );
};

export const TextAnimation = () => {
  return (
    <StyleRoot>
      <div className="test" style={styles.rollIn4}>
        <h1 style={{textAlign: 'center', fontFamily: 'sans-serif',marginBottom: '33px', color: 'white'}} className='text'>Please take a second to go trough all the pages and don't forget to open the developer tools for examples of my code</h1>
      </div>
    </StyleRoot>
  );
};





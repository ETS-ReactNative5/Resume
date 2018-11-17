import React from 'react';
import { rollIn, wobble, bounceInDown, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  rollIn: {
    animation: 'x 5s',
    animationName: Radium.keyframes(rollIn, 'rollIn')
  },
  wobble: {
    animation: 'x 2s',
    animationName: Radium.keyframes(wobble, 'wobble')
  },
  bounceInDown: {
    animation: 'x 4s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  },
  fadeIn: {
    animation: 'x 4s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
};

export const NameAnimation = () => {
  return (
    <StyleRoot>
      <div className="test" style={styles.wobble}>
        <h1 style={{textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px', color: 'white', fontSize: '420%'}} className='text'>Tsvetomir Batinov</h1>
      </div>
    </StyleRoot>
  );
};
export const PositionAnimation = () => {
  return (
    <StyleRoot>
      <div className="test" style={styles.bounceInDown}>
        <h1 style={{textAlign: 'center', fontFamily: 'sans-serif', color: 'white', fontSize: '250%'}} className='text'>Software Developer</h1>
      </div>
    </StyleRoot>
  );
};

export const GreetingsAnimation = () => {
  return (
    <StyleRoot>
      <div className="test" style={styles.rollIn}>
        <h1 style={{textAlign: 'center', marginTop: '152px', fontFamily: 'sans-serif', color: 'white'}} className='text'>Welcome to my web site! </h1>
      </div>
    </StyleRoot>
  );
};

export const TextAnimation = () => {
  return (
    <StyleRoot>
      <div className="test" style={styles.fadeIn}>
        <h1 style={{textAlign: 'center', fontFamily: 'sans-serif',marginBottom: '33px', color: 'white'}} className='text'>Please take a second to go trough all the pages and don't forget to open the developer tools for examples of my code</h1>
      </div>
    </StyleRoot>
  );
};





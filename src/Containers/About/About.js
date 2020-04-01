import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../Components/TopMenu/TopMenu';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import { withStyles } from '@material-ui/core/styles';
import Pictureme from './pictureMe.jpg';
// import SkillBar from 'react-skillbars';

const styles = () => ({
  pictureOfMe: {
    '@media screen and (min-width: 601px)': {
      width: '35%',
      height: 'auto',
      marginLeft: '8%',
    },
    '@media screen and (max-width: 600px)': {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '70%',
    },
  },
  block: {
    '@media screen and (min-width: 601px)': {
      float: 'right',
      width: '21%',
      paddingTop: '2%',
      paddingRight: '15%',
      fontSize: '2vw',
    },
  },
  header: {
    textAlign: 'center',
    marginTop: '4%',
    fontSize: '500%',
  },
  skillBar: {
    margin: '0 auto',
    width: '82%',
  }
});

const skillsFront = [
  {type: 'HTML', level: 99},
  {type: 'CSS', level: 80},
  {type: 'JavaScript', level: 91},
  {type: 'React', level: 90},
  {type: 'Redux', level: 60},
  {type: 'AngularJS', level: 50},
  {type: 'jQuery', level: 75},
];

const skillsBack = [
  {type: 'Java', level: 55},
  {type: 'MySQL', level: 95},
  {type: 'Git', level: 90},
];

const colors = {
  'bar': 'grey',
  'title': {
    'text': {
      'hue': 45,
      'saturation': {
        'minimum': 30,
        'maximum': 70
      },
      'level': 100
    },
    'background': {
      'hue': 0,
      'saturation': {
        'minimum': 100,
        'maximum': 100
      },
      'level': {
        'minimum': 0,
        'maximum': 0
      }
    }
  }
};

class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: window.innerWidth,
      age : this.getAge(),
    };
  }

    getAge = () => {
      var today = new Date();
      var birthDate = '1994';
      var age = today.getFullYear() - birthDate;
      return age;
    }

    render() {
      const { classes } = this.props;
      const { age } = this.state;
      return (
        <div>
          <TopMenu value={1}/>
          <header>
            <h1 className={classes.header}>
            About Me
            </h1>
          </header>
          <div>
            <img className={classes.pictureOfMe} src={Pictureme} alt=""/>
            <blockquote className={classes.block} cite="http://www.worldwildlife.org/who/index.html">
              Hello, my name is Tsvetomir Batinov and i am {age} years old. For the past 2 years i have spend my days and nights
              learning programming. This page will be my humble beginning in showcasing my portofolio and getting to know me a bit better.
            </blockquote>
          </div>
          <div>
            <h1 className={classes.header}> Skills </h1>
          </div>
          <div className={classes.skillBar}>
            <h1>
            Frontend
            </h1>

          </div>
          <div style={{paddingBottom: '20%'}} className={classes.skillBar}>
            <h1>
            Backend
            </h1>

          </div>
        </div>
      );
    }
}

const root = () => (
  <Provider store={configureStore(History)}>
    <ConnectedApp history={History} />
  </Provider>
);

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ConnectedApp = (withStyles(styles)(About));

export default root;

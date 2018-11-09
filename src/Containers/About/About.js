import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../Components/TopMenu/topMenu';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import { withStyles } from '@material-ui/core/styles';
import Pictureofme from '../Home/Image/pictureofme.jpg';
import SkillBar from 'react-skillbars';

const styles = theme => ({
  pictureOfMe: {
    height: '436px',
    paddingTop: '3%',
    paddingLeft: '26%',
  },
  pictureOfMeSmall: {
    width: '65%',
    height: '307px',
    paddingLeft: '17%',
  },
  block: {
    float: 'right',
    width: '21%',
    paddingTop: '2%',
    paddingRight: '21%',
    fontSize: '24px'
  },
  blockSmall: {
    width: '63%%',
    paddingTop: '2%',
    fontSize: '18px',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    marginTop: '4%',
    fontSize: '500%',
  },
  skillBar: {
    width: '48%',
    display: 'inline-block',
    margin: '1%',
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
      const { width, age } = this.state;
      return (
        <div style={{backgroundSize: 'cover', margin: '-0.55%'}}>
          <TopMenu value={1}/>
          <header>
            <h1 className={classes.header}>
            About Me
            </h1>
          </header>
          <div>
            <img className={width > 1000? classes.pictureOfMe : classes.pictureOfMeSmall} src={Pictureofme} alt=""/>
            <blockquote className={width > 1000? classes.block : classes.blockSmall} cite="http://www.worldwildlife.org/who/index.html">
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
            <SkillBar  skills={skillsFront} colors={colors} height={25}/>

          </div>
          <div style={{paddingBottom: '20%'}} className={classes.skillBar}>
            <h1>
            Backend
            </h1>
            <SkillBar  skills={skillsBack} colors={colors} height={25}/>

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

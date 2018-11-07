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
    width: '28%',
    height: '356px',
    paddingTop: '3%',
    paddingLeft: '13%',
  },
  block: {
    float: 'right',
    width: '21%',
    paddingTop: '2%',
    paddingRight: '19%',
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
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{backgroundSize: 'cover', margin: '-0.55%'}}>
        <TopMenu value={1}/>
        <header>
          <h1 className={classes.header}>
            About Me
          </h1>
        </header>
        <div>
          <img className={classes.pictureOfMe} src={Pictureofme} alt=""/>
          <blockquote className={classes.block} cite="http://www.worldwildlife.org/who/index.html">
          For 50 years, WWF has been protecting the future of nature. The worlds leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
          For 50 years, WWF has been protecting the future of nature. The worlds leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
          For 50 years, WWF has been protecting the future of nature. The worlds leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
          For 50 years, WWF has been protecting the future of nature. The worlds leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
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

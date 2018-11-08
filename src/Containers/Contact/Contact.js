import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../Components/TopMenu/topMenu';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocationIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import { LinkedinIcon } from './Icons/linkedinIcon';
import { GitHubIcon } from './Icons/gitHubIcon';


const styles = theme => ({
  background: {
    backgroundSize: 'cover',
    margin: '-0.55%',
    minHeight: '100%',
  },
  backgroundSmall: {
    margin: '-2.55%',
    height: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  divContent: {
    width: '25%',
    margin: '0 auto',
    paddingTop: '10%',
  },
  divContentSmall: {
    margin: '0 auto',
    marginTop: '44px',
    width: '66%',
  },
  text: {
    display: 'inline',
    fontSize: '28px',
  },
  textSmall: {
    display: 'inline',
    fontSize: '14px',
  },
  iconDiv: {
    cursor: 'pointer',
    display: 'inline-block',
    width: '35%',
    paddingLeft: '84px',
  },
  iconDivSmall: {
    cursor: 'pointer',
    display: 'inline-block',
    width: '35%',
    paddingLeft: '43px',
  },
});

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  linkedinRedirect = () =>{
    window.location.replace('https://www.linkedin.com/in/tsvetomir-batinov-852957103/');
  }
  gitHubRedirect = () =>{
    window.location.replace('https://github.com/Sclipper/Resume');
  }

  render() {
    const { classes } = this.props;
    const { width } = this.state;
    return (
      <div className = {width > 1000? classes.background : classes.backgroundSmall}>
        <TopMenu value={3}/>
        <div className = {width > 1000? classes.divContent : classes.divContentSmall}>
          <Paper className={classes.root} elevation={1}>
            <div>
              <ListItemIcon>
                <LocationIcon />
              </ListItemIcon>
              <Typography className={width > 1000? classes.text : classes.textSmall} variant="h5" component="h3">
              Copenhagen, Denmark
              </Typography>
            </div>
            <div>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <Typography className={width > 1000? classes.text : classes.textSmall} variant="h5" component="h3">
                tsbatinov@gmail.com
              </Typography>
            </div>
            <div style={{paddingTop: '5px', cursor: 'pointer',}}>
              <div onClick={this.linkedinRedirect} className={width > 1000? classes.iconDiv : classes.iconDivSmall}>
                <LinkedinIcon  />
              </div>
              <div onClick={this.gitHubRedirect} style={{display: 'inline-block'}}>
                <GitHubIcon />
              </div>
            </div>
          </Paper>
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

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ConnectedApp = (withStyles(styles)(Contact));

export default root;

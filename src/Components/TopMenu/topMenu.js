import React from 'react';
import PropTypes from 'prop-types';
import topMenuJSON from '../../JSONfiles/topMenuJSON';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Route } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import {topMenuConstants} from '../../types/topMenuConstants';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabRoot: {
    backgroundColor: 'black',
    centered: true,
    height: '30%',
  },
});

class TopMenu extends React.Component {
  constructor(props){
    super(props);
    this.data = topMenuJSON;
    this.state = {
      value: false,
    };
  }

  handleChange = (event) => {
    console.log(event.target.innerText);
    const { dispatch, topMenu } = this.props;
    console.log(topMenu);

    if(event.target.innerText === 'HOME'){
      dispatch({
        type: topMenuConstants.TOP_MENU_VALUE_REQUEST,
        payload: {
          value: 0,
        },
      });
    }
    if(event.target.innerText === 'ABOUT'){
      dispatch({
        type: topMenuConstants.TOP_MENU_VALUE_REQUEST,
        payload: {
          value: 1,
        },
      });
    }
    if(event.target.innerText === 'PROJECTS'){
      dispatch({
        type: topMenuConstants.TOP_MENU_VALUE_REQUEST,
        payload: {
          value: 2,
        },
      });
    }
    if(event.target.innerText === 'CONTACT'){
      dispatch({
        type: topMenuConstants.TOP_MENU_VALUE_REQUEST,
        payload: {
          value: 3,
        },
      });
    }
  };

  render() {
    const {classes, value } = this.props;
    return (
      <AppBar position="static">
        <Tabs
          value={value}
          centered
          classes={{ root: classes.tabRoot, }}
        >
          {this.data.TopMenu.map(item => (
            // eslint-disable-next-line react/jsx-key
            <Route key={item.id + 1} render={({ history}) => (
              <Tab
                onClick={this.handleChange}
                onChange={() => { history.push(`/${item.text}`); }}
                key={item.id}
                id={item.id}
                label={item.text}
                classes={{ root: classes.tabRoot }}
              />
            )} />
          ))}
        </Tabs>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  value: state.topMenu.value,
  topMenu: state.topMenu,
});

TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  value: PropTypes.number,
  topMenu: PropTypes.object,
};

export default connect(mapStateToProps)(withStyles(styles)(TopMenu));

import React from 'react';
import PropTypes from 'prop-types';
import topMenuJSON from '../../JSONfiles/topMenuJSON';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Route } from 'react-router-dom';
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
            <Route key={item.id + 1} render={({ history}) => (
              <Tab
                onClick={() => { history.push(`/${item.text}`); }}
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

TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  value: PropTypes.number,
  topMenu: PropTypes.object,
};

export default (withStyles(styles)(TopMenu));

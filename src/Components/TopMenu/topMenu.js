import React from 'react';
import PropTypes from 'prop-types';
import topMenuJSON from '../../JSONfiles/topMenuJSON';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
    height: '70px',
  },
  tabSelected: {
    backgroundColor: '#444444'
  }
});

class TopMenu extends React.Component {
  constructor(props){
    super(props);
    this.data = topMenuJSON;
    this.state = {
      value: 0,
    };
  }

    handleChange = (event, value) => {
      this.setState({ value });
    };

    render() {
      const {classes } = this.props;
      const { value } = this.state;

      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              centered
              classes={{ root: classes.tabRoot }}
              value={value}
              onChange={this.handleChange}>

              {this.data.TopMenu.map(item => (
                <Tab
                  key={item.id}
                  id={item.id}
                  label={item.text}
                  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      );
    }
}

TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopMenu);

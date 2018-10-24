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
  }
    handleChange = () => {
      console.log(this.props.value);
      //this.setState({ value: this.props.value });
    };

    render() {
      const {classes } = this.props;
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              centered
              classes={{ root: classes.tabRoot, }}
              value={this.props.value}
              onClick={this.handleChange}>
              {this.data.TopMenu.map(item => (
                // eslint-disable-next-line react/jsx-key
                <Route render={({ history}) => (
                  // Todo: Make the Projects be a dropdown menu
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
        </div>
      );
    }
}

const mapStateToProps = state => ({
  value: state.topMenu.value,
});

TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  value: PropTypes.number,
};

export default connect(mapStateToProps)(withStyles(styles)(TopMenu));

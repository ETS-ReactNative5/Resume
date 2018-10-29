import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const styles = theme => ({
  root: {
    maxWidth: '99%',
    border: '3px solid lightgrey',
    margin: '8px',
    fontSize: '20px',
    backgroundColor: 'white',
  },
});


class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div align="center" className={classes.root}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.task.content}
          </div>
        )}
      </Draggable>
    );
  }

}
Task.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.string,
  content: PropTypes.object,
  index: PropTypes.number
};

export default withStyles(styles)(Task);



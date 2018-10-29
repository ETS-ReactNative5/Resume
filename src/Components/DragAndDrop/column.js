import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles/index';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './task';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});



class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection:'column', border: '3px solid black', margin: '10px', width: '300% !important'}}>
        <h2 align="center" style={{padding: '8px'}}>{this.props.column.title}</h2>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <h3 style={{minHeight: '50px', padding: '8px'}}
              provided={provided}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.tasks.map((task, index) =>
                <Task key={task.id} task={task} index={index}/>)}
              {provided.placeholder}
            </h3>
          )}
        </Droppable>
      </div>
    );
  }
}

Column.propTypes = {
  classes: PropTypes.object.isRequired,
  column: PropTypes.object,
  title: PropTypes.string,
  tasks: PropTypes.array,
};

export default withStyles(styles)(Column);

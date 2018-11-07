import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './column';
import Grid from '@material-ui/core/Grid';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {
        'To Do task1': {id: 'To Do task1', content: 'take out the garbage'},
        'To Do task2': {id: 'To Do task2', content: 'watch a show'},
        'To Do task3': {id: 'To Do task3', content: 'charge the phone'},
        'To Do task4': {id: 'To Do task4', content: 'cook diner'},
      },
      columns: {
        'column1': {
          id: 'column1',
          title: 'To Do',
          taskIds: ['To Do task1', 'To Do task2', 'To Do task3', 'To Do task4'],
        },
        'column2': {
          id: 'column2',
          title: 'In Progress',
          taskIds: [],
        },
        'column3': {
          id: 'column3',
          title: 'Done',
          taskIds: [],
        },
      },
      columnOrder: ['column1','column2','column3'],
    };
  }

onDragEnd = result => {
  const { destination, source, draggableId } = result;

  if (!destination){
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
      destination.index === source.index
  ) {
    return;
  }

  const start = this.state.columns[source.droppableId];
  const finish = this.state.columns[destination.droppableId];

  if (start === finish){
    const newTaskIds = Array.from(start.taskIds);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...start,
      taskIds: newTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };
    console.log(newState);
    this.setState(newState);
    return;
  }

  const startTaskIds = Array.from(start.taskIds);
  startTaskIds.splice(source.index, 1);

  const newStart = {
    ...start,
    taskIds: startTaskIds,
  };

  const finishTaskIds = Array.from(finish.taskIds);
  finishTaskIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finish,
    taskIds: finishTaskIds,
  };

  const newState = {
    ...this.state,
    columns: {
      ...this.state.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    },
  };
  this.setState(newState);
};

render() {
  return (
    <DragDropContext onDragEnd = {this.onDragEnd}>
      <Grid container spacing={24}>
        <Grid style={{display: 'flex'}} item xs={4}>
          {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
            return <Column key ={column.id} column ={column} tasks={tasks} />;
          })}
        </Grid>
      </Grid>
    </DragDropContext>
  );
}
}

export default List;

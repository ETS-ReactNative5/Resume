import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { ToDoList } from './ToDoList';
import { TaskList } from './ToDoComponents/taskList';
import { configure, shallow } from 'enzyme';

configure({adapter: new Adapter()});

describe('If TextField', () => {
  it('should render a textField', () => {
    const wrapper = shallow(<ToDoList />);
    expect(wrapper.find(TaskList)).toEqual(true);
  });
});

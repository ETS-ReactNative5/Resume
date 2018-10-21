import * as React from 'react';
import { BrowserRouter, Route, Switch as RouterSwitch } from 'react-router-dom';
import Home from '../Containers/Home';
import Projects from '../Containers/Projects';
import ToDoList from '../Components/ToDoList/ToDoList';


/**
 * Matches the routes with pathing
 * @return {Route Component}
 */

export const AppRoutes = () => (
  <BrowserRouter>
    <RouterSwitch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Projects/ToDoList" component={ToDoList} />
    </RouterSwitch>
  </BrowserRouter>
);

export default AppRoutes;

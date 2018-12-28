import * as React from 'react';
import { BrowserRouter, Route, Switch as RouterSwitch } from 'react-router-dom';
import Home from '../Containers/Home/Home';
import Projects from '../Containers/Projects/Projects';
import Contact from '../Containers/Contact/Contact';
import About from '../Containers/About/About';
import ToDoList from '../Components/ToDoList/ToDoList';
import DragAndDrop from '../Components/DragAndDrop/DragAndDrop';


/**
 * Matches the routes with pathing
 * @return {Route Component}
 */

export const AppRoutes = () => (
  <BrowserRouter>
    <RouterSwitch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Projects/ToDoList" component={ToDoList} />
      <Route exact path="/Projects/Drag&Drop" component={DragAndDrop} />
      <Route exact path='/Projects/Chaos' component={() => { window.location = 'https://id1zg8jjnezwxsiyvjbong-on.drv.tw/Chaos%20Game/'; return null;} }/>
    </RouterSwitch>
  </BrowserRouter>
);

export default AppRoutes;

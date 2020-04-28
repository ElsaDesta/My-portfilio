import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from './Components/Projects';
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
      <Route exact path="/">
       <Home />
      </Route>
      <Route path="/projects">
      <Projects />
      </Route>
      <Route path="about">
        <About />
      </Route>
      <Route path="contact">
        <Contact />
      </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;

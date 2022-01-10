import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/about'
import Contact from './Components/contact/contact'
import Works from './Components/MyWorks/works'
import {useState} from 'react'
function App() {
 
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>  
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/about' component={About}/>
        <Route exact path ='/works' component={Works}/>
        <Route exact path ='/contact-me' component={Contact}/>
        
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;

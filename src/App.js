import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SingleImage from './components/SingleImage';

const App = () =>{
  return (
    <Router>
    	<Navbar />
    	<div className="container mt-2">
    		<Route path='/' exact component={Home}/>
    		<Route path='/image/:id' component={SingleImage}/>
    	</div>
    </Router>
  );
}

export default App;

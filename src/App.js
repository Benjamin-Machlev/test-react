import React from 'react';
import './App.css';
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Link>Home page</Link>
        <Link>2</Link>

        <Switch>
          <Route exact path='/' component={()=>{return <h1>home page</h1>}}/>
          <Route exact path='/page2' component={()=>{return <h1> page 2</h1>}}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

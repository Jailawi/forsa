import React from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch> 
         </Router> 
      
    </div>
  );
}

export default App;

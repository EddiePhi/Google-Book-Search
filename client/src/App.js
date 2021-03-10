// Referencing code from JoelDore: https://github.com/JoelDore/goog-reads/
// Referencing code from WK21-Act 05

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/OurNav';
import Jumbotron from './components/Jumbotron'
import Saved from './pages/Saved'
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Jumbotron />
        <Route exact path={['/', '/search']} component={Search} />
        <Route exact path='/saved' component={Saved} />
      </div>
    </Router>
  );
}

export default App;

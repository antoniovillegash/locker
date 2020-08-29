import React from 'react';
import MainContent from './components/index/mainContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    
    <Router>
    <Switch>
        <Route path="/" component={MainContent} />

        {/*<Route exact path="/"  component={MainSection} />
         <Route exact path="/category" component={CategorySection} />
        <Route exact path="/article" component={ViewArticle} /> */}

    
    </Switch>

</Router>
    
  );
}

export default App;

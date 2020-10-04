import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateLocker from '../createLocker/createLocker';
// import CategorySection from '../category-section/categorySection';
// import ViewArticle from '../articles/viewArticle';

const index=()=>{
    
        return (

            <Router>
                <Switch>
                    <Route path="/create-locker" component={CreateLocker} />

                    {/*<Route exact path="/"  component={MainSection} />
                     <Route exact path="/category" component={CategorySection} />
                    <Route exact path="/article" component={ViewArticle} /> */}

                
                </Switch>

            </Router>

        )
    
}

export default index;

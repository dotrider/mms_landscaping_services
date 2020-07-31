import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Project from './Components/Project/Project'

export default (

    <Switch>
        <Route exact path='/' component={Home}/> 
        <Route path='/project/:id' component={Project}/>
    </Switch>
)
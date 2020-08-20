import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Display from './Components/Display/Display'


export default (

    <Switch>
        <Route exact path='/' component={Home}/> 
        <Route path='/project/:id' component={Project}/>
        <Route path='/contactUs' component={Contact}/> 
        <Route path='/services' component={Display}/> 
    </Switch>
)
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Service from './Components/Service/Service'
import Contact from './Components/Contact/Contact'
import Display from './Components/Display/Display'


export default (

    <Switch>
        <Route exact path='/' component={Home}/> 
        <Route path='/service/:id' component={Service}/>
        <Route path='/contactUs' component={Contact}/> 
        <Route path='/display' component={Display}/> 
    </Switch>
)
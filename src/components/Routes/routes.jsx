import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../Home/home';
import StudentData from '../StudentData/StudentData';

export default function Routes (){

    return(
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/studentdata" component={StudentData}/>
        </Switch>
    );


}
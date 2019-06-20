import React from 'react';
import {HashRouter as Router,Route,Redirect} from "react-router-dom"
import {mainRoute,backRoute} from "routers"

export default class App extends React.Component{
    render(){
      return (
        <Router>
              {
                mainRoute.map((item,index)=>(
                  <Route key={index} path={item.pathname} component={item.component}/>
                ))
              }
              {
                 backRoute.map((item,index)=>(
                  <Route key={index} path={item.pathname} component={item.component}/>
                ))
              }
              <Redirect from="/mine" to="/mine/myhome" exact />
              <Redirect from="**" to="/login"/>
          
        </Router>
      )
    }
}

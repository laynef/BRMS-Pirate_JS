/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-10-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-14-2016
*/

import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";

import './main.html';
import App from './app/App.jsx';

var Routes = React.createClass({
  render: function() {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={App}>

        </Route>
      </Router>
    );
  }
});

Meteor.startup(function(){
  ReactDOM.render(<Routes />, document.getElementById("app"));
});

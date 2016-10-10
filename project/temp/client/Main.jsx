import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router";

import './main.html';

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1>We Love Hiliary!</h1>
      </div>
    );
  }
});

Meteor.startup(function(){
  ReactDOM.render(<Main />, document.getElementById("app"));
});

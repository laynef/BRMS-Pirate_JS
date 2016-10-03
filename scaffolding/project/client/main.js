/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-02-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-02-2016
*/

import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Main from './js/Main.jsx';
import './main.html';

Meteor.startup(function(){
  ReactDOM.render(<Main/>, document.getElementById('root'));
});

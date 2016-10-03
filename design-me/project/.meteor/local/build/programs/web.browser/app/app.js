var require = meteorInstall({"client":{"main.html":["./template.main.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// client/main.html                                                                   //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
module.exports = require("./template.main.js");                                       // 1
                                                                                      // 2
////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// client/template.main.js                                                            //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
                                                                                      // 1
Template.body.addContent((function() {                                                // 2
  var view = this;                                                                    // 3
  return HTML.Raw('<div id="root"></div>');                                           // 4
}));                                                                                  // 5
Meteor.startup(Template.body.renderToDocument);                                       // 6
                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////

},"js":{"App.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","react-router",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// client/js/App.jsx                                                                  //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React;module.import('react',{"default":function(v){React=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Router,Route,Link;module.import('react-router',{"Router":function(v){Router=v},"Route":function(v){Route=v},"Link":function(v){Link=v}});
                                                                                      //
                                                                                      //
/**                                                                                   //
* @Author: Layne Faler <laynefaler>                                                   //
* @Date:   10-02-2016                                                                 //
* @Email:  laynefaler@gmail.com                                                       //
* @Last modified by:   laynefaler                                                     //
* @Last modified time: 10-02-2016                                                     //
*/                                                                                    //
                                                                                      //
                                                                                      // 9
                                                                                      // 10
                                                                                      // 11
                                                                                      //
var App = function (_React$Component) {                                               //
  _inherits(App, _React$Component);                                                   //
                                                                                      //
  function App() {                                                                    //
    _classCallCheck(this, App);                                                       //
                                                                                      //
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }                                                                                   //
                                                                                      //
  App.prototype.render = function () {                                                //
    function render() {                                                               //
      return React.createElement(                                                     // 15
        'h1',                                                                         // 16
        null,                                                                         // 16
        'We Love You Hilary!'                                                         // 16
      );                                                                              // 16
    }                                                                                 // 18
                                                                                      //
    return render;                                                                    //
  }();                                                                                //
                                                                                      //
  return App;                                                                         //
}(React.Component);                                                                   //
                                                                                      //
module.export("default",exports.default=(App));                                       // 21
////////////////////////////////////////////////////////////////////////////////////////

}],"Main.jsx":["react","react-dom","react-router","./App",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// client/js/Main.jsx                                                                 //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var React;module.import('react',{"default":function(v){React=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Router,Route,Link;module.import('react-router',{"Router":function(v){Router=v},"Route":function(v){Route=v},"Link":function(v){Link=v}});var App;module.import('./App',{"default":function(v){App=v}});/**
* @Author: Layne Faler <laynefaler>                                                   //
* @Date:   10-02-2016                                                                 //
* @Email:  laynefaler@gmail.com                                                       //
* @Last modified by:   laynefaler                                                     //
* @Last modified time: 10-02-2016                                                     //
*/                                                                                    //
                                                                                      //
                                                                                      // 9
                                                                                      // 10
                                                                                      // 11
                                                                                      //
                                                                                      // 13
                                                                                      //
var Main = React.createClass({                                                        // 15
  displayName: 'Main',                                                                // 15
                                                                                      //
  render: function () {                                                               // 16
    function render() {                                                               // 16
      return React.createElement(App, null);                                          // 17
    }                                                                                 // 20
                                                                                      //
    return render;                                                                    // 16
  }()                                                                                 // 16
});                                                                                   // 15
                                                                                      //
module.export("default",exports.default=(Main));                                      // 23
////////////////////////////////////////////////////////////////////////////////////////

}]},"main.js":["meteor/meteor","react","react-dom","react-router","./js/Main.jsx","./main.html",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// client/main.js                                                                     //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var React;module.import('react',{"default":function(v){React=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Router,Route,Link;module.import('react-router',{"Router":function(v){Router=v},"Route":function(v){Route=v},"Link":function(v){Link=v}});var Main;module.import('./js/Main.jsx',{"default":function(v){Main=v}});module.import('./main.html');/**
* @Author: Layne Faler <laynefaler>                                                   //
* @Date:   10-02-2016                                                                 //
* @Email:  laynefaler@gmail.com                                                       //
* @Last modified by:   laynefaler                                                     //
* @Last modified time: 10-02-2016                                                     //
*/                                                                                    //
                                                                                      //
                                                                                      // 9
                                                                                      // 10
                                                                                      // 11
                                                                                      // 12
                                                                                      //
                                                                                      // 14
                                                                                      // 15
                                                                                      //
Meteor.startup(function () {                                                          // 17
  ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));  // 18
});                                                                                   // 19
////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".jsx",".scss"]});
require("./client/template.main.js");
require("./client/js/App.jsx");
require("./client/js/Main.jsx");
require("./client/main.js");
var React=require('react');

var ReactDom=require('react-dom');

//var List=require('./components/List.jsx');

var NumbersButton=require('./components/numbers.jsx');
var Manager=require('./components/manager.jsx');


ReactDom.render(<Manager />, document.getElementById('ingredients'));

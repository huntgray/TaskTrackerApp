var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var ToDoComponent = React.createClass({
  render: function(){
    return(
      <h1>TaskTrackerApp</h1>
    )
  }
});

//Places component in index.html
ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));

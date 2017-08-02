var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var ToDoComponent = React.createClass({
  getInitialState: function(){
    return {
      todo_items: ['Wash the car', 'Buy groceries', 'Cut the grass']
    }
  },
  render: function(){
    return(
      <div id="todo-list">
        <h1>TaskTrackerApp</h1>
        <ul>
          <li>{this.state.todo_items[0]}</li>
          <li>{this.state.todo_items[1]}</li>
          <li>{this.state.todo_items[2]}</li>
        </ul>
      </div>
    )
  }
});

//Places component in index.html
ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));

var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var ToDoComponent = React.createClass({
  getInitialState: function(){
    var todo_items = ['Wash the car', 'Buy groceries', 'Cut the grass'],
    todo_items_length = todo_items.length;
    return {
      todo_items: todo_items,
      num_items: todo_items_length
    }
  },
  render: function(){
    //setState and bind this obect to the following function
    var adjustLength = setTimeout(function(){

      this.setState({
        num_items: (function(){
          return 100;
        }())
      });
    }.bind(this), 5000);
    return(
      <div id="todo-list">
        <h1>TaskTrackerApp</h1>
        <p><strong># of Items To Do: </strong>{this.state.num_items}</p>
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

var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');

//Module requires
var ToDoItem = require('./ToDoItem');

//Create component
var ToDoComponent = React.createClass({
  getInitialState: function(){
    var todo_items = ['Wash the car', 'Buy groceries', 'Cut the grass', 'Cut flowers'],
    todo_items_length = todo_items.length;
    return {
      todo_items: todo_items,
      num_items: todo_items_length
    }
  },
  render: function(){
    var todo_items = this.state.todo_items;
    todo_items = todo_items.map(function(item, index){
      return(
        <ToDoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id="todo-list">
        <h1>TaskTrackerApp</h1>
        <p><strong># of To Do Items to complete: </strong>{this.state.num_items}</p>
        <ul>{todo_items}</ul>
      </div>
    )
  },
  onDelete: function(item){
    var updatedToDos = this.state.todo_items.filter(function(val, index){
      return item !== val;
    });
    var updatedNumItems = updatedToDos.length;
    this.setState({
      todo_items: updatedToDos,
      num_items: updatedNumItems
    });
  }
});



//Places component in index.html
ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));

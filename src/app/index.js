var React = require('react');
var ReactDOM = require('react-dom');

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
    //setState and bind this obect to the following function
    var adjustLength = setTimeout(function(){
      this.setState({
        num_items: (function(){
          return 100;
        }())
      });
    }.bind(this), 3000);
    return(
      <div id="todo-list">
        <h1>TaskTrackerApp</h1>
        <p><strong># of Items To Do: </strong>{this.state.num_items}</p>
        <ul>{todo_items}</ul>
      </div>
    )
  },
  onDelete: function(item){
    var updatedToDos = this.state.todo_items.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todo_items: updatedToDos
    });
  }
});

var ToDoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="delete-item" onClick={this.handleDelete}>x</span>
        </div>
      </li>
    );
  }, //render

  //Custom function
  handleDelete: function(){
    this.props.onDelete(this.props.item);
  }
});

//Places component in index.html
ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));

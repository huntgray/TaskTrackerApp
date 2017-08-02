var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');
import {Router, Route, browserHistory} from 'react-router';

//Module requires
var ToDoItem = require('./ToDoItem');
var AddItem = require('./AddItem');
var About = require('./about');

var App = React.createClass({
  render: function(){
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={ToDoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    )
  }
});

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
        <p><strong># of items to complete: </strong>{this.state.num_items}</p>
        <ul>{todo_items}</ul>
        <AddItem onAddItem={this.onAddItem}/>
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
  },
  onAddItem: function(item){
    var updatedToDos = this.state.todo_items;
    updatedToDos.push(item);
    var updatedNumItems = updatedToDos.length;
    this.setState({
      todo_items: updatedToDos,
      num_items: updatedNumItems
    });
  }
});



//Places component in index.html
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));

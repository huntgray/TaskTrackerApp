var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var ToDoComponent = React.createClass({
  render: function(){
    return(
      <div>
        <h1>TaskTrackerApp</h1>
        <ul>
          <li>{todo_items.items[0]}</li>
          <li>{todo_items.items[1]}</li>
          <li>{todo_items.items[2]}</li>
        </ul>
      </div>
    )
  }
});

var todo_items = {
  items: ['Wash the car', 'Buy groceries', 'Cut the grass']
}

//Places component in index.html
ReactDOM.render(<ToDoComponent todo_items={todo_items} />, document.getElementById('todo-wrapper'));

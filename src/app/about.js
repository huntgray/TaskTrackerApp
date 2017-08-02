var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <div>
        <h1>About the TaskTrackerApp</h1>
        <p>The TaskTrackerApp is a great little ReactJS app designed to help you keep on track of all of your daily tasks. Simply type in a new task and click 'Add Task' to add a new task to your list. To remove a task, click the 'x' to the right of the task you want to delete. Easy as 1, 2, Task!</p>
      </div>
    );
  }
});

module.exports = About;

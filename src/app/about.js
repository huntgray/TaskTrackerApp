var React = require('react');
import {Link} from 'react-router';

var About = React.createClass({
  render: function(){
    return(
      <div>
        <h1>About the TaskTrackerApp</h1>
        <Link to={'/'}>Home</Link>
        <p>The TaskTrackerApp is a simple ReactJS app designed to help you keep track of your daily tasks. Type in a new task and click 'Add Task', or click the 'x' to the right of the task you wish to delete. Easy as 1, 2, Add Task!</p>
      </div>
    );
  }
});

module.exports = About;

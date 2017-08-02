var React = require('react');
require('./css/addItem.css');

var AddItem = React.createClass({
  render: function(){
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" ref="newItem" required />
        <input type="submit" value="Add Task" />
      </form>
    )
  },

  //Custom function
  handleSubmit: function(){
    this.props.onAddItem(this.refs.newItem.value);
  }
});

module.exports = AddItem;

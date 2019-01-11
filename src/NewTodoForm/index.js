import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="task">Todo</label>
          <input
            type="text"
            className="form-control"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    );
  }
}

export default NewTodoForm;

import React, { Component } from 'react';
import './index.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      edit: false
    };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleClick = evt => {
    this.setState(currState => ({
      edit: !currState.edit
    }));

    if (this.state.edit) {
      this.props.edit(this.props.id, this.state.task);
    }
  };

  handleRemove = () => {
    this.props.remove(this.props.id);
  };

  render() {
    return (
      <li className="Todo list-group-item">
        <input
          type="text"
          name="task"
          className={this.state.edit ? '' : 'form-control-plaintext'}
          onChange={this.handleChange}
          value={this.state.task}
          readOnly={!this.state.edit}
        />
        <button onClick={this.handleClick}>
          {this.state.edit ? 'save' : 'edit'}
        </button>
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}

export default Todo;

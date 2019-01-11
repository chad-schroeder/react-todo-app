import React, { Component } from 'react';
import NewTodoForm from '../NewTodoForm';
import Todo from '../Todo';
import uuid from 'uuid/v4';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  renderTodos = () => {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        edit={this.edit}
        remove={this.remove}
      />
    ));
    return <ul className="list-group my-4">{todos}</ul>;
  };

  add = task => {
    const todo = { task, id: uuid() };
    this.setState(currState => ({
      todos: [...currState.todos, todo]
    }));
  };

  edit = (id, task) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: task };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  remove = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    return (
      <React.Fragment>
        <NewTodoForm addTodo={this.add} />
        {this.renderTodos()}
      </React.Fragment>
    );
  }
}

export default ToDoList;

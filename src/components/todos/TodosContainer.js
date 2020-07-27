import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map(todo => <Todo key={todo.id} todo={todo} delete={this.props.delete} />) // if no curly braces no need for return statement

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: formData => dispatch({type: 'DELETE_TODO', payload: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

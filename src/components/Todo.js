import React, { Component } from 'react';
import Todoitem from './Todoitem';

class Todo extends Component {
 render(){
   return this.props.todo.map((todo)=> (
     <h3>{ todo.title}</h3>
   ));
 }
}

export default Todo;

import React, { Component } from 'react';
import Todoitem from './Todoitem';

class Todo extends Component {
 render(){
   return this.props.todo.map((todo)=> (
     <Todoitem todo={todo} />
   ));
 }
}

export default Todo;

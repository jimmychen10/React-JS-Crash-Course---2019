import React,{Component} from 'react';
import TodoItem from './TodoItem';

class Todos extends Component{
    render(){
        // This here is a prop = property
        console.log(this.props.todos)
        // .map goesthrough the array
        // the (todo) is a variable 
        return this.props.todos.map((todo)=>(
            // <h3>{todo.title}</h3>
            <TodoItem key= {todo.id}item = {todo}/>
        ));
    }
}


export default Todos;

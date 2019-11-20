import React,{Component} from 'react';
import Todos from './components/Todos.js'
import './App.css';

class App extends Component{
  // state is similare to an object
  state = {
    todos:[
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner wiht wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with Boss',
        completed: true
      }
    ]
  }

  // Toggle Complete
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id === id){
          todo.completed = !todo.completed
      }
      return todo
    })})
}

// Delete Todo
delTodo = (id) =>{
  this.setState({ todos:[...this.state.todos.filter(todo => todo.id !==id)] });
}

  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
         {/* todos={this.state.todos} is a property in which the Todos.js use */}
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo= {this.delTodo}/>
      </div>
    );
  }
}
export default App;

import React,{Component} from 'react';
import Todos from './todos'
import AddToDo from './Addtodo'
class App extends Component{
  state={
    todo:[
      {id:1,content:'buy some milk'},
      {id:2,content:'play mario kart'}
    ]
  }
  deleteTodo=(id)=>{
    console.log(id);
    const ntodos=this.state.todo.filter(todo=>
      {
        return todo.id!==id
      })
this.setState({
  todo:ntodos
})
  }
  addTodo=(todo)=>{
todo.id=Math.random();
let todos=[...this.state.todo,todo];
this.setState({
  todo:todos
})
  }
  render(){
    return(
      <div className="todo-app container">
     <h1 className="center blue-text">Todo's</h1>
     <Todos todos={this.state.todo} deleteTodo={this.deleteTodo}/>
     <AddToDo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;

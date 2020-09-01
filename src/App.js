import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      todo: [],
    };
  }


  // you will need a place to store your state in this component.
  addNewListItem = (itemName, cb) => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false,
    };
    this.setState({...this.state, todo: [...this.state.todo, newItem]});
    if(cb){
      cb();
    }
  };
  
  clearCompleted = (cb) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((item) => {
        return !item.completed;
      }),
    });
    if(cb){
      cb();
    }
  };

  toggleCompleted = (itemID) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map((item)=>{
        if (item.id !== itemID){
          return item;
        } else {
          return{...item, completed: !item.completed};
        }
      }),
    });
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your To Do App!</h2>
        <TodoForm
        onSubmit={this.addNewListItem}
        onClear={this.clearCompleted}
        />
        <TodoList 
        todoList={this.state.todo}
        toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;

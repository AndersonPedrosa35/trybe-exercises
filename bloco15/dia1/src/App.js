import React from 'react';
import InputTodo from './InputTodo.js';
import Item from './Item';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  handleDblClick({ target }) {
    console.log('mudou');
    
  }

  render(){
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo) => (
                  <Item  content={todo} key={ todo } onDoubleClick={ this.handleDblClick } />
              ))
            }
          </ul>
        }
      </div>
    );
  }
}

export default App;

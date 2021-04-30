import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      cliqueBotao1: 0,
      cliqueBotao2: 0,
      cliqueBotao3: 0,
    }
  }
  
  handleClick1() {
    this.setState((estadoAnterior, _prop) => ({
      cliqueBotao1: estadoAnterior.cliqueBotao1 + 1,
    }));
  }
  handleClick2() {
    this.setState((estadoAnterior, _prop) => ({
      cliqueBotao2: estadoAnterior.cliqueBotao2 + 1,
    }))
  }
  handleClick3() {
    this.setState((estadoAnterior, _prop) => ({
      cliqueBotao3: estadoAnterior.cliqueBotao3 + 1,
    }))
  }
  render(){
    return (
      <div>
        <button className={ this.state.cliqueBotao1 % 2 === 0 ? 'par' : 'impar' }
          onClick={this.handleClick1}>{this.state.cliqueBotao1}</button>
        <button onClick={this.handleClick2}>{this.state.cliqueBotao2}</button>
        <button onClick={this.handleClick3}>{this.state.cliqueBotao3}</button>
      </div>
    );
  }
}

export default App;

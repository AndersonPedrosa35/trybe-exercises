import React from 'react';
import { connect } from 'react-redux';
import { actionChange } from '../actions/action';
import './form.css';

class Form extends React.Component {
  constructor () {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.removeCharSpec = this.removeCharSpec.bind(this)

    this.state = {
      name: '',
      email: '',
      cpf: 0,
      cep: 0,
      endereco: '',
      city: '',
      states: '',
      checkbox: false,
    }
  }
  
  handleChange({ target }) {
    const { name } = target; // nome dos inputs
    const value = name === 'checkbox' ? target.checked : target.value;
    // ternario para verificar se existe um checkbox
    this.setState({ [name]: value });
  }

  removeCharSpec() {
    this.setState({
      adress: this.state.adress.split(`@#$%&*'"`).join(),
    })
  }

  notReload(event) {
    event.preventDefault();
  }

  render () {
    const { client, clientState } = this.props;
    console.log(clientState);
    return (
      <section>
        <h1>Cadastre-se</h1>
        <form action='GET'>
          <label>
            Nome
            <input type="text" name="name" value={this.state.name.toUpperCase()} onChange={this.handleChange} maxLength='40' required />
          </label>
          <label>
             Email {/* Validação com o Regex */}
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} maxLength='50' required />
          </label>
          <label>
            CPF
            <input type="text" name="cpf" value={this.state.cpf === 0 ? '' : this.state.cpf} onChange={this.handleChange} maxLength='11' required />
          </label>
          <label>
            CEP
            <input type="text" name="cep" value={this.state.cep === 0 ? '' : this.state.cep} onChange={this.handleChange} maxLength='8' required />
          </label>
          <label>
             Endereço                {/* Remover qualquer caractere especial */}
            <input type="text" name="endereco" value={this.state.endereco} onChange={this.handleChange} maxLength='200' required />
          </label>
          <label>
             Cidade  {/* Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo. */}
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange} maxLength="28" required />
          </label>
          <label>
             Estado {/* Select contendo todos os estados brasileiros */}
            <input type="text" name="states" value={this.state.states} onChange={this.handleChange} maxLength="20" required />
          </label>
          <label>
            Quer receber promoções
            <input type="checkbox" name="checkbox" className="checkbox" value={this.state.checkbox} onChange={this.handleChange} />
          </label>
          <button 
            type='submit' 
            onClick={ (event) => { 
              client(this.state);
              this.notReload(event);
            }}
          >
            Cadastrar
          </button>
        </form>
      </section>  
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  client: (payload) => dispatch(actionChange(payload)),
})

const mapStateToProps = (state) => ({
  clientState: state,
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);

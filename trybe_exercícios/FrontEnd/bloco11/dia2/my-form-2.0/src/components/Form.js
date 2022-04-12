import React, { Component } from "react";
import Input from "./Input";
import Select from "./Select";
import estados from "./data";
import Radio from "./Radio";
import Textarea from "./Textarea";
import "../style/Fieldset.css";
import Curriculo from "./Curriculo";
import Submit from "./Submit";

const initialState = {
  Nome: '',
  Email: '',
  CPF: '',
  Endereço: '',
  Cidade: '',
  Estado: '',
  Complemento: '',
  Resumo: '',
  Cargo: '',
  Descrição: '',
  submitted: false,
}

class Form extends Component {
  constructor() {
    super()

    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showsCurriculum(state) {
    if (state.submitted) {
      return (
        <Curriculo  
          name={state.Nome}
          email={state.Email}
          cpf={state.CPF}
          address={state.Endereço}
          city={state.Cidade}
          countryState={state.Estado}
          addressType={state.Complemento}
          resume={state.Resumo}
          role={state.Cargo}
          roleDescription={state.Descrição}
        />
      )
    }
    return <p>Preencha os dados e clique em "Criar" para montar seu currículo!</p>
  }

  removeCityName(value) {
    const valueArray = value.split('');
    const isNumber = valueArray.some((element) => !isNaN(parseInt(element)));
    if (isNumber) {
      return '';
    } else {
      return value;
    }
  }

  handleChange(event) {
    let { name, value } = event.target;
    if (name === 'Nome') value = value.toUpperCase();
    if (name === 'Endereço') value = value.replace(/[^a-z0-9' ']/gi, '');
    if (name === 'Cidade') value = this.removeCityName(value);
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true,
    })
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Dados pessoais</legend>
            <Input
              onChange={this.handleChange}
              name="Nome"
              type="text"
              maxLength="40"
              // onBlur={this.valueToUpperCase}
              required={true}
            />
            <Input
              onChange={this.handleChange} 
              name="Email"
              type="text"
              maxLength="50"
              required={true}
            />
            <Input
              onChange={this.handleChange}
              name="CPF"
              type="text"
              maxLength="11"
              required={true}
            />
            <Input
              onChange={this.handleChange}
              name="Endereço"
              type="text"
              maxLength="200"
              onBlur={this.removeSpecialChar}
              required={true}
            />
            <Input
              onChange={this.handleChange}
              name="Cidade"
              type="text"
              maxLength="28"
              // onBlur={this.removeCityName} foi juntado tudo em handleChange
              required={true}
            />
            <Select
              onChange={this.handleChange}
              states={estados}
              name="Estado"
              required={true}
            />
            <Radio
              onChange={this.handleChange}
              name="Complemento"
              options={['Casa', 'Apartamento']}
              required={true}
            />
          </fieldset>
          <fieldset>
            <Textarea
              onChange={this.handleChange}
              name="Resumo"
              type="text"
              cols="30"
              rows="10"
              maxLength="1000"
              required={true}
              id={1}
            />
            <Textarea
              onChange={this.handleChange}
              name="Cargo"
              type="text"
              cols="20"
              rows="2"
              maxLength="40"
              required={true}
              id={2}
            />
            <Input
              onChange={this.handleChange} 
              name="Descrição"
              type="text"
              maxLength="500"
              required={true}
            />
          </fieldset>
          <Submit name="Criar" />
        </form>
        <div>
          {this.showsCurriculum(this.state)}
        </div>
      </main>
    ) 
  }
}

export default Form;
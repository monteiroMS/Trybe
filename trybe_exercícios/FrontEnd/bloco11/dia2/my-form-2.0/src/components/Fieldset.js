import React, { Component } from "react";
import Input from "./Input";
import Select from "./Select";
import estados from "./data";
import Radio from "./Radio";
import "../style/Fieldset.css";

class Fieldset extends Component {
  valueToUpperCase({ target }) {
    target.value = target.value.toUpperCase();
  }

  removeSpecialChar({ target }) {
    target.value = target.value.replace(/[^a-z0-9' ']/gi, '');
  }

  removeCityName({ target }) {
    const valueArray = target.value.split('');
    const isNumber = valueArray.some((element) => !isNaN(parseInt(element)));
    if (isNumber) {
      target.value = '';
    }
  }

  render() {
    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <Input 
          name="Nome"
          type="text"
          maxLength={40}
          onChange={this.valueToUpperCase}
          required={true}
        />
        <Input 
          name="E-mail"
          type="text"
          maxLength={50}
          required={true}
        />
        <Input
          name="CPF"
          type="text"
          maxLength={11}
          required={true}
        />
        <Input
          name="Endereço"
          type="text"
          maxLength={200}
          onChange={this.removeSpecialChar}
          required={true}
        />
        <Input
          name="Cidade"
          type="text"
          maxLength={28}
          onBlur={this.removeCityName}
          required={true}
        />
        <Select
          states={estados}
          name="Estado"
          required={true}
        />
        <Radio
          name="Complemento"
          options={['Casa', 'Apartamento']}
          required={true}
        />
      </fieldset>
    ) 
  }
}

export default Fieldset;
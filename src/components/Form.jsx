import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form>
          <h1>Adicionar nova carta</h1>
          <label htmlFor="name-input">
            Nome
            <input
              data-testid="name-input"
              name="cardName"
              onChange={ onInputChange }
              type="text"
              value={ cardName }
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              data-testid="description-input"
              name="cardDescription"
              onChange={ onInputChange }
              type="textarea"
              value={ cardDescription }
            />
          </label>
          <label htmlFor="attr1-input">
            Attr01
            <input
              data-testid="attr1-input"
              name="cardAttr1"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr1 }
            />
          </label>
          <label htmlFor="attr2-input">
            Attr02
            <input
              data-testid="attr2-input"
              name="cardAttr2"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr2 }
            />
          </label>
          <label htmlFor="attr3-input">
            Attr03
            <input
              data-testid="attr3-input"
              name="cardAttr3"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr3 }
            />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              data-testid="image-input"
              name="cardImage"
              onChange={ onInputChange }
              type="text"
              value={ cardImage }
            />
          </label>
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              name="cardRare"
              onChange={ onInputChange }
              type="number"
              value={ cardRare }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trunfo
            <input
              checked={ cardTrunfo }
              data-testid="trunfo-input"
              name="cardTrunfo"
              onChange={ onInputChange }
              type="checkbox"

            />
          </label>
          <button
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            name="isSaveButtonDisabled"
            onClick={ onSaveButtonClick }
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}
// requisito 2 - props
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,

  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

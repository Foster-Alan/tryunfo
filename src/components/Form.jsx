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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (

      <form className="form">
        <h1 className="header-form">Adicionar nova carta</h1>
        <div className="form-container">
          <label htmlFor="name-input">
            <span>Nome</span>
            <input
              data-testid="name-input"
              name="cardName"
              onChange={ onInputChange }
              type="text"
              value={ cardName }
            />
          </label>
          <label htmlFor="description-input">
            <span>Descrição</span>
            <input
              data-testid="description-input"
              name="cardDescription"
              onChange={ onInputChange }
              type="textarea"
              value={ cardDescription }
            />
          </label>
          <label htmlFor="attr1-input">
            <span>Elemento</span>
            <input
              data-testid="attr1-input"
              name="cardAttr1"
              onChange={ onInputChange }
              type="text"
              value={ cardAttr1 }
            />
          </label>
          <label htmlFor="attr2-input">
            <span>Ataque</span>
            <input
              data-testid="attr2-input"
              name="cardAttr2"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr2 }
            />
          </label>
          <label htmlFor="attr3-input">
            <span>Defesa</span>
            <input
              data-testid="attr3-input"
              name="cardAttr3"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr3 }
            />
          </label>
          <label htmlFor="image-input">
            <span>Imagem</span>
            <input
              data-testid="image-input"
              name="cardImage"
              onChange={ onInputChange }
              type="text"
              value={ cardImage }
            />
          </label>
          <div className="div-second-form">

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

            <label htmlFor="trunfo-input">
              Super Trunfo
              { hasTrunfo
                ? <span>Você já tem um Super Trunfo em seu baralho</span> : (
                  <input
                    checked={ cardTrunfo }
                    data-testid="trunfo-input"
                    name="cardTrunfo"
                    onChange={ onInputChange }
                    type="checkbox"

                  />)}
            </label>
          </div>
          <button
            className="btn-submit-card"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            name="isSaveButtonDisabled"
            onClick={ onSaveButtonClick }
            type="submit"
          >
            Salvar
          </button>
        </div>
      </form>

    );
  }
}

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
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;

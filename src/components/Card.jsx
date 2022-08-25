import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;

    return (
      <div className="card">
        <h1>Card</h1>
        <div>
          <h3 data-testid="name-card">{ cardName }</h3>
          <div className="img-card">
            <img
              className="img-card"
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />
          </div>
          <p
            className="description-card"
            data-testid="description-card"
          >
            { cardDescription }

          </p>
          <div className="atributes">
            <h4 data-testid="attr1-card">{ cardAttr1 }</h4>
            <h4 data-testid="attr2-card">{ cardAttr2 }</h4>
            <h4 data-testid="attr3-card">{ cardAttr3 }</h4>
            <h3 data-testid="rare-card">{ cardRare }</h3>
            { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
            {/* O AND lógico ( &&) avalia os operandos da esquerda para a direita, retornando imediatamente com o valor do primeiro operando falso que encontrar; se todos os valores forem true , o valor do último operando será retornado. */}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

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
        <div className="test">
          <p className="element" data-testid="attr1-card">
            Element:
            {' '}
            { cardAttr1 }
          </p>
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
          <p data-testid="rare-card">{ cardRare }</p>
          <div className="atributes">
            <p className="atk-def" data-testid="attr2-card">
              Atk:
              {' '}
              { cardAttr2 }
            </p>
            <p className="atk-def" data-testid="attr3-card">
              Def:
              {' '}
              { cardAttr3 }
            </p>
          </div>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
          {/* O AND lógico ( &&) avalia os operandos da esquerda para a direita, retornando imediatamente com o valor do primeiro operando falso que encontrar; se todos os valores forem true , o valor do último operando será retornado. */}
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

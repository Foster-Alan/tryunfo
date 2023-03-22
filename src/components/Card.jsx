import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      // cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      // cardRare,
      // cardTrunfo,
    } = this.props;

    return (
    // <div className="card">
    //   <div className="test">
    //     <p className="element" data-testid="attr1-card">
    //       Element:
    //       {' '}
    //       { cardAttr1 }
    //     </p>
    //     <h3 data-testid="name-card">{ cardName }</h3>
    //     <div className="img-card">
    //       <img
    //         className="img-card"
    //         src={ cardImage }
    //         alt={ cardName }
    //         data-testid="image-card"
    //       />
    //     </div>
    //     <p
    //       className="description-card"
    //       data-testid="description-card"
    //     >
    //       { cardDescription }

      //     </p>
      //     <p data-testid="rare-card">{ cardRare }</p>
      //     <div className="atributes">
      //       <p className="atk-def" data-testid="attr2-card">
      //         Atk:
      //         {' '}
      //         { cardAttr2 }
      //       </p>
      //       <p className="atk-def" data-testid="attr3-card">
      //         Def:
      //         {' '}
      //         { cardAttr3 }
      //       </p>
      //     </div>
      //     { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
      //     {/* O AND lógico ( &&) avalia os operandos da esquerda para a direita, retornando imediatamente com o valor do primeiro operando falso que encontrar; se todos os valores forem true , o valor do último operando será retornado. */}
      //   </div>
      // </div>
      <div id="card">
        <div id="name">
          {cardName}
          <span id="symbol"><img src="https://vignette.wikia.nocookie.net/yugioh/images/d/de/DARK.svg/revision/latest/scale-to-width-down/300?cb=20120918053848" alt="symbol" /></span>
        </div>
        <div id="level">   &#9733;&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div id="pic">
          <img src={ cardImage } alt="pic" />
        </div>
        <div id="description">
          <h2>[Fiend/Normal]</h2>
          <p>
            {cardDescription}
          </p>

          <div id="stats">
            ATK /
            {' '}
            {cardAttr2}
            {' '}
&nbsp;  DEF /
            {' '}
            {cardAttr3}

          </div>
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  // cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  // cardRare: PropTypes.string.isRequired,
  // cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

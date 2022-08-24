import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    hasTrunfo: false,
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    filterCards: [],
    disabledInput: false,
  };

  filteredName = (event) => {
    const { savedCards } = this.state;
    const { target: { value } } = event;
    this.setState({ filterCards: savedCards
      .filter((param) => (param.cardName).includes(value)) });
  };

  FilteredRare = (event) => {
    const { savedCards } = this.state;
    const { target: { value } } = event;
    this.setState({ filterCards: savedCards
      .filter((param) => ((value === 'todas') ? savedCards : param.cardRare === value)),
    });
  };

  filteredTrunfo = (event) => {
    const { savedCards } = this.state;
    const { target: { checked } } = event;
    if (checked === false) {
      this.setState({ disabledInput: false });
      this.setState({ filterCards: (checked === false)
        ? savedCards
        : savedCards.filter((param) => (param.cardTrunfo === checked)),
      });
    } else {
      this.setState({ disabledInput: true });
      this.setState({ filterCards: (checked === false)
        ? savedCards
        : savedCards.filter((param) => (param.cardTrunfo === checked)),
      });
    }
  };

  checkTrunfo = () => {
    const { filterCards } = this.state;
    if (filterCards.find((param) => param.cardTrunfo === true)) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  removeCard = (param) => {
    const { filterCards, savedCards } = this.state;
    filterCards.splice(param, 1);
    savedCards.splice(param, 1);
    this.setState({ filterCards }, () => this.checkTrunfo());
    this.setState({ savedCards }, () => this.checkTrunfo());
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.verifyteSaveButton());
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.verifySuperTrunfo();
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
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((prevState) => ({
      savedCards: [
        ...prevState.savedCards,
        card,
      ],
      filterCards: [
        ...prevState.savedCards,
        card,
      ],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }, () => this.checkTrunfo());
  };

  verifyteSaveButton = () => {
    if (this.verifyAttribute() && this.verifyText()) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    return this.setState({ isSaveButtonDisabled: true });
  };

  verifyAttribute = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const sumAttrs = attr1 + attr2 + attr3;
    const maxAttValue = 90;
    const maxSumAttValue = 210;

    return !(attr1 > maxAttValue || attr1 < 0
      || attr2 > maxAttValue || attr2 < 0
      || attr3 > maxAttValue || attr3 < 0
      || sumAttrs > maxSumAttValue);
  };

  verifyText = () => {
    const { cardName, cardDescription, cardImage } = this.state;
    return !(cardName === '' || cardDescription === '' || cardImage === '');
  };

  verifySuperTrunfo() {
    const { cardTrunfo } = this.state;
    return cardTrunfo && this.setState({ hasTrunfo: true });
  }

  render() {
    const { filterCards, disabledInput } = this.state;
    return (
      <div>
        <div>
          TRUNFO
        </div>
        <section>
          <div>
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              checkTrunfo={ this.checkTrunfo }
            />
          </div>
          <section>
            <Card
              { ...this.state }
            />
          </section>
        </section>
        <section>
          <h1>SEU DECK:</h1>
          <section>
            <input
              type="text"
              data-testid="name-filter"
              placeholder="Nome da carta"
              onChange={ this.filteredName }
              disabled={ disabledInput }
            />
            <select
              data-testid="rare-filter"
              onClick={ this.FilteredRare }
              disabled={ disabledInput }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
            <div>
              Trunfo:
              <input
                data-testid="trunfo-filter"
                type="checkbox"
                onClick={ this.filteredTrunfo }
              />
            </div>
          </section>
          <section>
            {
              filterCards.map((param, param2) => (
                <section key={ param2 }>
                  <div>
                    <Card
                      { ...param }
                    />
                    <button
                      type="button"
                      data-testid="delete-button"
                      onClick={ () => this.removeCard(param2) }
                    >
                      Excluir
                    </button>
                  </div>
                </section>
              ))
            }
          </section>
        </section>
      </div>
    );
  }
}

export default App;

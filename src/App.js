/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: 'Poze do rodo anos 80',
    cardDescription: 'Acende puxa prende e solta',
    cardAttr1: 'Dark',
    cardAttr2: '9999',
    cardAttr3: '9999',
    cardImage: 'https://i1.sndcdn.com/artworks-000642915646-boa1hr-t500x500.jpg',
    cardRare: 'normal',
    hasTrunfo: false,
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    filteredCard: [],
    disabledInput: false,
  };

  filteredName = (event) => {
    const { savedCards } = this.state;
    const { target: { value } } = event;
    this.setState({
      filteredCard: savedCards
        .filter((param) => (param.cardName).includes(value)),
    });
  };

  FilteredRare = (event) => {
    const { savedCards } = this.state;
    const { target: { value } } = event;
    this.setState({
      filteredCard: savedCards
        .filter((param) => ((value === 'todas') ? savedCards : param.cardRare === value)),
    });
  };

  filteredTrunfo = (event) => {
    const { savedCards } = this.state;
    const { target: { checked } } = event;
    if (checked === false) {
      this.setState({ disabledInput: false });
      this.setState({
        filteredCard: (checked === false)
          ? savedCards
          : savedCards.filter((param) => (param.cardTrunfo === checked)),
      });
    } else {
      this.setState({ disabledInput: true });
      this.setState({
        filteredCard: (checked === false)
          ? savedCards
          : savedCards.filter((param) => (param.cardTrunfo === checked)),
      });
    }
  };

  checkTrunfo = () => {
    const { filteredCard } = this.state;
    if (filteredCard.find((param) => param.cardTrunfo === true)) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  removeCard = (param) => {
    const { filteredCard, savedCards } = this.state;
    filteredCard.splice(param, 1);
    savedCards.splice(param, 1);
    this.setState({ filteredCard }, () => this.checkTrunfo());
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
      filteredCard: [
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
    const attr1 = String(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const sumAttrs = attr1 + attr2 + attr3;
    const maxAttValue = 9999;
    const maxSumAttValue = 50000;

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
    const { filteredCard, disabledInput } = this.state;
    return (
      <div>
        <header className="header-main">
          <div className="logo">
            <h1>TRUNFO</h1>
          </div>
        </header>
        <section className="create-new-card">
          <div className="section-form">
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              checkTrunfo={ this.checkTrunfo }
            />
          </div>
          <section className="section-card">
            <Card
              { ...this.state }
            />
          </section>
        </section>
        <section>
          <header className="header-main">
            <h1 className="logo">SEU DECK:</h1>
            <section className="section-filter">
              <input
                className="name-filter"
                type="text"
                data-testid="name-filter"
                placeholder="Nome da carta"
                onChange={ this.filteredName }
                disabled={ disabledInput }
              />
              <select
                className="rare-filter"
                data-testid="rare-filter"
                onClick={ this.FilteredRare }
                disabled={ disabledInput }
              >
                <option>todas</option>
                <option>normal</option>
                <option>raro</option>
                <option>muito raro</option>
              </select>
              <div className="trunfo-filter">
                Trunfo:
                <input
                  data-testid="trunfo-filter"
                  type="checkbox"
                  onClick={ this.filteredTrunfo }
                />
              </div>
            </section>
          </header>
          <section className="all-cards">
            {
              filteredCard.map((param, param2) => (
                <section className="section-card" key={ param2 }>
                  <div className="card">
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

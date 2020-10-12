import React from 'react';
import BagelsContainer from './components/BagelsContainer';
import Form from './components/Form';
import './App.css';

class App extends React.Component {

  state = {
    bagels: []
  }

  componentDidMount() {
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
      .then(response => response.json())
      .then(bagels => this.setState({bagels: bagels}))
  }

  submitBagel = (bagel) => {
    fetch('http://bagel-api-fis.herokuapp.com/bagels', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({type: bagel})
    }).then(response => response.json())
      .then(bagel => this.setState(this.setState({bagels: [...this.state.bagels, bagel]})))
  }

  render() {
    return (
      <div className="App">
        <h1>BAGELS, BAGELS, BAGELS!!</h1>
        <Form submitBagel={this.submitBagel} />
        <BagelsContainer bagels={this.state.bagels} />
      </div>
    )
  };
}

export default App;
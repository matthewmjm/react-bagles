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

  render() {
    return (
      <div className="App">
        <h1>BAGELS, BAGELS, BAGELS!!</h1>
        <Form />
        <BagelsContainer bagels={this.state.bagels} />
      </div>
    )
  };
}

export default App;
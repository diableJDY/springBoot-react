import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


/*
state = {};

componentDidMount() {
  //setInterval(this.hello, 250);
}

hello = () => {
  fetch('/api/hello')
      .then(response => response.text())
      .then(message => {
        this.setState({message: message});
      });
};

render() {
  return (
      <div className="App">
        <TestComponents/>
        <div>
          {this.state.message}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.111122333333
        </p>
      </div>
  );
}*/

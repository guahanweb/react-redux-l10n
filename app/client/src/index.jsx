import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comp comp-app">
        <Quote quote="It's kind of fun to do the impossible!" by="Walt Disney" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

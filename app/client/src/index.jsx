const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comp comp-app">
        <header>
          <h1>It&apos;s kind of fun to do<br />
          the impossible!</h1>
          <h2>Walt Disney</h2>
        </header>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

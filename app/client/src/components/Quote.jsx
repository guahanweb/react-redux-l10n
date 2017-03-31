import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="quote">
        <h1>{this.props.quote}</h1>
        <h2>{this.props.by}</h2>
      </header>
    );
  }
}

module.exports = Quote;

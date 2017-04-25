import React from 'react';
import TranslatedComponent from '../utils/TranslatedComponent';

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="quote">
        <blockquote>
          {this.translate(this.props.quote)}
          <cite>{this.props.cite}</cite>
        </blockquote>
      </div>
    );
  }
}

TranslatedComponent(Quote);
export default Quote;

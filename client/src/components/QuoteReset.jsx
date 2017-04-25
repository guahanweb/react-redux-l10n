import React from 'react';
import {connect} from 'react-redux';
import TranslatedComponent from '../utils/TranslatedComponent';
import Actions from '../actions/quotes';

class QuoteReset extends React.Component {
  constructor(props) {
    super(props);
    this.doReset = this.doReset.bind(this);
  }

  doReset() {
    this.props.dispatch(Actions.randomizeQuote());
  }

  render() {
    return (
      <div className="quote-reset">
        <button onClick={this.doReset}>
          {this.translate('randomize-quote')}
        </button>
      </div>
    );
  }
}

TranslatedComponent(QuoteReset);
const ConnectedQuoteReset = connect()(QuoteReset);
export default ConnectedQuoteReset;


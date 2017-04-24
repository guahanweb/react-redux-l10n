import React from 'react';
import {connect} from 'react-redux';
import Actions from '../actions/cart';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };

    // bindings
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    this.props.dispatch(Actions.addItem(this.props.sku, 1));
  }

  render() {
    return (
      <div className="item-wrapper">
        <h3>{this.props.sku}</h3>
        <button className="item-action action-add" onClick={this.handleAdd}>
          Add to Cart
        </button>
      </div>
    );
  }
}

const ConnectedItem = connect()(Item);
export default ConnectedItem;


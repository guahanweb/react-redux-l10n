import React from 'react';
import {connect} from 'react-redux';
import Actions from '../actions/cart';

function RenderList(props) {
    if (props.items.length > 0) {
        let out = props.items.map((item, i) => {
            return (
                <div key={i} className="item">
                    <span className="sku">{item.sku} ({item.qty})</span>
                    <a className href="#" onClick={(e) => props.handler(e, item.sku)}>delete</a>
                </div>
            );
        });
        return <div>{out}</div>;
    }
    return <p className="no-items">no items</p>;
}

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      <div className="widget widget-cart">
        <div className="widget-wrapper cart-wrapper">
            <h2>Shopping Cart</h2>
            <RenderList items={this.props.cart.items} handler={this.deleteItem} />
        </div>
      </div>
    );
  }

  deleteItem(e, sku) {
    e.preventDefault();
    this.props.dispatch(Actions.deleteItem(sku));
  }
}

const ConnectedCart = connect(state => {
  return state;
})(Cart);

export default ConnectedCart;

import React from 'react';
import {connect} from 'react-redux';
import Item from './Item';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="widget widget-list">
        <div className="widget-wrapper item-list">
            <h2>Items</h2>
            <Item sku="abc123" qty="1" />
            <Item sku="xyz321" qty="1" />
        </div>
      </div>
    );
  }
}

const ConnectedItemList = connect()(ItemList);
export default ConnectedItemList;

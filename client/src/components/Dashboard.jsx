import React from 'react';
import {connect} from 'react-redux';
import Quote from './Quote';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard">
        <Quote quote={this.props.quote} cite={this.props.cite} />
      </div>
    );
  }
}

const ConnectedDashboard = connect(state => state.quote)(Dashboard);
export default ConnectedDashboard;

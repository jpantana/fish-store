import React from 'react';

import Orders from '../Orders/Orders';
import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row justify-content-center">
          <div className="col-4"><Inventory /></div>
          <div className="col-4"><NewOrder /></div>
          <div className="col-4"><Orders /></div>
        </div>
      </div>
    );
  }
}

export default Home;

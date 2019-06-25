import React from 'react';

import Orders from '../Orders/Orders';
import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home w-100">
        <div className="container m-auto w-100">
          <div className="row justify-content-center h-100 w-100">
            <Inventory />
            <NewOrder />
            <Orders />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

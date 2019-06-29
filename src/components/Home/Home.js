import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fishData from '../../helpers/data/fishData';
import ordersData from '../../helpers/data/ordersData';


import Orders from '../Orders/Orders';
import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';

import './Home.scss';

class Home extends React.Component {
  state = {
    orders: [],
    fishes: [],
  }

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('no fish for you', err));
    ordersData.getMyOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({ orders }))
      .catch(err => console.error(err));
  }


  render() {
    const { fishes, orders } = this.state;

    return (
      <div className="Home">
        <div className="row justify-content-center">
          <div className="col-4"><Inventory fishes={ fishes }/></div>
          <div className="col-4"><NewOrder /></div>
          <div className="col-4"><Orders orders={ orders }/></div>
        </div>
      </div>
    );
  }
}

export default Home;

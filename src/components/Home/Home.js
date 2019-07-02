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
    fishOrder: {},
  }

  getOrders = () => {
    ordersData.getMyOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({ orders }))
      .catch(err => console.error(err));
  };

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('no fish for you', err));

    this.getOrders();
  }

  deleteOrder = (orderId) => {
    ordersData.deleteOrder(orderId)
      .then(() => this.getOrders())
      .catch(err => console.error('nothing was deleted', err));
  };

  addFishToOrder = (fishId) => {
    const fishOrderCopy = { ...this.state.fishOrder }; // spread operator
    fishOrderCopy[fishId] = fishOrderCopy[fishId] + 1 || 1;
    this.setState({ fishOrder: fishOrderCopy });
  };

  render() {
    const { fishes, orders, fishOrder } = this.state;

    return (
      <div className="Home">
        <div className="row justify-content-center">
          <div className="col-4"><Inventory fishes={ fishes } addFishToOrder={this.addFishToOrder}/></div>
          <div className="col-4">
            <NewOrder
            fishes={fishes}
            fishOrder={fishOrder}
            />
          </div>
          <div className="col-4"><Orders orders={ orders } deleteOrder={ this.deleteOrder }/></div>
        </div>
      </div>
    );
  }
}

export default Home;

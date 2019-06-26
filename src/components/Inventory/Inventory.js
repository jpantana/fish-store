import React from 'react';

import fishData from '../../helpers/data/fishData';

import './Inventory.scss';

class Inventory extends React.Component {
  state = {
    fishes: [],
  }

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('no fish for you', err));
  }

  render() {
    return (
      <div className="Inventory">
        <h1>Inventory</h1>
      </div>
    );
  }
}

export default Inventory;

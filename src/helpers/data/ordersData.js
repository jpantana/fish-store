import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;


const deleteOrder = orderId => axios.delete(`${baseUrl}/orders/${orderId}.json`);

const getMyOrders = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/orders.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const orders = [];
      // if (Object.keys(res.data) !== null) { // this will help me delete the last walk in doggies. maybe not null, but 0
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        orders.push(res.data[fbKey]);
      });
      // }
      resolve(orders);
    }).catch(err => reject(err));
});

export default { getMyOrders, deleteOrder };

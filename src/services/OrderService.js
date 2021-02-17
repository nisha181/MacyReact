import axios from 'axios'


// const ORDER_REST_API_URL='http://localhost:8081/order/';
// const ORDER_ADD_API_URL='http://localhost:8081/order/add';
// const ORDER_DELETE_API_URL='http://localhost:8081/order/deleteorder';

const ORDER_REST_API_URL='http://104.197.41.118:8081/order/';
const ORDER_ADD_API_URL='http://104.197.41.118:8081/order/add';
const ORDER_DELETE_API_URL='http://104.197.41.118:8081/order/deleteorder';
class OrderService{
    getOrderDetails(){
        return axios.get(ORDER_REST_API_URL);
    }
    enrichOrder(order){
        return axios.post(ORDER_ADD_API_URL,order);
    }
    deleteOrder(orderId){
        return axios.delete(ORDER_DELETE_API_URL+'/'+orderId);
    }
}
export default new OrderService();
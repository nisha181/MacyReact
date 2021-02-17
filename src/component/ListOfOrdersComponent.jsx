import React, { Component } from 'react';
import OrderService from '../services/OrderService';

class ListOfOrdersComponent extends Component {
    constructor(props) {
        super(props)


        this.state = {
                    orders: []
        }
       
        this.deleteOrder=this.deleteOrder.bind(this);
    }


    componentDidMount(){
        OrderService.getOrderDetails().then((res) => {
            this.setState({orders: res.data});
        });
        
    }

    
    deleteOrder(orderId){
        OrderService.deleteOrder(orderId).then(res=>{
            this.setState({orders:this.state.orders.filter(order=>order.orderId!==orderId)})
        });
    }
    
    render() {
        return (
            <div>
                <h2 className='text-center'>Order List</h2>
                
                        <div className='row'>
                                 <table className='table table-striped table bordered'>
                                      <thead>
                                         <tr>
                                             <th>Order Id</th>
                                             <th>Order Number</th>
                                             <th>Order Type</th>
                                             <th>Profile Type</th>
                                             <th>Action</th>
                                         </tr>
                                      </thead>
                                      <tbody>
                                          {
                                            this.state.orders.map(
                                                 order =>
                                                   <tr key={order.orderId}>
                                                   <td>{order.orderId}</td>
                                                   <td>{order.orderNumber}</td>
                                                   <td>{order.orderType}</td>
                                                   <td>{order.profileType}</td>
                                                   <td>
                                                       <button style={{marginLeft:"10px"}} onClick={()=>this.deleteOrder(order.orderId)} className="btn btn-danger">Delete</button>
                                                   </td>
                                                   </tr>
                                            )

                                          }
                                      </tbody>
                                  </table>
                        </div>
             </div>
        )
    }
}

export default ListOfOrdersComponent;
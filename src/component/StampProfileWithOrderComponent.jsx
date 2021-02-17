import React, { Component } from 'react';
import OrderService from '../services/OrderService';

class StampProfileWithOrderComponent extends Component {

    constructor(props) {
        super(props)


        this.state = {
            orderId: '',
			orderNumber: '',
            orderType: '',
            profileId: ''   
        }
        this.changeOrderIdHandler = this.changeOrderIdHandler.bind(this);
		this.changeOrderNumberHandler = this.changeOrderNumberHandler.bind(this);
		this.changeOrderTypeHandler = this.changeOrderTypeHandler.bind(this);
	
        this.saveOrder = this.saveOrder.bind(this);
    }


     changeOrderIdHandler = (event) => {
         this.setState({orderId: event.target.value});
     }
     changeOrderNumberHandler = (event) => {
        this.setState({orderNumber: event.target.value});
    }
    changeOrderTypeHandler = (event) => {
        this.setState({orderType: event.target.value});
    }
    
    saveOrder = (s) => {
		s.preventDefault();
		let order = {
			orderId: this.state.orderId,
			orderNumber: this.state.orderNumber,
			orderType: this.state.orderType
		};
        console.log('order=>' + JSON.stringify(order));
        
        OrderService.enrichOrder(order).then((res) =>{
            this.setState({ profileId: 'Order has been saved successfully for PROFILE ID: ' + res.data });
            this.props.history.push('/order/add');
        }).catch(err => {
            if (err.response) {
                this.setState({ profileId: 'Could not find the Profile with order type: ' + order.orderType });
            }
        });

	}

    cancel() {
		this.props.history.push('/list');
	}
    render() {
        const profileId = this.state.profileId;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Order</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Order Id:</label>
                                        <input placeholder="Order Id" name="orderId" className="form-control"
                                           value={this.state.orderId} onChange={this.changeOrderIdHandler} required="required"/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Order Number:</label>
                                        <input placeholder="Order Number" name="orderNumber" className="form-control"
                                           value={this.state.orderNumber} onChange={this.changeOrderNumberHandler} required="required"/>
                                    </div>
                                    <div className="form-group">
										<label>Order Type: </label>
										<input placeholder="Order Type" name="orderType" className="form-control"
											value={this.state.orderType} onChange={this.changeOrderTypeHandler} required="required" />
									</div>
                                    
                                    <button className="btn btn-success" onClick={this.saveOrder}>Save</button>
									<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                            <p style={{ color: "red", fontSize: "20px" }} >{profileId}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default StampProfileWithOrderComponent;
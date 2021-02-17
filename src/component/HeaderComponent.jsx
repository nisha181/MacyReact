import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)


        this.state = {
                    
        }
       
    }

    // enrichOrder(){
    //     this.props.history.push('/order/add');
    // }

    render() {
        return (
            <div>
                <header>
                      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                      <div className="navbar-brand"><h1> Macy's Profile And Order Service</h1></div>
                      <li class="nav-item">
                          <a class="nav-link" style={{ color: "#FFFFFF",paddingTop: "5px"} } href="/order/add"><h4>Enrich order</h4></a>
                      </li> 
                      {/* <button style={{marginLeft:"10px"}} className="btn btn-info" onClick={this.enrichOrder}>Enrich Profile</button> */}
                      <li class="nav-item">
                          <a class="nav-link" style={{ color: "#FFFFFF",paddingTop: "5px"} } href="/order/list"><h4>Order List</h4></a>
                      </li> 
                      <li class="nav-item">
                          <a class="nav-link" style={{ color: "#FFFFFF",paddingTop: "5px"} } href="/list"><h4>Profile List</h4></a>
                      </li> 
                      </nav>
                </header>   
            </div>
        );
    }
}

export default HeaderComponent;
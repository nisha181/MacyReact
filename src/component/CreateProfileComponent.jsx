import React, { Component } from 'react';
import ProfileService from '../services/ProfileService';

class CreateProfileComponent extends Component {
    constructor(props) {
        super(props)


        this.state = {
            profileId: '',
			profileName: '',
			profileType: '',
			criteriaName: '',
			criteriaValue: '',
			generateShipment: ''
               
        }
        this.changeProfileIdHandler = this.changeProfileIdHandler.bind(this);
		this.changeProfileNameHandler = this.changeProfileNameHandler.bind(this);
		this.changeProfileTypeHandler = this.changeProfileTypeHandler.bind(this);
		this.changeCriteriaNameHandler = this.changeCriteriaNameHandler.bind(this);
		this.changeCriteriaValueHandler = this.changeCriteriaValueHandler.bind(this);
        this.changeGenerateShipmentHandler = this.changeGenerateShipmentHandler.bind(this);
        this.saveProfile = this.saveProfile.bind(this);
    }
     changeProfileIdHandler = (event) => {
         this.setState({profileId: event.target.value});
     }
     changeProfileNameHandler = (event) => {
        this.setState({profileName: event.target.value});
    }
    changeProfileTypeHandler = (event) => {
        this.setState({profileType: event.target.value});
    }
    changeCriteriaNameHandler = (event) => {
        this.setState({criteriaName: event.target.value});
    }
    changeCriteriaValueHandler = (event) => {
        this.setState({criteriaValue: event.target.value});
    }
    changeGenerateShipmentHandler = (event) => {
        this.setState({generateShipment: event.target.value});
    }

    saveProfile = (p) => {
		p.preventDefault();
		let profile = {
			profileId: this.state.profileId,
			profileName: this.state.profileName,
			profileType: this.state.profileType,
			criteriaName: this.state.criteriaName,
			criteriaValue: this.state.criteriaValue,
			generateShipment: this.state.generateShipment
		};
        console.log('profile=>' + JSON.stringify(profile));
        
        ProfileService.addProfile(profile).then(res =>{
            this.props.history.push('/list');
        });

	}
	cancel() {
		this.props.history.push('/list');
	}

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Profile</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Id:</label>
                                        <input placeholder="Id" name="profileId" className="form-control"
                                           value={this.state.profileId} onChange={this.changeProfileIdHandler} required="required"/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Name:</label>
                                        <input placeholder="Name" name="profileName" className="form-control"
                                           value={this.state.profileName} onChange={this.changeProfileNameHandler} required="required"/>
                                    </div>
                                    <div className="form-group">
										<label> Type: </label>
										<input placeholder="Type" name="profileType" className="form-control"
											value={this.state.profileType} onChange={this.changeProfileTypeHandler} required="required" />
									</div>
                                    <div className = "form-group">
                                        <label>Criteria Name:</label>
                                        <input placeholder="Criteria Name" name="criteriaName" className="form-control"
                                           value={this.state.criteriaName} onChange={this.changeCriteriaNameHandler} required="required"/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Criteria Value:</label>
                                        <input placeholder="Criteria Value" name="criteriaValue" className="form-control"
                                           value={this.state.criteriaValue} onChange={this.changeCriteriaValueHandler} required="required"/>
                                    </div>
                                    <div className="form-group">
										<label> Generate Shipment: </label>
										<input placeholder="Y/N" name="generateShipment" className="form-control"
											value={this.state.generateShipment} onChange={this.changeGenerateShipmentHandler} required="required" />
									</div>
                                    <button className="btn btn-success" onClick={this.saveProfile}>Save</button>
									<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProfileComponent;
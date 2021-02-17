import React, { Component, Profiler } from 'react';
import ProfileService from '../services/ProfileService';

class ListOfProfilesComponent extends Component {
    constructor(props) {
        super(props)


        this.state = {
                    profiles: []
        }
        this.addProfile = this.addProfile.bind(this);
        this.editProfile=this.editProfile.bind(this);
        this.deleteProfile=this.deleteProfile.bind(this);
    }


    componentDidMount(){
        ProfileService.getProfiles().then((res) => {
            this.setState({profiles: res.data});
        });
    }

    addProfile(){
        this.props.history.push('/add');
    }

    editProfile(profileId){
        this.props.history.push(`/update/${profileId}`);
    }
    deleteProfile(profileId){
        ProfileService.deleteProfile(profileId).then(res=>{
            this.setState({profiles:this.state.profiles.filter(profile=>profile.profileId!==profileId)})
        });
    }
    
    render() {
        return (
            <div>
                <h2 className='text-center'>Profile List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProfile}>Add Profile</button>
                </div>
                        <div className='row'>
                                 <table className='table table-striped table bordered'>
                                      <thead>
                                         <tr>
                                             <th>Profile Id</th>
                                             <th>Profile Name</th>
                                             <th>Profile Type</th>
                                             <th>Criteria Name</th>
                                             <th>Criteria Value</th>
                                             <th>Generate Shipment</th>
                                             <th>Action</th>
                                         </tr>
                                      </thead>
                                      <tbody>
                                          {
                                            this.state.profiles.map(
                                                 profile =>
                                                   <tr key={profile.profileId}>
                                                   <td>{profile.profileId}</td>
                                                   <td>{profile.profileName}</td>
                                                   <td>{profile.profileType}</td>
                                                   <td>{profile.criteriaName}</td>
                                                   <td>{profile.criteriaValue}</td>
                                                   <td>{profile.generateShipment}</td>
                                                   <td>
                                                       <button onClick = { () => this.editProfile (profile.profileId)} className="btn btn-info" >Update</button>
                                                       <button style={{marginLeft:"10px"}} onClick={()=>this.deleteProfile(profile.profileId)} className="btn btn-danger">Delete</button>
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

export default ListOfProfilesComponent;
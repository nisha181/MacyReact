import axios from 'axios';


// const PROFILE_API_LIST="http://localhost:8089/profile/details";
// const ADD_PROFILE_API="http://localhost:8089/profile/saveprofile";
// const UPDATE_PROFILE_API="http://localhost:8089/profile/updateprofile";
// const DELETE_PROFILE_API='http://localhost:8089/profile/deleteprofile';

const PROFILE_API_LIST="http://35.226.185.64:8089//profile/details";
const ADD_PROFILE_API="http://35.226.185.64:8089/profile/saveprofile";
const UPDATE_PROFILE_API="http://35.226.185.64:8089/profile/updateprofile";
const DELETE_PROFILE_API='http://35.226.185.64:8089/profile/deleteprofile';

class ProfileService{
     getProfiles(){
         return axios.get(PROFILE_API_LIST);
     }

     addProfile(profile){
         return axios.post(ADD_PROFILE_API,profile);
     }
     updateProfile(profile){
         return axios.put(UPDATE_PROFILE_API,profile);
     }
     deleteProfile(profileId){
        return axios.delete(DELETE_PROFILE_API+'/'+profileId);
    }
    
}
export default new ProfileService();
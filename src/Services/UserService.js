import axios from 'axios';

const COMMENT_API_BASE_URL = "http://localhost:8080/comment/api/";

class UserService {
    saveUser(user){
        return axios.post(COMMENT_API_BASE_URL+"signUp", user);
    } 
    loginUser(user){
        return axios.post(COMMENT_API_BASE_URL+"signIn", user);
    } 
    showPassword(user){
        return axios.post(COMMENT_API_BASE_URL+"forgotPassword",user);
    }  
    showAllComments(){
        return axios.get(COMMENT_API_BASE_URL+"showAllComments");
    }
    addComment(user){
        return axios.put(COMMENT_API_BASE_URL+"saveComment",user);
    } 
}
export default new UserService();

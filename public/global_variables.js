import axios from "axios";
import swal from "sweetalert2";

class GlobalVariables{
    constructor(token) {
        this.token = token
    }
    getToken(){
        return this.token
    }
    getAccessToken(){
        return this.token.access_token
    }
    async refreshToken(){
        const json = {
            "refresh_token":this.token.refresh_token,
            "mode": "json"
        }
        const url="https://health.shrp.dev/auth/refresh"
        try {
            const response = await axios.post(url, json);
            const data = await response.data.data;
            let expires = new Date();
            console.log(data);
            expires.setTime(expires.getTime() + data.expires * 10000)
        } catch (error) {
            console.error(error);
        }
    }
    clearToken(){
        this.token.access_token=""
    }
    isEmptyToken(){
        return this.token.access_token ===""
    }
}
GlobalVariables("")
import {axiosStralom} from "../configs/axios";
import btoa from 'btoa';

class AuthenticationService {
    static async login(email: string, password: string) {
        let {data} = await axiosStralom.get('/login', {
            headers: {
                Authorization: "Basic " + btoa(email + ":" + password)
            }
        })

        return data;
    }


    static async register(name: string, email: string, password: string) {
        let {data} = await axiosStralom.post('/login', {
            headers: {
                Authorization: "Basic " + btoa(email + ":" + password)
            }
        })

        return data;
    }

}

export default AuthenticationService;

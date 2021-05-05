import {axiosStralom} from '../configs/axios';
import {Buffer} from 'buffer';

class AuthenticationService {
  static async login(email: string, password: string) {
    let {data} = await axiosStralom.get('/authentication/login', {
      headers: {
        Authorization:
          'Basic ' + new Buffer(email + ':' + password).toString('base64'),
      },
    });

    return data;
  }

  static async register(name: string, email: string, password: string) {
    let {data} = await axiosStralom.post('/authentication/login', {
      headers: {
        Authorization:
          'Basic ' + new Buffer(email + ':' + password).toString('base64'),
      },
    });

    return data;
  }
}

export default AuthenticationService;

import AuthenticationService from "../services/AuthenticationService";
import CryptoJS from "crypto-js";

class AuthenticationController {
    static getPasswordHash(password: string) {
        return CryptoJS.SHA384(password).toString();
    }

    static async login(email: string, password: string) {
        const passwordHash = this.getPasswordHash(password);
        return await AuthenticationService.login(email, passwordHash)
    }

    static async register(name: string, email: string, password: string) {
        const passwordHash = this.getPasswordHash(password);
        return await AuthenticationService.register(name, email, passwordHash)
    }
}

export default AuthenticationController;

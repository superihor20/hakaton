import axios from 'axios';
import { SERVER_URL } from '../constants/url';
import { IUser } from '../models/user';

export class AuthService {
  static async login(login: string, password: string): Promise<IUser> {
    const { data } = await axios.post(`${SERVER_URL}/login/sign-in`, {
      login,
      password,
    });

    return data;
  }
}

import axios from 'axios';
import { SERVER_URL } from '../constants/url';
import { IUser } from '../models/user';

export class AuthService {
  static async login(email: string, password: string): Promise<IUser> {
    const { data } = await axios.get(`${SERVER_URL}/login`, {
      params: {
        email,
        password,
      },
    });

    return data;
  }
}

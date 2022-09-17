import axios from 'axios';
import { SERVER_URL } from '../constants/url';
import { IUser } from '../models/user';

export class UserService {
  static async getOne(id: number): Promise<IUser> {
    const { data } = await axios.get(`${SERVER_URL}/users/${id}`);

    return data;
  }
}

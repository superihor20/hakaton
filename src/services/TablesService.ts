import axios from 'axios';
import { SERVER_URL } from '../constants/url';
import { IUser } from '../models/user';

export class TablesService {
  static async getTable(id: number): Promise<{ user: IUser }> {
    const { data } = await axios.get(`${SERVER_URL}/tables/${id}`);

    return data;
  }
}

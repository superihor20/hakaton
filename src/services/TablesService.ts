import axios from 'axios';
import { SERVER_URL } from '../constants/url';

export class TablesService {
  static async getTables() {
    const { data } = await axios.get(`${SERVER_URL}`);
  }
}

import ApiService from '../api-service';
import {IContact} from './dto/contact.dto';

class ContactsApiService extends ApiService {
  send = async (data: IContact): Promise<any> => await this.post('', data).then((res) => res.data);
}

export const ContactsApi = new ContactsApiService('contacts');

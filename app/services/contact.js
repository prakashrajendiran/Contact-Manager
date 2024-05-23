import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ContactService extends Service {


  async contactFetch() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let response = (await JSON.parse(localStorage.getItem('contacts'))) || [];
    return response;
  }

  async contactPush(data) {
    let currData = await this.contactFetch('contacts');
    currData.push(data);
    localStorage.setItem('contacts', JSON.stringify(currData));
  }
  async update(data) {
    await localStorage.setItem('contacts', JSON.stringify(data));
  }
}

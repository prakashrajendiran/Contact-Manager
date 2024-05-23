import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

export default class NewRoute extends Route {
  name = '';
  number = '';
  mailid = '';
  address = '';

  async beforeModel() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  async model()
  {
     return await [this.name,this.no,this.mail,this.add ];
  }
}

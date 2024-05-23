import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('contact') contact;

  async model() {
    return await this.contact.contactFetch();
  }
}

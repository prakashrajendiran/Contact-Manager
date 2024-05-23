import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EditRoute extends Route {
  @service contact;

  @tracked id = '';

  async beforeModel() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  async model(params)
  {
    this.id = parseInt(params.id);
    let arr = await this.contact.contactFetch();
    return arr[params.id];
  }

  setupController(controller,model)
  {
    super.setupController(controller,model);
    controller.id = this.id;
  }
}

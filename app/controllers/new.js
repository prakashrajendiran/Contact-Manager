import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewController extends Controller {
  @service('contact') contact;
  @service router;
  @tracked con;

  @action
  addContact(name, no, mail, add, e) {
    e.preventDefault();
          this.con = this.contact.contactFetch();
          this.con.then(() => {
          this.contact.contactPush({ name, no, mail, add });
          this.router.transitionTo('index');
          });
  }

}

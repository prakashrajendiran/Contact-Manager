import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ContactsComponent extends Component {
  @service contact;

  @action
  async fun(id) {
    let arr = await this.contact.contactFetch();

    // arr.then(
    //     (success) => {
    //         return success[id];
    //     }
    // )
  }
}

import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class OptionsController extends Controller {
  @service contact;
  @service router;

  @action
  toEdit(id,e)
  {
    e.preventDefault();
    this.router.transitionTo('edit',id);
  }

  @action
  deleteContact(id, e) {
    e.preventDefault();
    let con = this.contact.contactFetch();
    con.then((arr) => {
      for (let ind = 0; ind < arr.length; ind++) {
        if (parseInt(id) === ind) {
          arr.splice(parseInt(id), 1);
        }
      }
      this.contact.update(arr);
      this.router.transitionTo('index');
    });
  }
}

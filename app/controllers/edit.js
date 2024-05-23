import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class EditController extends Controller {
  @service contact;
  @service router;

  @action
  editContact(name, no, mail, add, e) {
    e.preventDefault();
        let con = this.contact.contactFetch();
        con.then((arr) => {
          console.log(arr[this.id]);
          for (let ind = 0; ind < arr.length; ind++) {
            if (this.id === ind) {
              arr.splice(this.id, 1, { name, no, mail, add });
            }
          }
          this.contact.update(arr);
          this.router.transitionTo('index');
        });
  }


}

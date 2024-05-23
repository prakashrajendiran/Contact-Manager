import Controller from '@ember/controller';
import {action} from '@ember/object';
import {service} from '@ember/service';

export default class IndexController extends Controller {
  @service router;

    @action 
    newContact()
    {
        this.router.transitionTo("new");
    }
}

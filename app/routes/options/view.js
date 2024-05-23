import Route from '@ember/routing/route';
import {service} from '@ember/service';

export default class OptionsViewRoute extends Route {
    @service contact;
    async model()
    {
        let values = this.modelFor('options');
        // console.log(values);
        let prom = await this.contact.contactFetch();
        return prom[values.id];
    }


}

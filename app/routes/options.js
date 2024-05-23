import Route from '@ember/routing/route';

export default class OptionsRoute extends Route {
  async beforeModel() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

import EmberRouter from '@ember/routing/router';
import config from 'contact-manager/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('new', function () {});
  this.route('options', { path: 'options/:id/:name' }, function () {
    this.route('view');
  });
  this.route('edit', { path: 'edit/:id' });
  this.route('not-found', { path: '/*path' });
});

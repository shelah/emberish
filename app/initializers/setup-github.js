export function initialize(application) {
  // Note that the property we are injecting must be camel-cased
  application.inject('route', 'gitHub', 'service:git-hub');
  application.inject('component', 'gitHub', 'service:git-hub');
}

export default {
  name: 'setup-github',
  initialize: initialize
};

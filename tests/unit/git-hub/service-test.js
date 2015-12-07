import { moduleFor, test } from 'ember-qunit';
import { clientId, clientSecret } from '../../../git-hub/service';

moduleFor('service:git-hub', 'Unit | Service | git hub', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let repoUrl = 'emberjs/ember.js';
  let service = this.subject();
  let baseUrl = service.get('baseUrl');
  let expectedUrl = `${baseUrl}${repoUrl}`;
  let params = {
    client_id: clientId,
    client_secret: clientSecret
  };
  
  service.set('ajax', {
    request(url, params) {
      assert.equal(expectedUrl, url, 'should combine baseUrl, url, clientId, clientSecret');
      assert.deepEqual(params, {
        data: {
          client_id: clientId,
          client_secret: clientSecret
        }
      });
    }
  });
  
  service.request(repoUrl, params);
});

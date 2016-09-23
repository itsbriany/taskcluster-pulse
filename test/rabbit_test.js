suite('Rabbit Wrapper', () => {
  const expect = require('chai').expect;
  const assert = require('assert');
  const _ = require('lodash');
  const helper = require('./helper');

  test('overview', async () => {
    const overview = await helper.rabbit.overview();
    assert(_.has(overview, 'rabbitmq_version'));
    assert(_.has(overview, 'management_version'));
    assert(_.has(overview, 'cluster_name'));
  });

  test('clusterName', async () => {
    const clusterName = await helper.rabbit.clusterName();
    assert(_.has(clusterName, 'name'));
  });

  test('createAndDeleteUser', async () => {
    const name = await helper.rabbit.createUser();
    const deleteUser = await helper.rabbit.deleteUser(name);
  });
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      firstName: 'Diogo',
      lastName: 'Mafra'
    };
  }
});
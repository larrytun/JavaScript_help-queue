import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveQueue3(params) {
      var newQueue = this.store.createRecord('question', params);
      newQueue.save();
      this.transitionTo('index');
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveQueue1() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        description: this.get('description'),
      };
      this.sendAction('saveQueue2', params);
    }
  }
});

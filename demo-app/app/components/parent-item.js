import Ember from 'ember';

export default Ember.Component.extend({
  childHeight: true,
  actions: {
    click() {
      this.toggleProperty('childHeight');
    }
  }
});

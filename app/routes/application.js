import Ember from 'ember';

export default Ember.Route.extend({
    model () {
      return ['red', 'blue', 'green'].map(function(col) {
        return Ember.Object.create({ color: col })
    });
  }
});

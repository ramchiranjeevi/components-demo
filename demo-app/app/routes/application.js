import Ember from 'ember';
import ActionMixin from 'demo-addon/mixins/action';

export default Ember.Route.extend(ActionMixin,{
	beforeModel(transition) {
		transition.send('getAction');
	},
    model () {
      return ['red', 'blue', 'green'].map(function(col) {
        return Ember.Object.create({ color: col })
    });
  }
});

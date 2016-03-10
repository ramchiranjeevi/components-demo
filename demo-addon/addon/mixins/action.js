import Ember from 'ember';

const { Mixin } = Ember;

export default Mixin.create({
  actions: {
	   getAction(){
		     console.log('inside demo addon action mixin');
	    }
  }
});

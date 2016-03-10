import Ember from 'ember';

export default Ember.Component.extend({
  didInitAttrs () {
    console.log('didInitAttrs');
  },
  didReceiveAttrs () {
    console.log('didReceiveAttrs');
  },
  willRender () {
    console.log('willRender');
  },
  didInsertElement (){
    console.log('didInsertElement');
  },
  didRender () {
    console.log('didRender');
  }
});

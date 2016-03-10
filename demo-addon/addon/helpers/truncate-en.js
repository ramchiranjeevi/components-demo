import Ember from 'ember';

export function truncateEn(str) {
  if ( str[0].length > str[1] ) {
    var str =  str[0].substring(0, str[1]/2) + '...' + str[0].substring(str[0].length-10, str[0].length);
    return str;
  }
}

export default Ember.Helper.helper(truncateEn);

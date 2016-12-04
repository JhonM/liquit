import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  dateMade: DS.attr(),
  aromas: DS.hasMany('aroma', {async: true})
});

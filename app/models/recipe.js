import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  dateMade: DS.attr(),
  ingredient: DS.hasMany('ingredient')
});

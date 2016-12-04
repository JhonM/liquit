import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  brewDate: DS.attr('number'),
  description: DS.attr('string'),
  steepTime: DS.attr('string'),
  brewPlan: DS.attr('string'),
  Test: DS.attr(),
  aromas: DS.hasMany('aroma', {async: true})
});

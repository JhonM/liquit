import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  vendor: DS.attr('string'),
  dateBought: DS.attr(),
  price: DS.attr('number'),
  amount: DS.attr('number'),
  mixRatio: DS.attr('number'),
  link: DS.attr('string'),
  score: DS.attr('number'),
  recipe: DS.hasMany('recipe', {async: true})
});

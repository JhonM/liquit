import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  brand: DS.attr('string'),
  vendor: DS.attr('string'),
  price: DS.attr('string'),
  amount: DS.attr('string'),
  description: DS.attr('string'),
});

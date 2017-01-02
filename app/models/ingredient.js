import DS from 'ember-data';

export default DS.Model.extend({
	aroma: DS.belongsTo( 'aroma', { async: true } ),
  amount: DS.attr('number')
});

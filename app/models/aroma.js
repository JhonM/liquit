import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	vendor: DS.attr('string'),
	description: DS.attr('string'),
	dateBought: DS.attr(),
	price: DS.attr('number'),
	amount: DS.attr('number'),
	mixRatio: DS.attr('number'),
	link: DS.attr('string'),
	score: DS.attr('number'),
	ingredient: DS.belongsTo( 'ingredient', { async: true } )
});

import DS from 'ember-data';

export default DS.Model.extend({
	 aromas: DS.belongsTo( 'aroma', { async: true } ),
	 amount: DS.attr('number')
});

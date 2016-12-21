import DS from 'ember-data';

export default DS.Model.extend({
	 aromas: DS.hasMany( 'aroma', { async: true } ),
	 amount: DS.attr('number')
});

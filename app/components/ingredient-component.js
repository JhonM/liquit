import Ember from 'ember';

export default Ember.Component.extend({
	ingredient: [Ember.Object.create({
		name: '',
        amount: ''
	})],

    ingredients: Ember.computed('ingredient.@each.name', function () {
		return this
			.get('ingredient')
			.mapBy('name', 'amount')
			.join(', ');
	}),
    /*
    ingredients: Ember.computed('ingredient.@each.name', function () {
		return this
			.get('ingredient')
			.mapBy('name')
			.join(', ');
	}),
    */
	actions: {
		add: function () {
			this
				.get('ingredient')
				.pushObject(Ember.Object.create({
				}));
		},
        removeIngredient: function () {
			this
				.removeObject(this);
		}
	}
});

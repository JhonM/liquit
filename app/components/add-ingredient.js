import Ember from 'ember';

export default Ember.Component.extend({
	ingredient: [Ember.Object.create({
		name: 'James'
	})],

	names: Ember.computed('ingredient.@each.name', function () {
		return this
			.get('ingredient')
			.mapBy('name')
			.join(', ');
	}),

	actions: {
		add: function () {
			this
				.get('ingredient')
				.pushObject(Ember.Object.create({
					name: 'John Doe'
				}));
		}
	}
});

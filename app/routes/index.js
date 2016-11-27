import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return Ember.RSVP.hash({
			aromas: this.store.findAll('aroma'),
			recipes: this.store.findAll('recipe')
		});
	}
});

import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		search: {
			refreshModel: true
		}
	},
	model: function (params) {
		return Ember.RSVP.hash({
			aromas: this.store.query('aroma', params),
			recipes: this.store.query('recipe', params)
		});
	}
});

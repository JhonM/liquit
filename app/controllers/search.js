import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: {
		search: {
			refreshModel: true
		}
	},
	model: function (params) {
		return Ember.RSVP.hash({
			aromas: this.store.find('model.aroma', params),
			recipes: this.store.find('model.recipe', params)
		});
	}
});

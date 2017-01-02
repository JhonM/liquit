import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		remove: function (model) {
			if (confirm('Are you sure?')) {
				model.destroyRecord();
			}
		},
		removeSelected: function () {
			// Get all selected checkboxes
			const selected = Ember.$("input:checked");
			if (selected.length < 1) return;
			if (confirm('Are you sure you want to delete ' + selected.length + ' items?')) {
				// Remove selected
				selected.map((index, cb) => {
					const id = cb.id.substring('recipe-'.length, cb.id.length)
					this.store.find('recipe', id).then((recipe) => {
						recipe.destroyRecord();

					})
				})
			}
		},
	},
	model: function () {
		return Ember.RSVP.hash({
			aromas: this.store.findAll('aroma'),
			recipes: this.store.findAll('recipe')
		});

	}
});

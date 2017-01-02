import Ember from 'ember';

export default Ember.Mixin.create({
	actions: {
		toggleAroma: function (aromaId) {
			// Get recipe id from route(?)
			let recipeId = this.currentModel.newRecipe.id;
			// Get recipe from recipe id
			let recipe = this.get('store').peekRecord('recipe', recipeId);
			// Get aroma from id passed in from hbs
			let aroma = this.get('store').peekRecord('aroma', aromaId);
			// Get aromas property from recipe and toggle aroma to/from list
			if (recipe.get('aromas').indexOf(aroma) === -1) {
				// The aroma is not in the recipe
				recipe.get('aromas').pushObject(aroma);
				console.log('Aroma with id: %s added to recipe: %s', aromaId, recipeId);
			} else {
				// The aroma is in the recipe, so remove it
				recipe.get('aromas').removeObject(aroma);
				console.log('Aroma with id: %s removed from recipe: %s', aromaId, recipeId);
			}
			// Save the record
			recipe.save;
		},
		save: function () {
			var route = this;
			this.currentModel.newRecipe.save().then(function () {
				console.log('Saved!');
				route.transitionTo('recipes');
			}, function () {
				console.log('Failed to save the model');
			});
		},
		willTransition() {
			// TODO Why do we need this?
			this._super(...arguments);
			this.currentModel.newRecipe.rollbackAttributes();
		},
	},
});

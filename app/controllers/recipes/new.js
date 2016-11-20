import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		publishRecipe: function () {
			var newRecipe = this.store.createRecord('recipes', {
				name: this.get('name'),
				ingredient: this.get('ingredient')
			});
			newRecipe.save();
		}
	}
});

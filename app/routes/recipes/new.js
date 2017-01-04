import Ember from 'ember';
import SaveModelMixin from 'liquit/mixins/recipes/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
	model: function () {
		return Ember.RSVP.hash({
			newRecipe: this.store.createRecord('recipe'),
            ingredient: this.store.createRecord('ingredient'),
			aromas: this.store.findAll('aroma')
		});
	}


});

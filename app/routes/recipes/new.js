import Ember from 'ember';
import SaveModelMixin from 'liquit/mixins/recipes/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
	model: function () {
		//return this.store.createRecord('recipe', {
		//	Test: '1',
		//	TestX: 'Lorem ipsum'
		//});
		return Ember.RSVP.hash({
			newRecipe: this.store.createRecord('recipe', {
				title: '',
				description: ''
			}),
			aromas: this.store.findAll('aroma')
		});
	}


});

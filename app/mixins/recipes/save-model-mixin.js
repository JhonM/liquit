import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    toggleAroma: function(aromaId) {
      // Get recipe id from route(?)
      let recipeId = this.currentModel.newRecipe.id;
      // Log the shit out of this bia
      console.log('recipeId: %s, aromaId: %s', recipeId, aromaId)
      // Get recipe from recipe id
      let recipe = this.get('store').peekRecord('recipe', recipeId)
      // Get aroma from id passed in from hbs
      let aroma = this.get('store').peekRecord('aroma', aromaId)
      // Get aromas property from recipe and push aroma object to it
      recipe.get('aromas').pushObject(aroma)
      // Save the record
      recipe.save
      // TODO Remove aroa from recipe, if aroma is present
    },
    save: function() {
      var route = this;
      this.currentModel.newRecipe.save().then(function() {
        console.log('Saved!');
		route.transitionTo('recipes');
      }, function() {
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

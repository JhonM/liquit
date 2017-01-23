import Ember from 'ember';

export default Ember.Mixin.create({
    actions: {
        toggleIngredient: function(aromaId, aromaName, ingredientAmount) {
            // Get recipe id from route(?)
            let recipeId = this.currentModel.newRecipe.id;
            // Get recipe from recipe id
            let recipe = this.get('store').peekRecord('recipe', recipeId)
            // Get aroma from id passed in from hbs
            let aroma = this.get('store').peekRecord('aroma', aromaId)

            let ingredient = this.get('store').peekRecord('aroma', aromaName);

            console.log(ingredient);
            // Get aromas property from recipe and toggle aroma to/from list
            // if(recipe.get('aromas').indexOf(aroma) === -1) {
            // The aroma is not in the recipe
            //    recipe.get('aromas').pushObject(aroma, "bla")
            //    console.log('Aroma with id: %s added to recipe: %s', aromaId, recipeId)

            //  } else {
            // The aroma is in the recipe, so remove it
            //    recipe.get('aromas').removeObject(aroma)
            //    console.log('Aroma with id: %s removed from recipe: %s', aromaId, recipeId)
            //  }
            debugger
        },
        save: function() {
            var route = this;
            let recipe = this.get('store').createRecord('recipe', {
                name: "test recipe", description:"description rrr"
            });
            let aroma = this.get('store').createRecord('aroma', {
                name: "aroma 1",
                amount: 12
            });

            recipe.save().then(() => {
                aroma.save();
            }, function() {
                console.log('Failed to save the model');
            })
            // this.currentModel.newRecipe.save().then(function() {
            //     console.log('Saved!');
            //     route.transitionTo('recipes');
            // }, function() {
            //     console.log('Failed to save the model');
            // });
        },
        willTransition() {
            // TODO Why do we need this?
            this._super(...arguments);
            this.currentModel.newRecipe.rollbackAttributes();
        }
    }
});

import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    save: function() {
      var route = this;
      this.currentModel.newRecipe.save().then(function() {
        console.log('Saved!');
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

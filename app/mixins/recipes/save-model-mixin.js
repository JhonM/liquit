import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    save: function() {
      this.newRecipe.save().then(function() {
      }, function() {
        console.log('Failed to save the model');
      });
    },

    willTransition() {
      this._super(...arguments);
      const record = this.controller.get('model');
      record.rollbackAttributes();
    },
  },

});

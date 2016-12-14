import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  },
  model: function() {
	  return Ember.RSVP.hash({
  		aromas: this.store.findAll('aroma'),
  		recipes: this.store.findAll('recipe')
  	});

  }
});

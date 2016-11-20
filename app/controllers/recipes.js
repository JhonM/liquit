import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		publishPost: function () {
			var newPost = this.store.createRecord('recipes', {
				name: this.get('name'),
			});
			newPost.save();
		}
	}
});

import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		publishPost: function () {
			var newPost = this.store.createRecord('aromas', {
				name: this.get('name'),
				brand: this.get('brand'),
				vendor: this.get('vendor'),
				price: this.get('price'),
				amount: this.get('amount'),
				description: this.get('description')
			});
			newPost.save();
		}
	}
});

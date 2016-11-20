import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		publishAroma: function () {
			var newAroma = this.store.createRecord('aromas', {
				name: this.get('name'),
				brand: this.get('brand'),
				vendor: this.get('vendor'),
				price: this.get('price'),
				amount: this.get('amount'),
				description: this.get('description')
			});
			newAroma.save();
		}
	}
});

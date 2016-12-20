import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		select(aroma) {
			console.log(this.name);
		}
	},
	model: function () {
		return this.store.findAll('aromas');
	}
});

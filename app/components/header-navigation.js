import Ember from 'ember';

export default Ember.Component.extend({
	queryParams: {
		search: {
			refreshModel: true
		}
	},
});

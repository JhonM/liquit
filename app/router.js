import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function () {
    this.route('/')
	this.route('search');

	this.route('recipes', function () {
		this.route('new');

		this.route('edit', {
			path: ':recipe_id/edit'
		});

		this.route('show', {
			path: ':recipe_id'
		});
	});
	this.route('aromas', function () {
		this.route('new');

		this.route('edit', {
			path: ':aroma_id/edit'
		});

		this.route('show', {
			path: ':aroma_id'
		});
	});
});

export default Router;

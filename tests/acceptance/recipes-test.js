import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Recipe', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /recipes without data', function(assert) {
  visit('/recipes');

  andThen(function() {
    assert.equal(currentPath(), 'recipes.index');
    assert.equal(find('#blankslate').text().trim(), 'No Recipes found');
  });
});

test('visiting /recipes with data', function(assert) {
  server.create('recipe');
  visit('/recipes');

  andThen(function() {
    assert.equal(currentPath(), 'recipes.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new recipe', function(assert) {
  visit('/recipes');
  click('a:contains(New Recipe)');

  andThen(function() {
    assert.equal(currentPath(), 'recipes.new');

    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Ingredient) input', []);

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing recipe', function(assert) {
  server.create('recipe');
  visit('/recipes');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'recipes.edit');

    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Ingredient) input', []);

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing recipe', function(assert) {
  server.create('recipe');
  visit('/recipes');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'recipes.show');

    assert.equal(find('p strong:contains(Name:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Ingredient:)').next().text(), []);
  });
});

test('delete a recipe', function(assert) {
  server.create('recipe');
  visit('/recipes');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'recipes.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});

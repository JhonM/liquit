import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Aroma', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.server.loadFixtures();
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

test('visiting /aromas without data', function(assert) {
  visit('/aromas');

  andThen(function() {
    assert.equal(currentPath(), 'aromas.index');
    assert.equal(find('#blankslate').text().trim(), 'No Aromas found');
  });
});

test('visiting /aromas with data', function(assert) {
  server.create('aroma');
  visit('/aromas');

  andThen(function() {
    assert.equal(currentPath(), 'aromas.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new aroma', function(assert) {
  visit('/aromas');
  click('a:contains(New Aroma)');

  andThen(function() {
    assert.equal(currentPath(), 'aromas.new');

    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Vendor) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Amount) input', 42);

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing aroma', function(assert) {
  server.create('aroma');
  visit('/aromas');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'aromas.edit');

    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Vendor) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Amount) input', 42);

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing aroma', function(assert) {
  server.create('aroma');
  visit('/aromas');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'aromas.show');

    assert.equal(find('p strong:contains(Name:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Vendor:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Price:)').next().text(), 42);
    assert.equal(find('p strong:contains(Amount:)').next().text(), 42);
  });
});

test('delete a aroma', function(assert) {
  server.create('aroma');
  visit('/aromas');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'aromas.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});

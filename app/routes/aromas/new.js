import Ember from 'ember';
import SaveModelMixin from 'liquit/mixins/aromas/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('aroma');
  }
});

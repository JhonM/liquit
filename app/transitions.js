import Ember from 'ember';

export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('recipes.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};

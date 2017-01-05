import Ember from 'ember';

export default function() {

    this.transition(
        this.toRoute('recipes'),
        this.use('toRight'),
        this.reverse('toLeft')
    );
    this.transition(
        this.toRoute('aromas'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    this.transition(
        this.fromRoute('index'),
        this.toRoute('recipes'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    this.transition(
        this.fromRoute('index'),
        this.toRoute('aromas'),
        this.use('toLeft'),
        this.reverse('toRight')
    );

    // Not working
    this.transition(
        this.toRoute('recipes.new'),
        this.use('crossFade'),
        this.reverse('crossFade')
    );
    this.transition(
        this.toRoute('aromas.new'),
        this.use('crossFade'),
        this.reverse('crossFade')
    );
    // Not working end
};

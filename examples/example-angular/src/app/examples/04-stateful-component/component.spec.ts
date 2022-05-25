import { defineCounterSpecs } from '../counter.spec';
import { StatefulComponent } from './stateful.component';

describe(StatefulComponent.name, () => {
  defineCounterSpecs(StatefulComponent);
});

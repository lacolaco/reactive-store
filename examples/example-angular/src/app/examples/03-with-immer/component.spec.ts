import { defineCounterSpecs } from '../counter.spec';
import { WithImmerComponent } from './with-immer.component';
import * as counterStore from './counter.store';

describe(WithImmerComponent.name, () => {
  beforeEach(() => {
    counterStore.reset();
  });

  defineCounterSpecs(WithImmerComponent);
});

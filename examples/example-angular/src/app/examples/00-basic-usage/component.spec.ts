import { defineCounterSpecs } from '../counter.spec';
import { BasicUsageComponent } from './basic-usage.component';
import * as counterStore from './counter.store';

describe(BasicUsageComponent.name, () => {
  beforeEach(() => {
    counterStore.reset();
  });

  defineCounterSpecs(BasicUsageComponent);
});

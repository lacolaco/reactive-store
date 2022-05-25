import { defineCounterSpecs } from '../counter.spec';
import { StoreModuleComponent } from './store-module.component';
import * as counterStore from './counter.store';

describe(StoreModuleComponent.name, () => {
  beforeEach(() => {
    counterStore.reset();
  });

  defineCounterSpecs(StoreModuleComponent);
});

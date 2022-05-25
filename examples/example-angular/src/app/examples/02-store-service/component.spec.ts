import { defineCounterSpecs } from '../counter.spec';
import { StoreServiceComponent } from './store-service.component';

describe(StoreServiceComponent.name, () => {
  defineCounterSpecs(StoreServiceComponent);
});

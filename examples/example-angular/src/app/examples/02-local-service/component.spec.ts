import { defineCounterSpecs } from '../counter.spec';
import { LocalServiceComponent } from './local-service.component';

describe(LocalServiceComponent.name, () => {
  defineCounterSpecs(LocalServiceComponent);
});

import { defineCounterSpecs } from '../counter.spec';
import { BaseClassComponent } from './base-class.component';

describe(BaseClassComponent.name, () => {
  defineCounterSpecs(BaseClassComponent);
});

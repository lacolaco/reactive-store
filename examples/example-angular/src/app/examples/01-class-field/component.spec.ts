import { defineCounterSpecs } from '../counter.spec';
import { ClassFieldComponent } from './class-field.component';

describe(ClassFieldComponent.name, () => {
  defineCounterSpecs(ClassFieldComponent);
});

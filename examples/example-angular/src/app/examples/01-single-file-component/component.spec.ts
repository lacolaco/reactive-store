import { defineCounterSpecs } from '../counter.spec';
import { SingleFileComponent } from './single-file.component';

describe(SingleFileComponent.name, () => {
  defineCounterSpecs(SingleFileComponent);
});

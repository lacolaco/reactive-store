import produce from 'immer';

import { Store } from '@lacolaco/reactive-store';

const counterStore = new Store({
  initialValue: {
    count: 0,
  },
});

export const count$ = counterStore.select(state => state.count);

export const increment = () => {
  counterStore.update(
    state =>
      produce(state, draft => {
        draft.count++;
      }),
    {
      label: 'Increment',
    },
  );
};

export const reset = () => {
  counterStore.reset();
};

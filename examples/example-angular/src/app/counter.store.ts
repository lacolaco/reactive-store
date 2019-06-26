import produce from 'immer';

import { Store, connectReduxDevTools } from '@lacolaco/reactive-store';

const counterStore = new Store({
  initialValue: {
    count: 0,
  },
});

connectReduxDevTools(counterStore);

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
  counterStore.update(
    state =>
      produce(state, draft => {
        draft.count = 0;
      }),
    { label: 'Reset' },
  );
};

import { Store } from '@lacolaco/reactive-store';
import produce from 'immer';

const store = new Store({
  initialValue: {
    count: 0,
  },
});

export const count$ = store.select((state) => state.count);

export const increment = () => {
  store.update(
    (state) =>
      produce(state, (draft) => {
        draft.count++;
      }),
    {
      label: 'Increment',
    },
  );
};

export const reset = () => {
  store.reset();
};

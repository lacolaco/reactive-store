import produce from 'immer';

import { Store, connectReduxDevTools } from '@lacolaco/reactive-store';

const greetingStore = new Store({
  initialValue: {
    name: 'World',
  },
});

connectReduxDevTools(greetingStore);

export const name$ = greetingStore.select(state => state.name);

export const setName = (name: string) => {
  greetingStore.update(
    state =>
      produce(state, draft => {
        draft.name = name;
      }),
    {
      label: 'Set Name',
    },
  );
};

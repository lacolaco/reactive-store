import { Store } from '@lacolaco/reactive-store';

const store = new Store({
  initialValue: {
    count: 0,
  },
});

export const count$ = store.select((state) => state.count);

export const increment = () => {
  store.update((state) => ({ count: state.count + 1 }), {
    label: 'Increment',
  });
};

export const reset = () => {
  store.reset();
};

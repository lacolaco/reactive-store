import { Store } from './store';
import produce from 'immer';

describe('integration specs', () => {
  describe('with immer', () => {
    type State = { count: number };
    let store: Store<State>;

    beforeEach(() => {
      store = new Store<State>({
        initialValue: { count: 0 },
      });
    });

    test('should work well with `produce`', () => {
      store.update(value =>
        produce(value, draft => {
          draft.count = 5;
        }),
      );
      expect(store.value.count).toBe(5);
    });

    test('should work well with curried `produce`', () => {
      store.update(
        produce(draft => {
          draft.count = 5;
        }),
      );
      expect(store.value.count).toBe(5);
    });
  });
});

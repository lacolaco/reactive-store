import { Store } from './store';

describe('Store', () => {
  describe('constructor', () => {
    test('creates a new instance', () => {
      const store = new Store({ initialValue: 1 });
      expect(store).toBeDefined();
      expect(store.value).toBeDefined();
      expect(store.update).toBeDefined();
      expect(store.valueChanges).toBeDefined();
      expect(store.select).toBeDefined();
    });
  });

  describe('.value', () => {
    test('should return a state', () => {
      const store = new Store({ initialValue: 1 });
      const state = store.value;
      expect(state).toEqual(1);
    });
  });

  describe('.update', () => {
    test('should be able to reduce state', () => {
      const store = new Store({ initialValue: { foo: null, bar: { baz: 100 } } });
      store.update((state) => ({
        ...state,
        foo: '1',
      }));
      expect(store.value.foo).toEqual('1');
    });
  });

  describe('.valueChanges', () => {
    test('should be able to be subscribe', (done) => {
      const store = new Store({ initialValue: { foo: null, bar: { baz: 100 } } });
      store.update((state) => ({
        ...state,
        foo: '1',
      }));
      store.valueChanges.subscribe((state) => {
        expect(state.foo).toEqual('1');
        done();
      });
    });
  });

  describe('.select', () => {
    test('should return a selected observalbe', (done) => {
      const store = new Store({ initialValue: { foo: null, bar: { baz: 100 } } });
      store.update((state) => ({ ...state, foo: 'updated' }));
      store
        .select((state) => state.foo)
        .subscribe((foo) => {
          expect(foo).toEqual('updated');
          done();
        });
    });
  });

  describe('storeUpdateChanges', () => {
    test('should intercept to dispatching', (done) => {
      const store = new Store({
        initialValue: 1,
      });
      store.storeUpdateChanges.subscribe((change) => {
        expect(change.previousValue).toBe(1);
        expect(change.currentValue).toBe(2);
        expect(change.label).toBe('test');
        done();
      });
      store.update((state) => 2, { label: 'test' });
    });
  });

  describe('.reset', () => {
    test('should be able to reset the value', () => {
      const initialValue = { foo: null, bar: { baz: 100 } };
      const store = new Store({ initialValue });
      store.update((state) => ({
        ...state,
        foo: '1',
        bar: {
          baz: 1,
        },
      }));
      store.reset();
      expect(store.value).toEqual(initialValue);
    });
  });
});

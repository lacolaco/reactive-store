import { Store } from './store';

describe('Store', () => {
  describe('constructor', () => {
    it('creates a new instance', () => {
      const store = new Store({ initialValue: 1 });
      expect(store).toBeDefined();
      expect(store.value).toBeDefined();
      expect(store.update).toBeDefined();
      expect(store.valueChanges).toBeDefined();
      expect(store.select).toBeDefined();
    });
  });

  describe('.value', () => {
    it('should return a state', () => {
      const store = new Store({ initialValue: 1 });
      const state = store.value;
      expect(state).toEqual(1);
    });
  });

  describe('.update', () => {
    it('should be able to reduce state', () => {
      const store = new Store({ initialValue: { foo: null, bar: { baz: 100 } } });
      store.update(state => ({
        ...state,
        foo: '1',
      }));
      expect(store.value.foo).toEqual('1');
    });
  });

  describe('.valueChanges', () => {
    it('should be able to be subscribe', done => {
      const store = new Store({ initialValue: { foo: null, bar: { baz: 100 } } });
      store.update(state => ({
        ...state,
        foo: '1',
      }));
      store.valueChanges.subscribe(state => {
        expect(state.foo).toEqual('1');
        done();
      });
    });
  });

  describe('.select', () => {
    it('should return a selected observalbe', done => {
      const store = new Store({ initialValue: { foo: null, bar: { baz: 100 } } });
      store.update(state => ({ ...state, foo: 'updated' }));
      store
        .select(state => state.foo)
        .subscribe(foo => {
          expect(foo).toEqual('updated');
          done();
        });
    });
  });

  describe('onChange', () => {
    it('should intercept to dispatching', done => {
      const store = new Store({
        initialValue: 1,
        onUpdate: change => {
          expect(change.previousValue).toBe(1);
          expect(change.currentValue).toBe(2);
          expect(change.label).toBe('test');
          done();
        },
      });
      store.update(state => 2, { label: 'test' });
    });
  });
});

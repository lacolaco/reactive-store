import { Store } from './store';

describe('Store', () => {
  describe('constructor', () => {
    it('creates a new instance', () => {
      const store = new Store(1);
      expect(store).toBeDefined();
      expect(store.getValue).toBeDefined();
      expect(store.patch).toBeDefined();
      expect(store.subscribe).toBeDefined();
      expect(store.select).toBeDefined();
    });
  });

  describe('getValue', () => {
    it('should return a state', () => {
      const store = new Store(1);
      const state = store.getValue();
      expect(state).toEqual(1);
    });
  });

  describe('patch', () => {
    it('should be able to reduce state', () => {
      const store = new Store({ foo: null, bar: { baz: 100 } });
      store.patch(state => ({
        ...state,
        foo: '1',
      }));
      expect(store.getValue().foo).toEqual('1');
    });
  });

  describe('subscribe', () => {
    it('should be able to be subscribe', done => {
      const store = new Store({ foo: null, bar: { baz: 100 } });
      store.patch(state => ({
        ...state,
        foo: '1',
      }));
      store.subscribe(state => {
        expect(state.foo).toEqual('1');
        done();
      });
    });
  });

  describe('select', () => {
    it('should return a selected observalbe', done => {
      const store = new Store({ foo: null, bar: { baz: 100 } });
      store.patch(state => ({ ...state, foo: 'updated' }));
      store
        .select(state => state.foo)
        .subscribe(foo => {
          expect(foo).toEqual('updated');
          done();
        });
    });
  });

  describe('middleware', () => {
    it('should intercept to dispatching', () => {
      const log = [];
      const store = new Store(1, [
        // modify state pre-dispatch (earlier)
        next => {
          return state => {
            return next(state * 2);
          };
        },
        // modify state pre-dispatch (later)
        next => {
          return state => {
            return next(state + 1);
          };
        },
        // logging after post-dispatch
        next => {
          return state => {
            state = next(state);
            log.push(state);
            return state;
          };
        },
      ]);
      // initialState: 1 => 2 => 3
      store.patch(state => 2); // 2 => 4 => 5
      store.patch(state => 3); // 3 => 6 => 7
      expect(log).toEqual([3, 5, 7]);
    });
  });
});

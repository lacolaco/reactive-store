import { Store } from './store';

const globalExtensionSymbol = '__REDUX_DEVTOOLS_EXTENSION__';

type ReduxDevtools = {
  send(action: string, state: any): void;
  subscribe(onMessage: (message: any) => void): void;
};

export function connectReduxDevTools(store: Store<any>) {
  const extension = (window as any)[globalExtensionSymbol] as any;
  if (extension) {
    const reduxDevTool = extension.connect() as ReduxDevtools;
    store.storeUpdateChanges.subscribe(change => {
      reduxDevTool.send(change.label || 'Update State', change.currentValue);
    });
    reduxDevTool.subscribe(message => {
      if (message.state) {
        console.warn(`[@lacolaco/reactive-store] Operation from extension is not supported :(`);
      }
    });
  }
}

export type StoreUpdateChange<T> = {
  previousValue: T;
  currentValue: T;
  label?: string;
};

export type StoreOnUpdateFn<T> = (change: StoreUpdateChange<T>) => void;

export type StoreInitOptions<T> = {
  initialValue: T;
};

export type CommandOptions = {
  label?: string;
};

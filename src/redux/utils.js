export function createReducer(initialStore, handlers) {

  return function (store, action) {

    store ??= initialStore

    const handler = handlers[action.type];

    // if (handler) {
    //   return handler(store, action);
    // }
    //
    // return store;

    return handler?.(store, action) ?? store;
  }
}
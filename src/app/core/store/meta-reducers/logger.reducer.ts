import { ActionReducer, MetaReducer } from '@ngrx/store';

export function loggerMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {

  return function (state, action) {
    console.groupCollapsed(
      `%c${action.type}`,
      'color: #03A9F4; font-weight: bold'
    );

    console.log('%cPrevious State:', 'color: #9E9E9E', state);
    console.log('%cAction:', 'color: #03A9F4', action);

    const nextState = reducer(state, action);

    console.log('%cNext State:', 'color: #4CAF50', nextState);
    console.groupEnd();

    return nextState;
  };
}

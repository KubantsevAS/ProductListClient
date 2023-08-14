import { createStore } from 'react-hooks-global-state';
import { initialState, reducer } from './reducer';

export const { dispatch, useStoreState } = createStore(reducer, initialState);

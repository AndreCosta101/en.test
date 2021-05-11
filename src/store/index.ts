import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from './modules/rootReducer';

import { IFeedback } from './modules/feedback/types';

export interface IState {
  feedback: IFeedback;
}

const makeStore = () => {
  // Create store
  const store = createStore(rootReducer, composeWithDevTools());

  // Return store
  return store;
};

// export an assembled wrapper
export const storeWrapper = createWrapper(makeStore, { debug: false });

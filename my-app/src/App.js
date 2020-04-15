import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './components/reducer/reducer';
import Post from './components/Post/index';


export const ADD_DATA='ADD_DATA';
export const CHANGE_LIKE='CHANGE_LIKE'
export const CHANGE_REPOST='CHANGE_REPOST'
export const CHANGE_COMMENT='CHANGE_COMMENT'

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Post/>
    </Provider>
  );
}

export default App;

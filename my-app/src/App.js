import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './components/reducer/reducer';
import Post from './components/Post/index';


export const CHANGE_TEXT='CHANGE_TEXT';
export const CHANGE_AUTHOR='CHANGE_AUTHOR';
export const CHANGE_IMAGE='CHANGE_IMAGE';
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

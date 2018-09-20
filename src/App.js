import React, { Component } from 'react';
import Posts  from './components/Posts';
import PostsForm from './components/PostForm';

import { Provider }  from  'react-redux';

import  store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">

      <PostsForm/>
        <Posts/>
      </div>

      </Provider>
    );
  }
}

export default App;

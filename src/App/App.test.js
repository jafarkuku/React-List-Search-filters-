import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import reducers from './reducers/index'
import expect from 'expect'

import App from './App'
import ListItem from './components/ListItem'
import DataListRender from './components/DataListRender'


it('renders without crashing', () => {
  const createStoreWithMiddleware = applyMiddleware(promise)(createStore)
  const div = document.createElement('div')
  ReactDOM.render(  <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>, div)
})


/*Ensure The Data list component renders the correct number*/

describe.only('Item List', () => {
  let wrapper;
  let currentList;

  beforeEach(() => {
    currentList = [
      {
        id: 0,
        name: "pakistan_bluetooth.html",
        ext: "html",
        desc: "Sed asperiores sit ea quia reprehenderit voluptatem ullam.",
        created: "2016-12-31T20:46:11.087Z",
        size: 1469416563
      },
      {
        id: 0,
        name: "pakistan_bluetooth.html",
        ext: "html",
        desc: "Sed asperiores sit ea quia reprehenderit voluptatem ullam.",
        created: "2016-12-31T20:46:11.087Z",
        size: 1469416563
      }
    ];
    const filter = "SHOW_LATEST"
    wrapper = shallow(
      <DataListRender List={currentList} filter={filter} />
    );
  });

  it('should render the correct number of items', () => {
    expect(wrapper.find(ListItem).length).toEqual(2);
  });
});

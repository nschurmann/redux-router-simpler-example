import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, combineReducers } from 'redux'

import { ReduxRouter, routerStateReducer, reduxReactRouter } from 'redux-router'

import { Route, Link } from 'react-router'
import { Provider, connect } from 'react-redux'
import { createHistory } from 'history'

import Parent from './Parent'
import Child from './Child'

const reducer = combineReducers({ router: routerStateReducer })

const store = compose(
  reduxReactRouter({ createHistory }),
)(createStore)(reducer)

@connect((state) => ({}))

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <h1>App Container</h1>
        <p><Link to='/'>'/'</Link></p>
        <p><Link to='/parent/456?foo=bar'>/parent/456?foo=bar</Link></p>
        <p><Link to='/parent/kjh/child?bar=baz'>/parent/kjh/child?bar=baz</Link></p>
        <p><Link to='/parent/jklasd/child/123?baz=foo'>/parent/jklasd/child/123?baz=foo</Link></p>
        {this.props.children}
      </div>
    )
  }
}

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Route path="/" component={App}>
            <Route path="parent/:parentId" component={Parent}>
              <Route path="child" component={Child} />
              <Route path="child/:childId" component={Child} />
            </Route>
          </Route>
        </ReduxRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))

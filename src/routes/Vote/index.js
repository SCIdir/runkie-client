// import HomeView from './components/HomeView'
//
// // Sync route definition
// export default {
//   component : HomeView
// }

import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'vote',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Index = require('./containers/IndexContainer').default
      const reducer = require('./modules/song-list').default

      /*  Add the reducer to the store on key 'index'  */
      injectReducer(store, { key: 'index', reducer })

      /*  Return getComponent   */
      cb(null, Index)

    /* Webpack named bundle   */
    }, 'index')
  }
})

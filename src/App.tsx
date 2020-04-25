import React from "react"
import { Provider } from "react-redux"
import store from "./core/store"

import Templates from "./views/templates"

const App = () => {
  return (
    <Provider store={store}>
      <Templates />
    </Provider>
  )
}

export default App

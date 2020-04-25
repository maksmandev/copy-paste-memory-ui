import { combineReducers } from "redux"

import templatesReducer from "../views/templates/store/templates.reducers"

const store = combineReducers({
  templates: templatesReducer,
})

export default store

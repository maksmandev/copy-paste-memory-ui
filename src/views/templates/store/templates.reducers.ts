import { combineReducers } from "redux"

import { PUT_TEMPLATES } from "./templates.actions"

type InitialState = {
  list: any[]
}

const initialState: InitialState = {
  list: [],
}

const listReducer = (state: InitialState = initialState, action: any) => {
  switch (action.type) {
    case PUT_TEMPLATES:
      return [...state.list, action.payload]
    default:
      return state
  }
}

export default combineReducers({ listReducer })

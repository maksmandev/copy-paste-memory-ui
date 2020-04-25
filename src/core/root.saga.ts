import { fork } from "redux-saga/effects"

import templatesSagas from "../views/templates/store/templates.sagas"

export default function* rootSaga() {
  yield fork(templatesSagas)
}

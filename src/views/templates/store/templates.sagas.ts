import { takeEvery, call, put } from "redux-saga/effects"

import templates from "../../../api/templates"

import * as actions from "./templates.actions"

function* getTemplatesSaga() {
  const res = yield call(templates.fetchTemplates)
  yield put(actions.putTemplates(res))
}

export default function* templatesSaga() {
  yield takeEvery(actions.GET_TEMPLATES, getTemplatesSaga)
}

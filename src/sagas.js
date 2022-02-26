import { all, call, put, takeLatest } from "redux-saga/effects";
import {matchesSlice, matchSlice} from "./store/slices";

async function httpClient(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  return data.data
}
// worker Saga
function* fetchMatches({select}) {
  let matches
    matches = yield call(
        httpClient,
        `${process.env.REACT_APP_API_URL}/soccer/matches?apikey=${process.env.REACT_APP_API_TOKEN}&season_id=${select ? select : "352"}`
    );
  console.log(matches)
  yield put(matchesSlice.actions.add({ matches }));
}
function* fetchMatch({id}) {
  let match = yield call(
        httpClient,
        `${process.env.REACT_APP_API_URL}/soccer/matches/${id}?apikey=${process.env.REACT_APP_API_TOKEN}`
    );
  console.log(match)
  yield put(matchSlice.actions.add({ match }));
}

// watcher Saga
function* watchMatches() {
  yield takeLatest("FETCH_MATCHES", fetchMatches);
}
function* watchMatch() {
  yield takeLatest("FETCH_MATCH", fetchMatch);
}

// root Saga
export function* rootSaga() {
  yield all([watchMatches(), watchMatch()]);
}

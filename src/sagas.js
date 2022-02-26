import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  countriesSlice,
  matchesSlice,
  matchSlice,
  teamSlice,
} from "./store/slices";

async function httpClient(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data.data;
}
// worker Saga
function* fetchMatches({ select }) {
  let matches;
  matches = yield call(
    httpClient,
    `${process.env.REACT_APP_API_URL}/soccer/matches?apikey=${
      process.env.REACT_APP_API_TOKEN
    }&season_id=${select ? select : "352"}`
  );
  console.log(matches);
  yield put(matchesSlice.actions.add({ matches }));
}
function* fetchTeams({ select }) {
  let teams;
  teams = yield call(
    httpClient,
    `${process.env.REACT_APP_API_URL}/soccer/teams?apikey=${
      process.env.REACT_APP_API_TOKEN
    }&country_id=${select ? select : "42"}`
  );
  console.log(teams);
  yield put(teamSlice.actions.add({ teams }));
}
function* fetchMatch({ id }) {
  let match = yield call(
    httpClient,
    `${process.env.REACT_APP_API_URL}/soccer/matches/${id}?apikey=${process.env.REACT_APP_API_TOKEN}`
  );
  console.log(match);
  yield put(matchSlice.actions.add({ match }));
}
function* fetchCountries() {
  let countries = yield call(
    httpClient,
    `${process.env.REACT_APP_API_URL}/soccer/countries?apikey=${process.env.REACT_APP_API_TOKEN}`
  );
  console.log(countries);
  yield put(countriesSlice.actions.add({ countries }));
}

// watcher Saga
function* watchMatches() {
  yield takeLatest("FETCH_MATCHES", fetchMatches);
}
function* watchMatch() {
  yield takeLatest("FETCH_MATCH", fetchMatch);
}
function* watchTeams() {
  yield takeLatest("FETCH_TEAMS", fetchTeams);
}
function* watchCountries() {
  yield takeLatest("FETCH_COUNTRIES", fetchCountries);
}

// root Saga
export function* rootSaga() {
  yield all([watchMatches(), watchMatch(), watchTeams(), watchCountries()]);
}

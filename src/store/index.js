import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {favoritesSlice, matchesSlice, matchSlice} from "./slices";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootSaga } from "../sagas";
import createSagaMiddleware from "redux-saga";

const persistConfig = {
    key: "root",
    storage,
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        favorites: favoritesSlice.reducer,
        matches: matchesSlice.reducer,
        match: matchSlice.reducer
    })
);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        sagaMiddleware,
    ],
});

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import medicSlice from "../features/especialidad/medicSlice";
import shiftSlice from "../features/shift/shiftSlice";
import { medicApi } from "../services/medicApi";
import { AuthApi } from "../services/AuthApi";
import authSlice from "../features/Auth/authSlice";

const store = configureStore({
  reducer: {
    medic: medicSlice,
    shift: shiftSlice,
    auth: authSlice,
    [medicApi.reducerPath]: medicApi.reducer,
    [AuthApi.reducerPath]:AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(medicApi.middleware,AuthApi.middleware),
});
setupListeners(store.dispatch);

export default store;

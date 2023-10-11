import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { medicApi } from "../services/medicApi";
import medicSlice from "../features/especialidad/medicSlice";
import shiftSlice from "../features/shift/shiftSlice";

const store = configureStore({
  reducer: {
    medic: medicSlice,
    shift: shiftSlice,
    [medicApi.reducerPath]: medicApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(medicApi.middleware),
});
setupListeners(store.dispatch);

export default store;

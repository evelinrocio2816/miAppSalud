import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { medicApi } from "../services/medicApi";
import { medicSlice } from "../features/especialidad/medicSlice";


const store = configureStore({
    reducer:{
        medic : medicSlice,
        [medicApi.reducerPath]: medicApi.reducer
    },
    middleware : getDefaultMiddleware=> getDefaultMiddleware().concat(medicApi.middleware),
})
setupListeners(store.dispatch)

export default store
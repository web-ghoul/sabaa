import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./auth.ts";
import companiesReducers from "./companiesSlice.ts";
import companyReducers from "./companySlice.ts";
import jobsReducers from "./jobsSlice.ts";
import nationalitiesReducers from "./nationalitiesSlice.ts";
import ownerReducers from "./ownerSlice.ts";
import ownersReducers from "./ownersSlice.ts";
import userReducers from "./userSlice.ts";
import usersReducers from "./usersSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    jobs: jobsReducers,
    nationalities: nationalitiesReducers,
    users: usersReducers,
    user: userReducers,
    companies: companiesReducers,
    company: companyReducers,
    owners: ownersReducers,
    owner: ownerReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

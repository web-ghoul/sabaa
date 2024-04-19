import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./auth.ts";
import companiesCounterReducers from "./companiesCounterSlice.ts";
import companiesReducers from "./companiesSlice.ts";
import companyReducers from "./companySlice.ts";
import employeesCounterReducers from "./employeesCounterSlice.ts";
import employeesReducers from "./employeesSlice.ts";
import jobsCounterReducers from "./jobsCounterSlice.ts";
import jobsReducers from "./jobsSlice.ts";
import nationalitiesCounterReducers from "./nationalitiesCounterSlice.ts";
import nationalitiesReducers from "./nationalitiesSlice.ts";
import ownersCounterReducers from "./ownersCounterSlice.ts";
import ownerReducers from "./ownerSlice.ts";
import ownersReducers from "./ownersSlice.ts";
import usersCounterReducers from "./usersCounterSlice.ts";
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
    employees: employeesReducers,
    owner: ownerReducers,
    ownersCounter: ownersCounterReducers,
    jobsCounter: jobsCounterReducers,
    companiesCounter: companiesCounterReducers,
    employeesCounter: employeesCounterReducers,
    usersCounter: usersCounterReducers,
    nationalitiesCounter: nationalitiesCounterReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

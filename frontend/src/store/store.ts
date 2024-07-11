import { configureStore } from "@reduxjs/toolkit";
import activitiesCounterReducer from "./activitiesCounterSlice.ts";
import activitiesReducers from "./activitiesSlice.ts";
import authReducers from "./auth.ts";
import companiesCounterReducers from "./companiesCounterSlice.ts";
import companiesReducers from "./companiesSlice.ts";
import companyReducers from "./companySlice.ts";
import customersCounterReducers from "./customersCounterSlice.ts";
import customerReducers from "./customerSlice.ts";
import customersReducers from "./customersSlice.ts";
import eChannelsCounterReducer from "./eChannelsCounterSlice.ts";
import eChannelsReducer from "./eChannelsSlice.ts";
import employeesCounterReducers from "./employeesCounterSlice.ts";
import employeeReducers from "./employeeSlice.ts";
import employeesReducers from "./employeesSlice.ts";
import jobsCounterReducers from "./jobsCounterSlice.ts";
import jobsReducers from "./jobsSlice.ts";
import nationalitiesCounterReducers from "./nationalitiesCounterSlice.ts";
import nationalitiesReducers from "./nationalitiesSlice.ts";
import natwasalsCounterReducer from "./natwasalsCounterSlice.ts";
import natwasalsReducer from "./natwasalsSlice.ts";
import ownersCounterReducers from "./ownersCounterSlice.ts";
import ownerReducers from "./ownerSlice.ts";
import ownersReducers from "./ownersSlice.ts";
import prosCounterReducers from "./prosCounterSlice.ts";
import proReducers from "./proSlice.ts";
import prosReducers from "./prosSlice.ts";
import recentActivitiesReducers from "./recentActivitiesSlice.ts";
import recentCompaniesReducers from "./recentCompaniesSlice.ts";
import recentCustomersReducers from "./recentCustomersSlice.ts";
import recentEmployeesReducers from "./recentEmployeesSlice.ts";
import recentJobsReducers from "./recentJobsSlice.ts";
import recentNationalitiesReducers from "./recentNationalitiesSlice.ts";
import recentOwnersReducers from "./recentOwnersSlice.ts";
import recentProsReducers from "./recentProsSlice.ts";
import recentUsersReducers from "./recentUsersSlice.ts";
import tasheelsCounterReducer from "./tasheelsCounterSlice.ts";
import tasheelsReducer from "./tasheelsSlice.ts";
import usersCounterReducers from "./usersCounterSlice.ts";
import userReducers from "./userSlice.ts";
import usersReducers from "./usersSlice.ts";
import transactionsCounterReducer from "./transactionsCounterSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    user: userReducers,
    users: usersReducers,
    usersCounter: usersCounterReducers,
    activities: activitiesReducers,
    activitiesCounter: activitiesCounterReducer,
    recentActivities: recentActivitiesReducers,
    recentJobs: recentJobsReducers,
    recentEmployees: recentEmployeesReducers,
    recentNationalities: recentNationalitiesReducers,
    recentUsers: recentUsersReducers,
    company: companyReducers,
    companies: companiesReducers,
    recentCompanies: recentCompaniesReducers,
    companiesCounter: companiesCounterReducers,
    owner: ownerReducers,
    owners: ownersReducers,
    ownersCounter: ownersCounterReducers,
    recentOwners: recentOwnersReducers,
    employee: employeeReducers,
    employees: employeesReducers,
    employeesCounter: employeesCounterReducers,
    customer: customerReducers,
    customers: customersReducers,
    recentCustomers: recentCustomersReducers,
    pro: proReducers,
    pros: prosReducers,
    prosCounter: prosCounterReducers,
    recentPros: recentProsReducers,
    jobs: jobsReducers,
    jobsCounter: jobsCounterReducers,
    customersCounter: customersCounterReducers,
    nationalities: nationalitiesReducers,
    nationalitiesCounter: nationalitiesCounterReducers,
    eChannels: eChannelsReducer,
    eChannelsCounter: eChannelsCounterReducer,
    tasheels: tasheelsReducer,
    tasheelsCounter: tasheelsCounterReducer,
    natwasals: natwasalsReducer,
    natwasalsCounter: natwasalsCounterReducer,
    // transactions: transactionsReducer,
    transactionsCounter: transactionsCounterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

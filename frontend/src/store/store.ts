import { configureStore } from "@reduxjs/toolkit";
import activitiesReducers from "./activitiesSlice.ts";
import authReducers from "./auth.ts";
import companiesCounterReducers from "./companiesCounterSlice.ts";
import companiesReducers from "./companiesSlice.ts";
import companyReducers from "./companySlice.ts";
import customersCounterReducers from "./customersCounterSlice.ts";
import customerReducers from "./customerSlice.ts";
import customersReducers from "./customersSlice.ts";
import employeesCounterReducers from "./employeesCounterSlice.ts";
import employeeReducers from "./employeeSlice.ts";
import employeesReducers from "./employeesSlice.ts";
import jobsCounterReducers from "./jobsCounterSlice.ts";
import jobsReducers from "./jobsSlice.ts";
import nationalitiesCounterReducers from "./nationalitiesCounterSlice.ts";
import nationalitiesReducers from "./nationalitiesSlice.ts";
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
import usersCounterReducers from "./usersCounterSlice.ts";
import userReducers from "./userSlice.ts";
import usersReducers from "./usersSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    activities: activitiesReducers,
    recentActivities: recentActivitiesReducers,
    jobs: jobsReducers,
    recentJobs: recentJobsReducers,
    recentEmployees: recentEmployeesReducers,
    nationalities: nationalitiesReducers,
    recentNationalities: recentNationalitiesReducers,
    users: usersReducers,
    recentUsers: recentUsersReducers,
    user: userReducers,
    companies: companiesReducers,
    recentCompanies: recentCompaniesReducers,
    company: companyReducers,
    owners: ownersReducers,
    recentOwners: recentOwnersReducers,
    pros: prosReducers,
    recentPros: recentProsReducers,
    employees: employeesReducers,
    employee: employeeReducers,
    customer: customerReducers,
    customers: customersReducers,
    recentCustomers: recentCustomersReducers,
    owner: ownerReducers,
    pro: proReducers,
    ownersCounter: ownersCounterReducers,
    prosCounter: prosCounterReducers,
    jobsCounter: jobsCounterReducers,
    companiesCounter: companiesCounterReducers,
    employeesCounter: employeesCounterReducers,
    customersCounter: customersCounterReducers,
    usersCounter: usersCounterReducers,
    nationalitiesCounter: nationalitiesCounterReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

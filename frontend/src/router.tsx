import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ErrorElement from "./components/ErrorElement/ErrorElement.tsx";
import { LoadingActivities } from "./pages/Activities.tsx";
import { LoadingAddCompany } from "./pages/AddCompany.tsx";
import { LoadingAddEmployee } from "./pages/AddEmployee.tsx";
import { LoadingAlerts } from "./pages/Alerts.tsx";
import { LoadingAllTransactions } from "./pages/AllTransactions.tsx";
import { LoadingCompanies } from "./pages/Companies.tsx";
import { LoadingCompany } from "./pages/Company.tsx";
import { LoadingCompanyTransaction } from "./pages/CompanyTransaction.tsx";
import { LoadingCustomer } from "./pages/Customer.tsx";
import { LoadingCustomers } from "./pages/Customers.tsx";
import { LoadingDashboard } from "./pages/Dashboard.tsx";
import { LoadingEChannels } from "./pages/EChannels.tsx";
import { LoadingEditCompany } from "./pages/EditCompany.tsx";
import { LoadingEditEmployee } from "./pages/EditEmployee.tsx";
import { LoadingEditPermission } from "./pages/EditPermission.tsx";
import { LoadingEmployee } from "./pages/Employee.tsx";
import { LoadingEmployeeDetails } from "./pages/EmployeeDetails.tsx";
import { LoadingEmployeeList } from "./pages/EmployeeList.tsx";
import { LoadingEmployees } from "./pages/Employees.tsx";
import { LoadingError } from "./pages/Error.tsx";
import { LoadingJobs } from "./pages/Jobs.tsx";
import { LoadingLogin } from "./pages/Login.tsx";
import { LoadingMails } from "./pages/Mails.tsx";
import { LoadingNationalities } from "./pages/Nationalities.tsx";
import { LoadingNatwasals } from "./pages/Natwasals.tsx";
import { LoadingNewTransactions } from "./pages/NewTransactions.tsx";
import { LoadingOTP } from "./pages/OTP.tsx";
import { LoadingOwner } from "./pages/Owner.tsx";
import { LoadingOwnerCompany } from "./pages/OwnerCompany.tsx";
import { LoadingOwners } from "./pages/Owners.tsx";
import { LoadingPreTransactions } from "./pages/PreTransactions.tsx";
import { LoadingPro } from "./pages/Pro.tsx";
import { LoadingProfile } from "./pages/Profile.tsx";
import { LoadingPros } from "./pages/Pros.tsx";
import { LoadingRenewTransactions } from "./pages/RenewTransactions.tsx";
import { LoadingReports } from "./pages/Reports.tsx";
import { LoadingResetPassword } from "./pages/ResetPassword.tsx";
import { LoadingSettings } from "./pages/Settings.tsx";
import { LoadingTasheels } from "./pages/Tasheels.tsx";
import { LoadingTodoList } from "./pages/TodoList.tsx";
import { LoadingUploadCompanies } from "./pages/UploadCompanies.tsx";
import { LoadingUploadCustomers } from "./pages/UploadCustomers.tsx";
import { LoadingUploadEmployees } from "./pages/UploadEmployees.tsx";
import { LoadingUploadJobs } from "./pages/UploadJobs.tsx";
import { LoadingUploadNationalities } from "./pages/UploadNationalities.tsx";
import { LoadingUploadOwners } from "./pages/UploadOwners.tsx";
import { LoadingUploadPros } from "./pages/UploadPros.tsx";
import { LoadingUser } from "./pages/User.tsx";
import { LoadingUsers } from "./pages/Users.tsx";

// Lazy load pages
const Activities = lazy(() => import("./pages/Activities.tsx"));
const AddCompany = lazy(() => import("./pages/AddCompany.tsx"));
const AddEmployee = lazy(() => import("./pages/AddEmployee.tsx"));
const Alerts = lazy(() => import("./pages/Alerts.tsx"));
const AllTransactions = lazy(() => import("./pages/AllTransactions.tsx"));
const Companies = lazy(() => import("./pages/Companies.tsx"));
const Company = lazy(() => import("./pages/Company.tsx"));
const CompanyTransaction = lazy(() => import("./pages/CompanyTransaction.tsx"));
const Customer = lazy(() => import("./pages/Customer.tsx"));
const Customers = lazy(() => import("./pages/Customers.tsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const EChannels = lazy(() => import("./pages/EChannels.tsx"));
const EditCompany = lazy(() => import("./pages/EditCompany.tsx"));
const EditEmployee = lazy(() => import("./pages/EditEmployee.tsx"));
const EditPermission = lazy(() => import("./pages/EditPermission.tsx"));
const Employee = lazy(() => import("./pages/Employee.tsx"));
const EmployeeDetails = lazy(() => import("./pages/EmployeeDetails.tsx"));
const EmployeeList = lazy(() => import("./pages/EmployeeList.tsx"));
const Employees = lazy(() => import("./pages/Employees.tsx"));
const Error = lazy(() => import("./pages/Error.tsx"));
const Jobs = lazy(() => import("./pages/Jobs.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));
const Mails = lazy(() => import("./pages/Mails.tsx"));
const Nationalities = lazy(() => import("./pages/Nationalities.tsx"));
const Natwasals = lazy(() => import("./pages/Natwasals.tsx"));
const NewTransactions = lazy(() => import("./pages/NewTransactions.tsx"));
const OTP = lazy(() => import("./pages/OTP.tsx"));
const Owner = lazy(() => import("./pages/Owner.tsx"));
const OwnerCompany = lazy(() => import("./pages/OwnerCompany.tsx"));
const Owners = lazy(() => import("./pages/Owners.tsx"));
const PreTransactions = lazy(() => import("./pages/PreTransactions.tsx"));
const Pro = lazy(() => import("./pages/Pro.tsx"));
const Profile = lazy(() => import("./pages/Profile.tsx"));
const Pros = lazy(() => import("./pages/Pros.tsx"));
const RenewTransactions = lazy(() => import("./pages/RenewTransactions.tsx"));
const Reports = lazy(() => import("./pages/Reports.tsx"));
const ResetPassword = lazy(() => import("./pages/ResetPassword.tsx"));
const Settings = lazy(() => import("./pages/Settings.tsx"));
const Tasheels = lazy(() => import("./pages/Tasheels.tsx"));
const TodoList = lazy(() => import("./pages/TodoList.tsx"));
const UploadCompanies = lazy(() => import("./pages/UploadCompanies.tsx"));
const UploadCustomers = lazy(() => import("./pages/UploadCustomers.tsx"));
const UploadEmployees = lazy(() => import("./pages/UploadEmployees.tsx"));
const UploadJobs = lazy(() => import("./pages/UploadJobs.tsx"));
const UploadNationalities = lazy(
  () => import("./pages/UploadNationalities.tsx"),
);
const UploadOwners = lazy(() => import("./pages/UploadOwners.tsx"));
const UploadPros = lazy(() => import("./pages/UploadPros.tsx"));
const User = lazy(() => import("./pages/User.tsx"));
const Users = lazy(() => import("./pages/Users.tsx"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingDashboard />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoadingLogin />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/resetPassword",
        element: (
          <Suspense fallback={<LoadingResetPassword />}>
            <ResetPassword />
          </Suspense>
        ),
      },
      {
        path: "/otp",
        element: (
          <Suspense fallback={<LoadingOTP />}>
            <OTP />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<LoadingProfile />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/users",
        element: (
          <Suspense fallback={<LoadingUsers />}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: "/users/:id",
        element: (
          <Suspense fallback={<LoadingUser />}>
            <User />
          </Suspense>
        ),
      },
      {
        path: "/customers",
        element: (
          <Suspense fallback={<LoadingCustomers />}>
            <Customers />
          </Suspense>
        ),
      },
      {
        path: "/customers/:id",
        element: (
          <Suspense fallback={<LoadingCustomer />}>
            <Customer />
          </Suspense>
        ),
      },
      {
        path: "/customers/upload",
        element: (
          <Suspense fallback={<LoadingUploadCustomers />}>
            <UploadCustomers />
          </Suspense>
        ),
      },
      {
        path: "/owners",
        element: (
          <Suspense fallback={<LoadingOwners />}>
            <Owners />
          </Suspense>
        ),
      },
      {
        path: "/owners/:id",
        element: (
          <Suspense fallback={<LoadingOwner />}>
            <Owner />
          </Suspense>
        ),
      },
      {
        path: "/owners/upload",
        element: (
          <Suspense fallback={<LoadingUploadOwners />}>
            <UploadOwners />
          </Suspense>
        ),
      },
      {
        path: "/employees",
        element: (
          <Suspense fallback={<LoadingEmployees />}>
            <Employees />
          </Suspense>
        ),
      },
      {
        path: "/employees/:id",
        element: (
          <Suspense fallback={<LoadingEmployee />}>
            <Employee />
          </Suspense>
        ),
      },
      {
        path: "/employees/add",
        element: (
          <Suspense fallback={<LoadingAddEmployee />}>
            <AddEmployee />
          </Suspense>
        ),
      },
      {
        path: "/employees/:id/edit",
        element: (
          <Suspense fallback={<LoadingEditEmployee />}>
            <EditEmployee />
          </Suspense>
        ),
      },
      {
        path: "/employees/upload",
        element: (
          <Suspense fallback={<LoadingUploadEmployees />}>
            <UploadEmployees />
          </Suspense>
        ),
      },
      {
        path: "/companies",
        element: (
          <Suspense fallback={<LoadingCompanies />}>
            <Companies />
          </Suspense>
        ),
      },
      {
        path: "/companies/:id",
        element: (
          <Suspense fallback={<LoadingCompany />}>
            <Company />
          </Suspense>
        ),
      },
      {
        path: "/companies/add",
        element: (
          <Suspense fallback={<LoadingAddCompany />}>
            <AddCompany />
          </Suspense>
        ),
      },
      {
        path: "/companies/:id/edit",
        element: (
          <Suspense fallback={<LoadingEditCompany />}>
            <EditCompany />
          </Suspense>
        ),
      },
      {
        path: "/companies/upload",
        element: (
          <Suspense fallback={<LoadingUploadCompanies />}>
            <UploadCompanies />
          </Suspense>
        ),
      },
      {
        path: "/e-channels",
        element: (
          <Suspense fallback={<LoadingEChannels />}>
            <EChannels />
          </Suspense>
        ),
      },
      {
        path: "/tasheels",
        element: (
          <Suspense fallback={<LoadingTasheels />}>
            <Tasheels />
          </Suspense>
        ),
      },
      {
        path: "/natwasals",
        element: (
          <Suspense fallback={<LoadingNatwasals />}>
            <Natwasals />
          </Suspense>
        ),
      },
      {
        path: "/transactions/all",
        element: (
          <Suspense fallback={<LoadingAllTransactions />}>
            <AllTransactions />
          </Suspense>
        ),
      },
      {
        path: "/transactions/pre",
        element: (
          <Suspense fallback={<LoadingPreTransactions />}>
            <PreTransactions />
          </Suspense>
        ),
      },
      {
        path: "/transactions/new",
        element: (
          <Suspense fallback={<LoadingNewTransactions />}>
            <NewTransactions />
          </Suspense>
        ),
      },
      {
        path: "/transactions/renew",
        element: (
          <Suspense fallback={<LoadingRenewTransactions />}>
            <RenewTransactions />
          </Suspense>
        ),
      },
      {
        path: "/activities",
        element: (
          <Suspense fallback={<LoadingActivities />}>
            <Activities />
          </Suspense>
        ),
      },
      {
        path: "/employeeList",
        element: (
          <Suspense fallback={<LoadingEmployeeList />}>
            <EmployeeList />
          </Suspense>
        ),
      },
      {
        path: "/ownerCompany",
        element: (
          <Suspense fallback={<LoadingOwnerCompany />}>
            <OwnerCompany />
          </Suspense>
        ),
      },
      {
        path: "/companyTransaction",
        element: (
          <Suspense fallback={<LoadingCompanyTransaction />}>
            <CompanyTransaction />
          </Suspense>
        ),
      },
      {
        path: "/employeeDetails",
        element: (
          <Suspense fallback={<LoadingEmployeeDetails />}>
            <EmployeeDetails />
          </Suspense>
        ),
      },
      {
        path: "/nationalities",
        element: (
          <Suspense fallback={<LoadingNationalities />}>
            <Nationalities />
          </Suspense>
        ),
      },
      {
        path: "/nationalities/upload",
        element: (
          <Suspense fallback={<LoadingUploadNationalities />}>
            <UploadNationalities />
          </Suspense>
        ),
      },
      {
        path: "/jobs",
        element: (
          <Suspense fallback={<LoadingJobs />}>
            <Jobs />
          </Suspense>
        ),
      },
      {
        path: "/jobs/upload",
        element: (
          <Suspense fallback={<LoadingUploadJobs />}>
            <UploadJobs />
          </Suspense>
        ),
      },
      {
        path: "/officers",
        element: (
          <Suspense fallback={<LoadingPros />}>
            <Pros />
          </Suspense>
        ),
      },
      {
        path: "/officers/:id",
        element: (
          <Suspense fallback={<LoadingPro />}>
            <Pro />
          </Suspense>
        ),
      },
      {
        path: "/officers/upload",
        element: (
          <Suspense fallback={<LoadingUploadPros />}>
            <UploadPros />
          </Suspense>
        ),
      },
      {
        path: "/mails",
        element: (
          <Suspense fallback={<LoadingMails />}>
            <Mails />
          </Suspense>
        ),
      },
      {
        path: "/reports",
        element: (
          <Suspense fallback={<LoadingReports />}>
            <Reports />
          </Suspense>
        ),
      },
      {
        path: "/todoList",
        element: (
          <Suspense fallback={<LoadingTodoList />}>
            <TodoList />
          </Suspense>
        ),
      },
      {
        path: "/settings",
        element: (
          <Suspense fallback={<LoadingSettings />}>
            <Settings />
          </Suspense>
        ),
      },
      {
        path: "/settings/permission/:id",
        element: (
          <Suspense fallback={<LoadingEditPermission />}>
            <EditPermission />
          </Suspense>
        ),
      },
      {
        path: "/alerts",
        element: (
          <Suspense fallback={<LoadingAlerts />}>
            <Alerts />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<LoadingError />}>
            <Error />
          </Suspense>
        ),
      },
    ],
  },
]);

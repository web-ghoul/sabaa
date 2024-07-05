import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Activities from "./pages/Activities.tsx";
import AddCompany from "./pages/AddCompany.tsx";
import AddEmployee from "./pages/AddEmployee.tsx";
import Companies from "./pages/Companies.tsx";
import Company from "./pages/Company.tsx";
import Customer from "./pages/Customer.tsx";
import Customers from "./pages/Customers.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import EChannels from "./pages/EChannels.tsx";
import EditCompany from "./pages/EditCompany.tsx";
import EditEmployee from "./pages/EditEmployee.tsx";
import Employee from "./pages/Employee.tsx";
import Employees from "./pages/Employees.tsx";
import Error from "./pages/Error.tsx";
import FileManager from "./pages/FileManager.tsx";
import Jobs from "./pages/Jobs.tsx";
import Login from "./pages/Login.tsx";
import Mails from "./pages/Mails.tsx";
import Nationalities from "./pages/Nationalities.tsx";
import Natwasals from "./pages/Natwasals.tsx";
import OTP from "./pages/OTP.tsx";
import Owner from "./pages/Owner.tsx";
import Owners from "./pages/Owners.tsx";
import Pro from "./pages/Pro.tsx";
import Profile from "./pages/Profile.tsx";
import Pros from "./pages/Pros.tsx";
import Reports from "./pages/Reports.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Settings from "./pages/Settings.tsx";
import Tasheels from "./pages/Tasheels.tsx";
import TodoList from "./pages/TodoList.tsx";
import Transactions from "./pages/AllTransactions.tsx";
import UploadCompanies from "./pages/UploadCompanies.tsx";
import UploadCustomers from "./pages/UploadCustomers.tsx";
import UploadEmployees from "./pages/UploadEmployees.tsx";
import UploadJobs from "./pages/UploadJobs.tsx";
import UploadNationalities from "./pages/UploadNationalities.tsx";
import UploadOwners from "./pages/UploadOwners.tsx";
import UploadPros from "./pages/UploadPros.tsx";
import User from "./pages/User.tsx";
import Users from "./pages/Users.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "/otp",
        element: <OTP />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/customers/:id",
        element: <Customer />,
      },
      {
        path: "/customers/upload",
        element: <UploadCustomers />,
      },
      {
        path: "/owners",
        element: <Owners />,
      },
      {
        path: "/owners/:id",
        element: <Owner />,
      },
      {
        path: "/owners/upload",
        element: <UploadOwners />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/employees/:id",
        element: <Employee />,
      },
      {
        path: "/employees/add",
        element: <AddEmployee />,
      },
      {
        path: "/employees/:id/edit",
        element: <EditEmployee />,
      },
      {
        path: "/employees/upload",
        element: <UploadEmployees />,
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/companies/:id",
        element: <Company />,
      },
      {
        path: "/companies/add",
        element: <AddCompany />,
      },
      {
        path: "/companies/:id/edit",
        element: <EditCompany />,
      },
      {
        path: "/companies/upload",
        element: <UploadCompanies />,
      },
      {
        path: "/e-channels",
        element: <EChannels />,
      },
      {
        path: "/tasheels",
        element: <Tasheels />,
      },
      {
        path: "/natwasals",
        element: <Natwasals />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/mails",
        element: <Mails />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/todoList",
        element: <TodoList />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/fileManager",
        element: <FileManager />,
      },
      {
        path: "/nationalities",
        element: <Nationalities />,
      },
      {
        path: "/nationalities/upload",
        element: <UploadNationalities />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/upload",
        element: <UploadJobs />,
      },
      {
        path: "/officers",
        element: <Pros />,
      },
      {
        path: "/officers/:id",
        element: <Pro />,
      },
      {
        path: "/officers/upload",
        element: <UploadPros />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

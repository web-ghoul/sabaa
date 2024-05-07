import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Activities from "./pages/Activities.tsx";
import AddCompany from "./pages/AddCompany.tsx";
import Companies from "./pages/Companies.tsx";
import Company from "./pages/Company.tsx";
import Customers from "./pages/Customers.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import EditCompany from "./pages/EditCompany.tsx";
import Employee from "./pages/Employee.tsx";
import Employees from "./pages/Employees.tsx";
import Error from "./pages/Error.tsx";
import FileManager from "./pages/FileManager.tsx";
import Jobs from "./pages/Jobs.tsx";
import Login from "./pages/Login.tsx";
import Mails from "./pages/Mails.tsx";
import Nationalities from "./pages/Nationalities.tsx";
import Owner from "./pages/Owner.tsx";
import Owners from "./pages/Owners.tsx";
import Profile from "./pages/Profile.tsx";
import PublicRelationOfficer from "./pages/PublicRelationOfficer.tsx";
import PublicRelationOfficers from "./pages/PublicRelationOfficers.tsx";
import Reports from "./pages/Reports.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Settings from "./pages/Settings.tsx";
import TodoList from "./pages/TodoList.tsx";
import Transactions from "./pages/Transactions.tsx";
import UploadCompanies from "./pages/UploadCompanies.tsx";
import UploadJobs from "./pages/UploadJobs.tsx";
import UploadNationalities from "./pages/UploadNationalities.tsx";
import UploadOwners from "./pages/UploadOwners.tsx";
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
        path: "/publicRelationOfficers",
        element: <PublicRelationOfficers />,
      },
      {
        path: "/publicRelationOfficers/:id",
        element: <PublicRelationOfficer />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

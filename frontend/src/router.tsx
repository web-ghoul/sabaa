import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Activities from "./pages/Activities.tsx";
import AddCompany from "./pages/AddCompany.tsx";
import AddOwner from "./pages/AddOwner.tsx";
import AddUser from "./pages/AddUser.tsx";
import Companies from "./pages/Companies.tsx";
<<<<<<< HEAD
import Company from "./pages/Company.tsx";
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import Dashboard from "./pages/Dashboard.tsx";
import EditCompany from "./pages/EditCompany.tsx";
import EditOwner from "./pages/EditOwner.tsx";
import EditUser from "./pages/EditUser.tsx";
<<<<<<< HEAD
import Employee from "./pages/Employee.tsx";
import Employees from "./pages/Employees.tsx";
import Error from "./pages/Error.tsx";
=======
import Employees from "./pages/Employees.tsx";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import FileManager from "./pages/FileManager.tsx";
import Jobs from "./pages/Jobs.tsx";
import Login from "./pages/Login.tsx";
import Mails from "./pages/Mails.tsx";
import Nationalities from "./pages/Nationalities.tsx";
<<<<<<< HEAD
import Owner from "./pages/Owner.tsx";
import Owners from "./pages/Owners.tsx";
import PublicRelationOfficer from "./pages/PublicRelationOfficer.tsx";
=======
import Owners from "./pages/Owners.tsx";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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
import UploadUsers from "./pages/UploadUsers.tsx";
<<<<<<< HEAD
import User from "./pages/User.tsx";
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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
        path: "/users",
        element: <Users />,
      },
      {
<<<<<<< HEAD
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/users/add",
        element: <AddUser />,
      },
      {
        path: "/users/:id/edit",
        element: <EditUser />,
      },
      {
        path: "/users/upload",
=======
        path: "/addUser",
        element: <AddUser />,
      },
      {
        path: "/editUser",
        element: <EditUser />,
      },
      {
        path: "/uploadUsers",
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        element: <UploadUsers />,
      },
      {
        path: "/owners",
        element: <Owners />,
      },
      {
<<<<<<< HEAD
        path: "/owners/:id",
        element: <Owner />,
      },
      {
        path: "/owners/add",
        element: <AddOwner />,
      },
      {
        path: "/owners/:id/edit",
        element: <EditOwner />,
      },
      {
        path: "/owners/upload",
=======
        path: "/addOwner",
        element: <AddOwner />,
      },
      {
        path: "/editOwner",
        element: <EditOwner />,
      },
      {
        path: "/uploadOwners",
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        element: <UploadOwners />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
<<<<<<< HEAD
        path: "/employees/:id",
        element: <Employee />,
      },
      {
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        path: "/companies",
        element: <Companies />,
      },
      {
<<<<<<< HEAD
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
=======
        path: "/addCompany",
        element: <AddCompany />,
      },
      {
        path: "/editCompany",
        element: <EditCompany />,
      },
      {
        path: "/uploadCompanies",
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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
<<<<<<< HEAD
        path: "/nationalities/upload",
=======
        path: "/uploadNationalities",
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        element: <UploadNationalities />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
<<<<<<< HEAD
        path: "/jobs/upload",
=======
        path: "/uploadJobs",
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        element: <UploadJobs />,
      },
      {
        path: "/publicRelationOfficers",
        element: <PublicRelationOfficers />,
      },
<<<<<<< HEAD
      {
        path: "/publicRelationOfficers/:id",
        element: <PublicRelationOfficer />,
      },
      {
        path: "*",
        element: <Error />,
      },
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
    ],
  },
]);

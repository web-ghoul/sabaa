import { Renderable, ToastPosition } from "react-hot-toast";

interface ImportMetaEnv {
  VITE_USERS_ROUTE: string;
  VITE_SERVER_URL: string;
  VITE_TOKEN_TITLE: string;
  VITE_USER_ID_TITLE: string;
  VITE_LOGIN_ROUTE: string;
  VITE_OTP_ROUTE: string;
  VITE_RESET_PASSWORD_ROUTE: string;
  VITE_DASHBOARD_ROUTE: string;
  VITE_SETTINGS_ROUTE: string;
  VITE_OWNERS_ROUTE: string;
  VITE_PROS_ROUTE: string;
  VITE_CUSTOMERS_ROUTE: string;
  VITE_EMPLOYEES_ROUTE: string;
  VITE_ADD_EMPLOYEE_ROUTE: string;
  VITE_TRANSACTIONS_ROUTE: string;
  VITE_NATIONALITIES_ROUTE: string;
  VITE_LIMIT_PAGES: string;
  VITE_RECENT_LIMIT_PAGES: string;
  VITE_JOBS_ROUTE: string;
  VITE_TODO_LIST_ROUTE: string;
  VITE_REPORTS_ROUTE: string;
  VITE_MAILS_ROUTE: string;
  VITE_ACTIVITIES_ROUTE: string;
  VITE_COMPANIES_ROUTE: string;
  VITE_ADD_COMPANY_ROUTE: string;
  VITE_UPLOAD_PROS_ROUTE: string;
  VITE_UPLOAD_OWNERS_ROUTE: string;
  VITE_UPLOAD_EMPLOYEES_ROUTE: string;
  VITE_UPLOAD_CUSTOMERS_ROUTE: string;
  VITE_UPLOAD_USERS_ROUTE: string;
  VITE_UPLOAD_COMPANIES_ROUTE: string;
  VITE_UPLOAD_JOBS_ROUTE: string;
  VITE_UPLOAD_NATIONALITIES_ROUTE: string;
  VITE_PROFILE_ROUTE: string;
}

interface AlertFunTypes {
  msg: string;
  status?: string;
  pos?: ToastPosition;
  icon?: Renderable;
  dur?: number;
}

type EntitiesType =
  | "companies"
  | "users"
  | "owners"
  | "employees"
  | "customers"
  | "transactions"
  | "officers"
  | "nationalities"
  | "jobs";

type EntityType =
  | "company"
  | "user"
  | "owner"
  | "employee"
  | "customer"
  | "transaction"
  | "officer"
  | "job"
  | "nationality";

type HeadsType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2";

export type {
  AlertFunTypes,
  EntitiesType,
  EntityType,
  HeadsType,
  ImportMetaEnv,
};

import { Renderable, ToastPosition } from "react-hot-toast";

interface ImportMetaEnv {
  VITE_USERS_ROUTE: string;
  VITE_SERVER_URL: string;
  VITE_TOKEN_TITLE: string;
  VITE_USER_ID_TITLE: string;
  VITE_LOGIN_ROUTE: string;
  VITE_RESET_PASSWORD_ROUTE: string;
  VITE_DASHBOARD_ROUTE: string;
  VITE_SETTINGS_ROUTE: string;
  VITE_OWNERS_ROUTE: string;
  VITE_EMPLOYEES_ROUTE: string;
  VITE_COMPANIES_ROUTE: string;
  VITE_TRANSACTIONS_ROUTE: string;
  VITE_FILE_MANAGER_ROUTE: string;
  VITE_NATIONALITIES_ROUTE: string;
  VITE_LIMIT_PAGES: string;
  VITE_JOBS_ROUTE: string;
  VITE_ADD_TRANSACTION_ROUTE: string;
  VITE_PUBLIC_RELATION_OFFICERS_ROUTE: string;
  VITE_TODO_LIST_ROUTE: string;
  VITE_REPORTS_ROUTE: string;
  VITE_MAILS_ROUTE: string;
  VITE_ACTIVITIES_ROUTE: string;
  VITE_ADD_OWNER_ROUTE: string;
  VITE_ADD_COMPANY_ROUTE: string;
  VITE_EDIT_OWNER_ROUTE: string;
  VITE_EDIT_COMPANY_ROUTE: string;
  VITE_ADD_USER_ROUTE: string;
  VITE_UPLOAD_OWNERS_ROUTE: string;
  VITE_UPLOAD_USERS_ROUTE: string;
  VITE_UPLOAD_COMPANIES_ROUTE: string;
  VITE_UPLOAD_JOBS_ROUTE: string;
  VITE_UPLOAD_NATIONALITIES_ROUTE: string;
  VITE_ADD_PUBLIC_RELATION_OFFICER_ROUTE: string;
  VITE_EDIT_USER_ROUTE: string;
  VITE_PROFILE_ROUTE: string;
}

interface AlertFunTypes {
  msg: string;
  status?: string;
  pos?: ToastPosition;
  icon?: Renderable;
  dur?: number;
}

export type { AlertFunTypes, ImportMetaEnv };

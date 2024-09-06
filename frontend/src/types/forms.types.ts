import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import {
  AlertsTypes,
  CompanyTypes,
  CustomerTypes,
  EChannelTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  NatwasalTypes,
  OwnerTypes,
  ProTypes,
  RoleTypes,
  SponsorTypes,
  TasheelTypes,
  TransactionTypes,
  UserTypes,
} from "./store.types";

interface FormsTypes {
  type: string;
  index?: number;
  tType?: string;
}

//Login
interface LoginFormTypes {
  username: string;
  password: string;
}
//Login

//Reset Password
interface ResetPasswordFormTypes {
  otp: string;
  password: string;
  confirmPassword: string;
}
//Reset Password

//Forgot Password
interface ForgotPasswordFormTypes {
  email: string;
}
//Forgot Password

//OTP
interface OTPFormTypes {
  otp: string;
}
//OTP

//Activities
interface ActivitiesOptionsFormTypes {
  search: string;
  userId: string;
  type: string;
  operation: string;
  from: string;
  to: string;
}
//Activities

//Company
interface CompaniesOptionsFormTypes {
  search: string;
  state: string;
  status: string;
  molCategory: string;
  establishmentType: string;
  IMMGFrom: string;
  IMMGTo: string;
  licenseFrom: string;
  licenseTo: string;
}

interface CompanyFormTypes extends CompanyTypes {}

interface LinkToCompanyFormTypes {
  companyId: string[];
}
//Company

//Owner
interface OwnerFormTypes extends OwnerTypes {}

interface OwnersOptionsFormTypes {
  search: string;
  dobFrom: string;
  dobTo: string;
  residenceFrom: string;
  residenceTo: string;
  status: string;
  nationality: string;
  state: string;
}
//Owner

//Pro
interface ProFormTypes extends ProTypes {}

interface ProsOptionsFormTypes {
  search: string;
  dobFrom: string;
  dobTo: string;
  residenceFrom: string;
  residenceTo: string;
  status: string;
  nationality: string;
  state: string;
}
//Pro

//Customer
interface CustomerFormTypes extends CustomerTypes {}

interface CustomersOptionsFormTypes {
  search: string;
  dobFrom: string;
  dobTo: string;
  residenceFrom: string;
  residenceTo: string;
  status: string;
  nationality: string;
  state: string;
}

interface ConvertCustomerFormTypes {
  type: string;
}
//Customer

//Employee
interface EmployeeFormTypes extends EmployeeTypes {}

interface EmployeesOptionsFormTypes {
  search: string;
  cardType: string;
  status: string;
  nationality: string;
  gender: string;
}
//Employee

//Transaction
interface TransactionFormTypes extends TransactionTypes {
  searchForEmployee: string;
}
interface TransactionsOptionsFormTypes {
  page: number;
  search: string;
  sort: string;
  limit: number;
  expireWorkPermitFrom: string;
  expireWorkPermitTo: string;
  residenceFrom: string;
  residenceTo: string;
  changeStatusDateFrom: string;
  changeStatusDateTo: string;
  status: string;
  type: string;
}

//Transaction

//Sponsor
interface SponsorFormTypes extends SponsorTypes {}
//Sponsor

//Job
interface JobFormTypes extends JobTypes {}

interface JobsOptionsFormTypes {
  search: string;
  limit: string;
}
//Job

//Nationality
interface NationalityFormTypes extends NationalityTypes {}

interface NationalitiesOptionsFormTypes {
  search: string;
  limit: string;
}
//Nationality

//User
interface UserFormTypes extends UserTypes {}

interface UsersOptionsFormTypes {
  search: string;
  role: string;
  status: string;
}
//User

//Role
interface RoleFormTypes extends RoleTypes {}
//Role

//E-Channels
interface EChannelFormTypes extends EChannelTypes {}

interface EChannelsOptionsFormTypes {
  search: string;
  type: string;
  status: string;
  gender: string;
}
//E-Channels

//Tasheel
interface TasheelFormTypes extends TasheelTypes {}

interface TasheelsOptionsFormTypes {
  search: string;
  type: string;
}
//Tasheel

//Natwasal
interface NatwasalFormTypes extends NatwasalTypes {}

interface NatwasalsOptionsFormTypes {
  search: string;
  type: string;
}
//Natwasal

//Selector
interface OptionFormTypes {
  option: string;
}
//Selector

//Download Excel
interface DownloadExcelFormTypes {
  fileName: string;
}
//Download Excel

//Delete
interface DeleteFormTypes {}
//Delete

//Alerts
interface AlertFormTypes extends AlertsTypes {}
//Alerts

//Company Info
interface CompanyInfoFormTypes {
  logo: string;
  companyName: string;
  mobile: string;
  officialEmail: string;
  websiteLink: string;
}
//Company Info

type AllFormsTypes =
  | LoginFormTypes
  | ResetPasswordFormTypes
  | ForgotPasswordFormTypes
  | OwnersOptionsFormTypes
  | UsersOptionsFormTypes
  | CompaniesOptionsFormTypes
  | JobFormTypes
  | NationalitiesOptionsFormTypes
  | NationalityFormTypes
  | UserFormTypes
  | CompanyFormTypes
  | OwnerFormTypes
  | DeleteFormTypes
  | JobsOptionsFormTypes
  | LinkToCompanyFormTypes
  | ProFormTypes
  | ProsOptionsFormTypes
  | EmployeeFormTypes
  | EmployeesOptionsFormTypes
  | CustomerFormTypes
  | DownloadExcelFormTypes
  | ActivitiesOptionsFormTypes
  | OTPFormTypes
  | SponsorFormTypes
  | ConvertCustomerFormTypes
  | EChannelFormTypes
  | TasheelFormTypes
  | TasheelsOptionsFormTypes
  | NatwasalFormTypes
  | NatwasalsOptionsFormTypes
  | TransactionFormTypes
  | TransactionsOptionsFormTypes
  | RoleFormTypes
  | CompanyInfoFormTypes
  | OptionFormTypes
  | AlertFormTypes;

interface FormiksTypes {
  register: UseFormRegister<AllFormsTypes>;
  errors: FieldErrors<AllFormsTypes>;
  setValue: UseFormSetValue<AllFormsTypes>;
  getValues: UseFormGetValues<AllFormsTypes>;
  type?: string;
  tType?: string;
}

interface CatchErrorTypes {
  response: {
    data: {
      message: string;
    };
  };
}

export type {
  ActivitiesOptionsFormTypes,
  AllFormsTypes,
  CatchErrorTypes,
  CompaniesOptionsFormTypes,
  CompanyFormTypes,
  ConvertCustomerFormTypes,
  CustomerFormTypes,
  CustomersOptionsFormTypes,
  DeleteFormTypes,
  DownloadExcelFormTypes,
  EChannelFormTypes,
  EChannelsOptionsFormTypes,
  EmployeeFormTypes,
  EmployeesOptionsFormTypes,
  ForgotPasswordFormTypes,
  FormiksTypes,
  FormsTypes,
  JobFormTypes,
  JobsOptionsFormTypes,
  LinkToCompanyFormTypes,
  LoginFormTypes,
  NationalitiesOptionsFormTypes,
  NationalityFormTypes,
  NatwasalFormTypes,
  NatwasalsOptionsFormTypes,
  OTPFormTypes,
  OwnerFormTypes,
  OwnersOptionsFormTypes,
  ProFormTypes,
  ProsOptionsFormTypes,
  ResetPasswordFormTypes,
  SponsorFormTypes,
  TasheelFormTypes,
  TasheelsOptionsFormTypes,
  UserFormTypes,
  UsersOptionsFormTypes,
  TransactionFormTypes,
  TransactionsOptionsFormTypes,
  RoleFormTypes,
  CompanyInfoFormTypes,
  OptionFormTypes,
  AlertFormTypes,
};

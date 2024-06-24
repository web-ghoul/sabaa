import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import {
  CompanyTypes,
  CustomerTypes,
  EChannelTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  NatwasalTypes,
  OwnerTypes,
  ProTypes,
  SponsorTypes,
  TasheelTypes,
  UserTypes,
} from "./store.types";

interface FormsTypes {
  type: string;
  index?: number;
}

//Login
interface LoginFormTypes {
  username: string;
  password: string;
}

//Reset Password
interface ResetPasswordFormTypes {
  otp: string;
  password: string;
  confirmPassword: string;
}

//Forgot Password
interface ForgotPasswordFormTypes {
  email: string;
}

//OTP
interface OTPFormTypes {
  otp: string;
}

//Activities
interface ActivitiesOptionsFormTypes {
  search: string;
  type: string;
  operation: string;
  from: string;
  to: string;
}

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

//Employee
interface EmployeeFormTypes extends EmployeeTypes {}

interface EmployeesOptionsFormTypes {
  search: string;
  cardType: string;
  status: string;
  nationality: string;
  gender: string;
}

//Sponsor
interface SponsorFormTypes extends SponsorTypes {}

//Job
interface JobFormTypes extends JobTypes {}

interface JobsOptionsFormTypes {
  search: string;
  limit: string;
}

//Nationality
interface NationalityFormTypes extends NationalityTypes {}

interface NationalitiesOptionsFormTypes {
  search: string;
  limit: string;
}

//User
interface UserFormTypes extends UserTypes {}

interface UsersOptionsFormTypes {
  search: string;
  role: string;
  status: string;
}

//E-Channels
interface EChannelFormTypes extends EChannelTypes {}

interface EChannelsOptionsFormTypes {
  search: string;
  type: string;
  status: string;
  gender: string;
}

//Tasheel
interface TasheelFormTypes extends TasheelTypes {}

interface TasheelsOptionsFormTypes {
  search: string;
  type: string;
}

//Natwasal
interface NatwasalFormTypes extends NatwasalTypes {}

interface NatwasalsOptionsFormTypes {
  search: string;
  type: string;
}

//Download Excel
interface DownloadExcelFormTypes {
  fileName: string;
}

//Delete
interface DeleteFormTypes {}

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
  | NatwasalsOptionsFormTypes;

interface FormiksTypes {
  register: UseFormRegister<AllFormsTypes>;
  errors: FieldErrors<AllFormsTypes>;
  setValue: UseFormSetValue<AllFormsTypes>;
  getValues: UseFormGetValues<AllFormsTypes>;
  type?: string;
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
};

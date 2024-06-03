import { FormikProps } from "formik";
import {
  CompanyTypes,
  CustomerTypes,
  EChannelTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  ProTypes,
  SponsorTypes,
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

interface LoginFormikTypes {
  touched: LoginFormTypes;
  errors: LoginFormTypes;
  initialValues: LoginFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: LoginFormTypes;
}

//Reset Password
interface ResetPasswordFormTypes {
  otp: string;
  password: string;
  confirmPassword: string;
}

interface ResetPasswordFormikTypes {
  touched: ResetPasswordFormTypes;
  errors: ResetPasswordFormTypes;
  initialValues: ResetPasswordFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: ResetPasswordFormTypes;
}

//Forgot Password

interface ForgotPasswordFormTypes {
  email: string;
}

interface ForgotPasswordFormikTypes {
  touched: ForgotPasswordFormTypes;
  errors: ForgotPasswordFormTypes;
  initialValues: ForgotPasswordFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: ForgotPasswordFormTypes;
}

//Forgot Password

interface OTPFormTypes {
  otp: string;
}

interface OTPFormikTypes {
  touched: OTPFormTypes;
  errors: OTPFormTypes;
  initialValues: OTPFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: OTPFormTypes;
}

//Activities
interface ActivitiesOptionsFormTypes {
  search: string;
  type: string;
  operation: string;
  from: string;
  to: string;
}

interface ActivitiesOptionsFormikTypes {
  touched: ActivitiesOptionsFormTypes;
  errors: ActivitiesOptionsFormTypes;
  initialValues: ActivitiesOptionsFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: ActivitiesOptionsFormTypes;
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

interface CompaniesOptionsFormikTypes {
  touched: CompaniesOptionsFormTypes;
  errors: CompaniesOptionsFormTypes;
  initialValues: CompaniesOptionsFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: CompaniesOptionsFormTypes;
}

interface CompanyFormTypes extends CompanyTypes {}

interface CompanyFormikTypes {
  touched: CompanyFormTypes;
  errors: CompanyFormTypes;
  initialValues: CompanyFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: CompanyFormTypes;
}

interface LinkToCompanyFormTypes {
  companyId: string[];
}

interface LinkToCompanyFormikTypes {
  touched: LinkToCompanyFormTypes;
  errors: LinkToCompanyFormTypes;
  initialValues: LinkToCompanyFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: LinkToCompanyFormTypes;
}

//Owner

interface OwnerFormTypes extends OwnerTypes {}

interface OwnerFormikTypes {
  touched: OwnerFormTypes;
  errors: OwnerFormTypes;
  initialValues: OwnerFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: OwnerFormTypes;
}

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

interface OwnersOptionsFormikTypes {
  touched: OwnersOptionsFormTypes;
  errors: OwnersOptionsFormTypes;
  initialValues: OwnersOptionsFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: OwnersOptionsFormTypes;
}

//Pro

interface ProFormTypes extends ProTypes {}

interface ProFormikTypes {
  touched: ProFormTypes;
  errors: ProFormTypes;
  initialValues: ProFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: ProFormTypes;
}

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

interface ProsOptionsFormikTypes {
  touched: ProsOptionsFormTypes;
  errors: ProsOptionsFormTypes;
  initialValues: ProsOptionsFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: ProsOptionsFormTypes;
}

//Customer

interface CustomerFormTypes extends CustomerTypes {}

interface CustomerFormikTypes {
  touched: CustomerFormTypes;
  errors: CustomerFormTypes;
  initialValues: CustomerFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: CustomerFormTypes;
}

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

interface CustomersOptionsFormikTypes {
  touched: CustomersOptionsFormTypes;
  errors: CustomersOptionsFormTypes;
  initialValues: CustomersOptionsFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: CustomersOptionsFormTypes;
}

interface ConvertCustomerFormTypes {
  type: string;
}

interface ConvertCustomerFormikTypes {
  touched: ConvertCustomerFormTypes;
  errors: ConvertCustomerFormTypes;
  initialValues: ConvertCustomerFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: ConvertCustomerFormTypes;
}

//Employee

interface EmployeeFormTypes extends EmployeeTypes {}

interface EmployeeFormikTypes {
  touched: EmployeeFormTypes;
  errors: EmployeeFormTypes;
  initialValues: EmployeeFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EmployeeFormTypes;
}

interface EmployeesOptionsFormTypes {
  search: string;
  cardType: string;
  status: string;
  nationality: string;
  gender: string;
}

interface EmployeesOptionsFormikTypes {
  touched: EmployeesOptionsFormTypes;
  errors: EmployeesOptionsFormTypes;
  initialValues: EmployeesOptionsFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EmployeesOptionsFormTypes;
}

//Sponsor

interface SponsorFormTypes extends SponsorTypes {}

interface SponsorFormikTypes {
  touched: SponsorFormTypes;
  errors: SponsorFormTypes;
  initialValues: SponsorFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: SponsorFormTypes;
}

//Job
interface JobFormTypes extends JobTypes {}

interface JobFormikTypes {
  touched: JobFormTypes;
  errors: JobFormTypes;
  initialValues: JobFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: JobFormTypes;
}

interface JobsOptionsFormTypes {
  search: string;
  limit: string;
}

interface JobsOptionsFormikTypes {
  touched: JobsOptionsFormTypes;
  errors: JobsOptionsFormTypes;
  initialValues: JobsOptionsFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: JobsOptionsFormTypes;
}

//Nationality

interface NationalityFormTypes extends NationalityTypes {}

interface NationalityFormikTypes {
  touched: NationalityFormTypes;
  errors: NationalityFormTypes;
  initialValues: NationalityFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: NationalityFormTypes;
}

interface NationalitiesOptionsFormTypes {
  search: string;
  limit: string;
}

interface NationalitiesOptionsFormikTypes {
  touched: NationalitiesOptionsFormTypes;
  errors: NationalitiesOptionsFormTypes;
  initialValues: NationalitiesOptionsFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: NationalitiesOptionsFormTypes;
}

//User

interface UserFormTypes extends UserTypes {}

interface UserFormikTypes {
  touched: UserFormTypes;
  errors: UserFormTypes;
  initialValues: UserFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: UserFormTypes;
}

interface UsersOptionsFormTypes {
  search: string;
  role: string;
  status: string;
}

interface UsersOptionsFormikTypes {
  touched: UsersOptionsFormTypes;
  errors: UsersOptionsFormTypes;
  initialValues: UsersOptionsFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: UsersOptionsFormTypes;
}

//E-Channels

interface EChannelFormTypes extends EChannelTypes {}

interface EChannelFormikTypes {
  touched: EChannelFormTypes;
  errors: EChannelFormTypes;
  initialValues: EChannelFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EChannelFormTypes;
}

interface EChannelsOptionsFormTypes {
  search: string;
  type: string;
  status: string;
  gender: string;
}

interface EChannelsOptionsFormikTypes {
  touched: EChannelsOptionsFormTypes;
  errors: EChannelsOptionsFormTypes;
  initialValues: EChannelsOptionsFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EChannelsOptionsFormTypes;
}

//Download Excel

interface DownloadExcelFormTypes {
  fileName: string;
}

interface DownloadExcelFormikTypes {
  touched: DownloadExcelFormTypes;
  errors: DownloadExcelFormTypes;
  initialValues: DownloadExcelFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: DownloadExcelFormTypes;
}

//Delete

interface DeleteFormTypes {}

interface DeleteFormikTypes {
  touched: DeleteFormTypes;
  errors: DeleteFormTypes;
  initialValues: DeleteFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: DeleteFormTypes;
}

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
  | CustomersOptionsFormikTypes
  | CustomerFormTypes
  | DownloadExcelFormTypes
  | ActivitiesOptionsFormTypes
  | OTPFormTypes
  | SponsorFormTypes
  | ConvertCustomerFormTypes
  | EChannelFormTypes;

type AllFormiksTypes =
  | LoginFormikTypes
  | ResetPasswordFormikTypes
  | ForgotPasswordFormikTypes
  | OwnersOptionsFormikTypes
  | UsersOptionsFormikTypes
  | CompaniesOptionsFormikTypes
  | JobFormikTypes
  | JobsOptionsFormikTypes
  | NationalityFormikTypes
  | UserFormikTypes
  | CompanyFormikTypes
  | NationalitiesOptionsFormikTypes
  | OwnerFormikTypes
  | DeleteFormikTypes
  | LinkToCompanyFormikTypes
  | ProFormikTypes
  | ProsOptionsFormikTypes
  | EmployeeFormikTypes
  | EmployeesOptionsFormikTypes
  | CustomersOptionsFormikTypes
  | CustomerFormikTypes
  | DownloadExcelFormikTypes
  | ActivitiesOptionsFormikTypes
  | OTPFormikTypes
  | SponsorFormikTypes
  | ConvertCustomerFormikTypes
  | EChannelFormikTypes;

interface FormiksTypes {
  formik: FormikProps<AllFormiksTypes>;
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
  ActivitiesOptionsFormikTypes,
  ActivitiesOptionsFormTypes,
  AllFormiksTypes,
  AllFormsTypes,
  CatchErrorTypes,
  CompaniesOptionsFormikTypes,
  CompaniesOptionsFormTypes,
  CompanyFormikTypes,
  CompanyFormTypes,
  ConvertCustomerFormikTypes,
  ConvertCustomerFormTypes,
  CustomerFormikTypes,
  CustomerFormTypes,
  CustomersOptionsFormikTypes,
  CustomersOptionsFormTypes,
  DeleteFormikTypes,
  DeleteFormTypes,
  DownloadExcelFormikTypes,
  DownloadExcelFormTypes,
  EChannelFormikTypes,
  EChannelFormTypes,
  EChannelsOptionsFormikTypes,
  EChannelsOptionsFormTypes,
  EmployeeFormikTypes,
  EmployeeFormTypes,
  EmployeesOptionsFormikTypes,
  EmployeesOptionsFormTypes,
  ForgotPasswordFormikTypes,
  ForgotPasswordFormTypes,
  FormiksTypes,
  FormsTypes,
  JobFormikTypes,
  JobFormTypes,
  JobsOptionsFormikTypes,
  JobsOptionsFormTypes,
  LinkToCompanyFormikTypes,
  LinkToCompanyFormTypes,
  LoginFormikTypes,
  LoginFormTypes,
  NationalitiesOptionsFormikTypes,
  NationalitiesOptionsFormTypes,
  NationalityFormikTypes,
  NationalityFormTypes,
  OTPFormikTypes,
  OTPFormTypes,
  OwnerFormikTypes,
  OwnerFormTypes,
  OwnersOptionsFormikTypes,
  OwnersOptionsFormTypes,
  ProFormikTypes,
  ProFormTypes,
  ProsOptionsFormikTypes,
  ProsOptionsFormTypes,
  ResetPasswordFormikTypes,
  ResetPasswordFormTypes,
  SponsorFormikTypes,
  SponsorFormTypes,
  UserFormikTypes,
  UserFormTypes,
  UsersOptionsFormikTypes,
  UsersOptionsFormTypes,
};

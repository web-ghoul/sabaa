import { FormikProps } from "formik";
import {
  CompanyTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  UserTypes,
} from "./store.types";

interface FormsTypes {
  type: string;
  index?: number;
}

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

interface ResetPasswordFormTypes {
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

interface CompanyFormTypes extends CompanyTypes {
  ownerId: string[];
  proCode: string[];
}

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

interface OwnersOptionsFormTypes {
  search: string;
  dobFrom: string;
  dobTo: string;
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
  | JobsOptionsFormTypes;

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
  | DeleteFormikTypes;

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
  AllFormiksTypes,
  AllFormsTypes,
  CatchErrorTypes,
  CompaniesOptionsFormikTypes,
  CompaniesOptionsFormTypes,
  CompanyFormikTypes,
  CompanyFormTypes,
  DeleteFormikTypes,
  DeleteFormTypes,
  ForgotPasswordFormikTypes,
  ForgotPasswordFormTypes,
  FormiksTypes,
  FormsTypes,
  JobFormikTypes,
  JobFormTypes,
  JobsOptionsFormikTypes,
  JobsOptionsFormTypes,
  LoginFormikTypes,
  LoginFormTypes,
  NationalitiesOptionsFormikTypes,
  NationalitiesOptionsFormTypes,
  NationalityFormikTypes,
  NationalityFormTypes,
  OwnerFormikTypes,
  OwnerFormTypes,
  OwnersOptionsFormikTypes,
  OwnersOptionsFormTypes,
  ResetPasswordFormikTypes,
  ResetPasswordFormTypes,
  UserFormikTypes,
  UserFormTypes,
  UsersOptionsFormikTypes,
  UsersOptionsFormTypes,
};

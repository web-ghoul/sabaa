import { FormikProps } from "formik";
import { CompanyTypes, OwnerTypes } from "./store.types";

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

interface AddCompanyFormTypes extends CompanyTypes {}

interface AddCompanyFormikTypes {
  touched: AddCompanyFormTypes;
  errors: AddCompanyFormTypes;
  initialValues: AddCompanyFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: AddCompanyFormTypes;
}

interface EditCompanyFormTypes extends CompanyTypes {}

interface EditCompanyFormikTypes {
  touched: EditCompanyFormTypes;
  errors: EditCompanyFormTypes;
  initialValues: EditCompanyFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EditCompanyFormTypes;
}

interface AddOwnerFormTypes extends OwnerTypes {}

interface AddOwnerFormikTypes {
  touched: AddOwnerFormTypes;
  errors: AddOwnerFormTypes;
  initialValues: AddOwnerFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: AddOwnerFormTypes;
}

interface EditOwnerFormTypes extends OwnerTypes {}

interface EditOwnerFormikTypes {
  touched: EditOwnerFormTypes;
  errors: EditOwnerFormTypes;
  initialValues: EditOwnerFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EditOwnerFormTypes;
}

interface AddJobFormTypes {
  jobTitle: string;
  ENSCOCode: string;
  _id: string;
}

interface AddJobFormikTypes {
  touched: AddJobFormTypes;
  errors: AddJobFormTypes;
  initialValues: AddJobFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: AddJobFormTypes;
}

interface EditJobFormTypes extends AddJobFormTypes {}

interface EditJobFormikTypes {
  touched: EditJobFormTypes;
  errors: EditJobFormTypes;
  initialValues: EditJobFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EditJobFormTypes;
}

interface AddNationalityFormTypes {
  nationality: string;
  _id: string;
}

interface AddNationalityFormikTypes {
  touched: AddNationalityFormTypes;
  errors: AddNationalityFormTypes;
  initialValues: AddNationalityFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: AddNationalityFormTypes;
}

interface EditNationalityFormTypes extends AddNationalityFormTypes {}

interface EditNationalityFormikTypes {
  touched: EditNationalityFormTypes;
  errors: EditNationalityFormTypes;
  initialValues: EditNationalityFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EditNationalityFormTypes;
}

interface AddUserFormTypes {
  _id: string;
  name: string;
  password: string;
  email: string;
  role: string;
  phone: string;
  avatar: string;
  status: string;
}

interface AddUserFormikTypes {
  touched: AddUserFormTypes;
  errors: AddUserFormTypes;
  initialValues: AddUserFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: AddUserFormTypes;
}

interface EditUserFormTypes extends AddUserFormTypes {}

interface EditUserFormikTypes {
  touched: EditUserFormTypes;
  errors: EditUserFormTypes;
  initialValues: EditUserFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EditUserFormTypes;
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
  filterByDateOfBirth: string;
  filterByNationality: string;
  limit: string;
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
  limit: string;
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
  limit: string;
  filterByState: string;
  filterByStatus: string;
  filterByMOLCategory: string;
  filterByEstablishmentType: string;
  filterByIMMGExpireDate: string;
  filterByLicenseExpireDate: string;
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
  | AddJobFormTypes
  | EditJobFormTypes
  | NationalitiesOptionsFormTypes
  | EditNationalityFormTypes
  | AddNationalityFormTypes
  | AddUserFormTypes
  | EditUserFormTypes
  | AddCompanyFormTypes
  | EditCompanyFormTypes
  | AddOwnerFormTypes
  | EditOwnerFormTypes
  | DeleteFormTypes
  | JobsOptionsFormTypes;

type AllFormiksTypes =
  | LoginFormikTypes
  | ResetPasswordFormikTypes
  | ForgotPasswordFormikTypes
  | OwnersOptionsFormikTypes
  | UsersOptionsFormikTypes
  | CompaniesOptionsFormikTypes
  | AddJobFormikTypes
  | JobsOptionsFormikTypes
  | EditJobFormikTypes
  | EditNationalityFormikTypes
  | AddNationalityFormikTypes
  | AddUserFormikTypes
  | EditUserFormikTypes
  | AddCompanyFormikTypes
  | EditCompanyFormikTypes
  | NationalitiesOptionsFormikTypes
  | AddOwnerFormikTypes
  | EditOwnerFormikTypes
  | DeleteFormikTypes;

interface FormiksTypes {
  formik: FormikProps<AllFormiksTypes>;
}

interface CatchErrorTypes {
  response: {
    data: {
      message: string;
    };
  };
}

export type {
  AddCompanyFormikTypes,
  AddCompanyFormTypes,
  AddJobFormikTypes,
  AddJobFormTypes,
  AddNationalityFormikTypes,
  AddNationalityFormTypes,
  AddOwnerFormikTypes,
  AddOwnerFormTypes,
  AddUserFormikTypes,
  AddUserFormTypes,
  AllFormiksTypes,
  AllFormsTypes,
  CatchErrorTypes,
  CompaniesOptionsFormikTypes,
  CompaniesOptionsFormTypes,
  DeleteFormikTypes,
  DeleteFormTypes,
  EditCompanyFormikTypes,
  EditCompanyFormTypes,
  EditJobFormikTypes,
  EditJobFormTypes,
  EditNationalityFormikTypes,
  EditNationalityFormTypes,
  EditOwnerFormikTypes,
  EditOwnerFormTypes,
  EditUserFormikTypes,
  EditUserFormTypes,
  ForgotPasswordFormikTypes,
  ForgotPasswordFormTypes,
  FormiksTypes,
  FormsTypes,
  JobsOptionsFormikTypes,
  JobsOptionsFormTypes,
  LoginFormikTypes,
  LoginFormTypes,
  NationalitiesOptionsFormikTypes,
  NationalitiesOptionsFormTypes,
  OwnersOptionsFormikTypes,
  ResetPasswordFormikTypes,
  ResetPasswordFormTypes,
  UsersOptionsFormikTypes,
  UsersOptionsFormTypes,
};

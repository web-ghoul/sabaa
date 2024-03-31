import { FormikProps } from "formik";
<<<<<<< HEAD
import { CompanyTypes, OwnerTypes } from "./store.types";

interface FormsTypes {
  type: string;
  index?: number;
=======

interface FormsTypes {
  type: string;
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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

<<<<<<< HEAD
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

=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
interface OwnersOptionsFormTypes {
  search: string;
  filteryDate: string;
  sort: string;
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

interface UsersOptionsFormTypes {
  search: string;
  filteryDate: string;
  sort: string;
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
  filteryDate: string;
  sort: string;
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
<<<<<<< HEAD
  | CompaniesOptionsFormTypes
  | AddJobFormTypes
  | EditJobFormTypes
  | EditNationalityFormTypes
  | AddNationalityFormTypes
  | AddUserFormTypes
  | EditUserFormTypes
  | AddCompanyFormTypes
  | EditCompanyFormTypes
  | AddOwnerFormTypes
  | EditOwnerFormTypes
  | DeleteFormTypes;
=======
  | CompaniesOptionsFormTypes;
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

type AllFormiksTypes =
  | LoginFormikTypes
  | ResetPasswordFormikTypes
  | ForgotPasswordFormikTypes
  | OwnersOptionsFormikTypes
  | UsersOptionsFormikTypes
<<<<<<< HEAD
  | CompaniesOptionsFormikTypes
  | AddJobFormikTypes
  | EditJobFormikTypes
  | EditNationalityFormikTypes
  | AddNationalityFormikTypes
  | AddUserFormikTypes
  | EditUserFormikTypes
  | AddCompanyFormikTypes
  | EditCompanyFormikTypes
  | AddOwnerFormikTypes
  | EditOwnerFormikTypes
  | DeleteFormikTypes;
=======
  | CompaniesOptionsFormikTypes;
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

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

<<<<<<< HEAD
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
=======
interface FormsContextTypes {
  formsLoading: boolean;
  handleCloseFormsLoading: () => void;
  handleOpenFormsLoading: () => void;
  openForgotPasswordModal: boolean;
  handleOpenForgotPasswordModal: () => void;
  handleCloseForgotPasswordModal: () => void;
  openAddJobModal: boolean;
  handleOpenAddJobModal: () => void;
  handleCloseAddJobModal: () => void;
  openEditJobModal: boolean;
  handleOpenEditJobModal: () => void;
  handleCloseEditJobModal: () => void;
  openAddNationalityModal: boolean;
  handleOpenAddNationalityModal: () => void;
  handleCloseAddNationalityModal: () => void;
  openEditNationalityModal: boolean;
  handleOpenEditNationalityModal: () => void;
  handleCloseEditNationalityModal: () => void;
  addCompanyImage: File | string;
  setAddCompanyImage: (image: File | string) => void;
  addOwnerImage: File | string;
  setAddOwnerImage: (image: File | string) => void;
}

export type {
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  AllFormiksTypes,
  AllFormsTypes,
  CatchErrorTypes,
  CompaniesOptionsFormTypes,
<<<<<<< HEAD
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
=======
  ForgotPasswordFormikTypes,
  ForgotPasswordFormTypes,
  FormiksTypes,
  FormsContextTypes,
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  FormsTypes,
  LoginFormikTypes,
  LoginFormTypes,
  OwnersOptionsFormikTypes,
  ResetPasswordFormikTypes,
  ResetPasswordFormTypes,
  UsersOptionsFormikTypes,
  UsersOptionsFormTypes,
};

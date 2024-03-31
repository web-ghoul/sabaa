import { FormikProps, useFormik } from "formik";
import {
<<<<<<< HEAD
  AddCompanyInitailValues,
  AddCompanySchema,
} from "../forms/AddCompanyForm/AddCompanySchema";
import {
  AddJobInitailValues,
  AddJobSchema,
} from "../forms/AddJobForm/AddJobSchema";
import {
  AddNationalityInitailValues,
  AddNationalitySchema,
} from "../forms/AddNationalityForm/AddNationalitySchema";
import {
  AddOwnerInitailValues,
  AddOwnerSchema,
} from "../forms/AddOwnerForm/AddOwnerSchema";
import {
  AddUserInitailValues,
  AddUserSchema,
} from "../forms/AddUserForm/AddUserSchema";
import useDeleteSchema from "../forms/DeleteForm/useDeleteSchema";
import useEditCompanySchema from "../forms/EditCompanyForm/useEditCompanySchema";
import useEditJobSchema from "../forms/EditJobForm/useEditJobSchema";
import useEditNationalitySchema from "../forms/EditNationalityForm/useEditNationalitySchema";
import useEditOwnerSchema from "../forms/EditOwnerForm/useEditOwnerSchema";
import useEditUserSchema from "../forms/EditUserForm/useEditUserSchema";
import {
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  ForgotPasswordInitailValues,
  ForgotPasswordSchema,
} from "../forms/ForgotPasswordForm/ForgotPasswordSchema";
import {
  LoginInitailValues,
  LoginSchema,
} from "../forms/LoginForm/LoginSchema";
import {
  ResetPasswordInitailValues,
  ResetPasswordSchema,
} from "../forms/ResetPasswordForm/ResetPasswordSchema";
import {
<<<<<<< HEAD
  AddCompanyFormTypes,
  AddCompanyFormikTypes,
  AddJobFormTypes,
  AddJobFormikTypes,
  AddNationalityFormTypes,
  AddNationalityFormikTypes,
  AddOwnerFormTypes,
  AddOwnerFormikTypes,
  AddUserFormTypes,
  AddUserFormikTypes,
  AllFormiksTypes,
  AllFormsTypes,
  DeleteFormTypes,
  DeleteFormikTypes,
  EditCompanyFormTypes,
  EditCompanyFormikTypes,
  EditJobFormTypes,
  EditJobFormikTypes,
  EditNationalityFormTypes,
  EditNationalityFormikTypes,
  EditOwnerFormTypes,
  EditOwnerFormikTypes,
  EditUserFormTypes,
  EditUserFormikTypes,
=======
  AllFormiksTypes,
  AllFormsTypes,
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  ForgotPasswordFormTypes,
  ForgotPasswordFormikTypes,
  LoginFormTypes,
  LoginFormikTypes,
  ResetPasswordFormTypes,
  ResetPasswordFormikTypes,
} from "../types/forms.types";
import useSubmitFunction from "./useSubmitFunction";

const useSubmitForm = (type: string) => {
  const { handleSubmit } = useSubmitFunction(type);
<<<<<<< HEAD
  const { EditJobInitailValues, EditJobSchema } = useEditJobSchema();
  const { EditNationalityInitailValues, EditNationalitySchema } =
    useEditNationalitySchema();
  const { EditUserInitailValues, EditUserSchema } = useEditUserSchema();
  const { EditOwnerInitailValues, EditOwnerSchema } = useEditOwnerSchema();
  const { DeleteInitailValues, DeleteSchema } = useDeleteSchema();
  const { EditCompanyInitailValues, EditCompanySchema } =
    useEditCompanySchema();
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

  const chosenFormik = (): AllFormiksTypes => {
    switch (type) {
      case "forgotPassword":
        return {
          initialValues: ForgotPasswordInitailValues,
          validationSchema: ForgotPasswordSchema,
          onSubmit: (values: ForgotPasswordFormTypes) => {
            handleSubmit(values);
          },
        } as ForgotPasswordFormikTypes;
      case "resetPassword":
        return {
          initialValues: ResetPasswordInitailValues,
          validationSchema: ResetPasswordSchema,
          onSubmit: (values: ResetPasswordFormTypes) => {
            handleSubmit(values);
          },
        } as ResetPasswordFormikTypes;
      case "login":
        return {
          initialValues: LoginInitailValues,
          validationSchema: LoginSchema,
          onSubmit: (values: LoginFormTypes) => {
            handleSubmit(values);
          },
<<<<<<< HEAD
        } as unknown as LoginFormikTypes;
      case "addJob":
        return {
          initialValues: AddJobInitailValues,
          validationSchema: AddJobSchema,
          onSubmit: (values: AddJobFormTypes) => {
            handleSubmit(values);
          },
        } as AddJobFormikTypes;
      case "editJob":
        return {
          initialValues: EditJobInitailValues,
          validationSchema: EditJobSchema,
          onSubmit: (values: EditJobFormTypes) => {
            handleSubmit(values);
          },
        } as EditJobFormikTypes;
      case "addNationality":
        return {
          initialValues: AddNationalityInitailValues,
          validationSchema: AddNationalitySchema,
          onSubmit: (values: AddNationalityFormTypes) => {
            handleSubmit(values);
          },
        } as AddNationalityFormikTypes;
      case "editNationality":
        return {
          initialValues: EditNationalityInitailValues,
          validationSchema: EditNationalitySchema,
          onSubmit: (values: EditNationalityFormTypes) => {
            handleSubmit(values);
          },
        } as EditNationalityFormikTypes;
      case "addUser":
        return {
          initialValues: AddUserInitailValues,
          validationSchema: AddUserSchema,
          onSubmit: (values: AddUserFormTypes) => {
            handleSubmit(values);
          },
        } as AddUserFormikTypes;
      case "editUser":
        return {
          initialValues: EditUserInitailValues,
          validationSchema: EditUserSchema,
          onSubmit: (values: EditUserFormTypes) => {
            handleSubmit(values);
          },
        } as EditUserFormikTypes;
      case "addOwner":
        return {
          initialValues: AddOwnerInitailValues,
          validationSchema: AddOwnerSchema,
          onSubmit: (values: AddOwnerFormTypes) => {
            handleSubmit(values);
          },
        } as unknown as AddOwnerFormikTypes;
      case "editOwner":
        return {
          initialValues: EditOwnerInitailValues,
          validationSchema: EditOwnerSchema,
          onSubmit: (values: EditOwnerFormTypes) => {
            handleSubmit(values);
          },
        } as unknown as EditOwnerFormikTypes;
      case "addCompany":
        return {
          initialValues: AddCompanyInitailValues,
          validationSchema: AddCompanySchema,
          onSubmit: (values: AddCompanyFormTypes) => {
            handleSubmit(values);
          },
        } as unknown as AddCompanyFormikTypes;
      case "editCompany":
        return {
          initialValues: EditCompanyInitailValues,
          validationSchema: EditCompanySchema,
          onSubmit: (values: EditCompanyFormTypes) => {
            handleSubmit(values);
          },
        } as unknown as EditCompanyFormikTypes;
      default:
        return {
          initialValues: DeleteInitailValues,
          validationSchema: DeleteSchema,
          onSubmit: (values: DeleteFormTypes) => {
            handleSubmit(values);
          },
        } as unknown as DeleteFormikTypes;
=======
        } as LoginFormikTypes;
      default:
        return {
          initialValues: LoginInitailValues,
          validationSchema: LoginSchema,
          onSubmit: (values: LoginFormTypes) => {
            alert(JSON.stringify(values, null, 2));
          },
        } as LoginFormikTypes;
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
    }
  };

  return {
    formik: useFormik<AllFormsTypes>(
      chosenFormik()
    ) as FormikProps<AllFormsTypes>,
  };
};

export default useSubmitForm;

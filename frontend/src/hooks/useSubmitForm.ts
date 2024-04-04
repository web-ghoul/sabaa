import { FormikProps, useFormik } from "formik";
import { useMemo } from "react";
import useCompanySchema from "../forms/CompanyForm/useEditCompanySchema";
import useDeleteSchema from "../forms/DeleteForm/useDeleteSchema";
import {
  ForgotPasswordInitailValues,
  ForgotPasswordSchema,
} from "../forms/ForgotPasswordForm/ForgotPasswordSchema";
import useJobSchema from "../forms/JobForm/useJobSchema";
import {
  LoginInitailValues,
  LoginSchema,
} from "../forms/LoginForm/LoginSchema";
import useNationalitySchema from "../forms/NationalityForm/useEditNationalitySchema";
import useOwnerSchema from "../forms/OwnerForm/useOwnerSchema";
import {
  ResetPasswordInitailValues,
  ResetPasswordSchema,
} from "../forms/ResetPasswordForm/ResetPasswordSchema";
import useUserSchema from "../forms/UserForm/useEditUserSchema";
import {
  AllFormiksTypes,
  AllFormsTypes,
  CompanyFormTypes,
  CompanyFormikTypes,
  DeleteFormTypes,
  DeleteFormikTypes,
  ForgotPasswordFormTypes,
  ForgotPasswordFormikTypes,
  JobFormTypes,
  JobFormikTypes,
  LoginFormTypes,
  LoginFormikTypes,
  NationalityFormTypes,
  NationalityFormikTypes,
  OwnerFormTypes,
  OwnerFormikTypes,
  ResetPasswordFormTypes,
  ResetPasswordFormikTypes,
  UserFormTypes,
  UserFormikTypes,
} from "../types/forms.types";
import useSubmitFunction from "./useSubmitFunction";

const useSubmitForm = (type: string) => {
  const { handleSubmit } = useSubmitFunction(type);
  const { JobInitailValues, JobSchema } = useJobSchema();
  const { NationalityInitailValues, NationalitySchema } =
    useNationalitySchema();
  const { UserInitailValues, UserSchema } = useUserSchema();
  const { OwnerInitailValues, OwnerSchema } = useOwnerSchema();
  const { DeleteInitailValues, DeleteSchema } = useDeleteSchema();
  const { CompanyInitailValues, CompanySchema } = useCompanySchema();

  const chosenFormik = useMemo(
    () => (): AllFormiksTypes => {
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
          } as unknown as LoginFormikTypes;
        case "editJob":
        case "addJob":
          return {
            initialValues: JobInitailValues,
            validationSchema: JobSchema,
            onSubmit: (values: JobFormTypes) => {
              handleSubmit(values);
            },
          } as JobFormikTypes;
        case "editNationality":
        case "addNationality":
          return {
            initialValues: NationalityInitailValues,
            validationSchema: NationalitySchema,
            onSubmit: (values: NationalityFormTypes) => {
              handleSubmit(values);
            },
          } as NationalityFormikTypes;
        case "editUser":
        case "addUser":
          return {
            initialValues: UserInitailValues,
            validationSchema: UserSchema,
            onSubmit: (values: UserFormTypes) => {
              handleSubmit(values);
            },
          } as UserFormikTypes;
        case "editOwner":
        case "addOwner":
          return {
            initialValues: OwnerInitailValues,
            validationSchema: OwnerSchema,
            onSubmit: (values: OwnerFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as OwnerFormikTypes;
        case "addCompany":
        case "editCompany":
          return {
            initialValues: CompanyInitailValues,
            validationSchema: CompanySchema,
            onSubmit: (values: CompanyFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as CompanyFormikTypes;
        default:
          return {
            initialValues: DeleteInitailValues,
            validationSchema: DeleteSchema,
            onSubmit: (values: DeleteFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as DeleteFormikTypes;
      }
    },
    [
      CompanyInitailValues,
      CompanySchema,
      DeleteInitailValues,
      DeleteSchema,
      JobInitailValues,
      JobSchema,
      NationalityInitailValues,
      NationalitySchema,
      OwnerInitailValues,
      OwnerSchema,
      UserInitailValues,
      UserSchema,
      handleSubmit,
      type,
    ]
  );

  return {
    formik: useFormik<AllFormsTypes>(
      chosenFormik()
    ) as FormikProps<AllFormsTypes>,
  };
};

export default useSubmitForm;

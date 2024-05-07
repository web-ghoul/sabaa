import { FormikProps, useFormik } from "formik";
import { useMemo } from "react";
import {
  CompaniesOptionsInitailValues,
  CompaniesOptionsSchema,
} from "../forms/CompaniesOptionsForm/CompaniesOptionsSchema";
import useCompanySchema from "../forms/CompanyForm/useCompanySchema";
import useDeleteSchema from "../forms/DeleteForm/useDeleteSchema";
import {
  ForgotPasswordInitailValues,
  ForgotPasswordSchema,
} from "../forms/ForgotPasswordForm/ForgotPasswordSchema";
import useJobSchema from "../forms/JobForm/useJobSchema";
import {
  JobsOptionsInitailValues,
  JobsOptionsSchema,
} from "../forms/JobsOptionsForm/JobsOptionsSchema";
import useLinkToCompanySchema from "../forms/LinkToCompanyForm/useCompanySchema";
import {
  LoginInitailValues,
  LoginSchema,
} from "../forms/LoginForm/LoginSchema";
import {
  NationalitiesOptionsInitailValues,
  NationalitiesOptionsSchema,
} from "../forms/NationalitiesOptionsForm/NationalitiesOptionsSchema";
import useNationalitySchema from "../forms/NationalityForm/useEditNationalitySchema";
import useOwnerSchema from "../forms/OwnerForm/useOwnerSchema";
import {
  OwnersOptionsInitailValues,
  OwnersOptionsSchema,
} from "../forms/OwnersOptionsForm/OwnersOptionsSchema";
import {
  ResetPasswordInitailValues,
  ResetPasswordSchema,
} from "../forms/ResetPasswordForm/ResetPasswordSchema";
import useUserSchema from "../forms/UserForm/useUserSchema";
import {
  UsersOptionsInitailValues,
  UsersOptionsSchema,
} from "../forms/UsersOptionsForm/UsersOptionsSchema";
import {
  AllFormiksTypes,
  AllFormsTypes,
  CompaniesOptionsFormTypes,
  CompaniesOptionsFormikTypes,
  CompanyFormTypes,
  CompanyFormikTypes,
  DeleteFormTypes,
  DeleteFormikTypes,
  ForgotPasswordFormTypes,
  ForgotPasswordFormikTypes,
  JobFormTypes,
  JobFormikTypes,
  JobsOptionsFormTypes,
  JobsOptionsFormikTypes,
  LinkToCompanyFormTypes,
  LinkToCompanyFormikTypes,
  LoginFormTypes,
  LoginFormikTypes,
  NationalitiesOptionsFormTypes,
  NationalitiesOptionsFormikTypes,
  NationalityFormTypes,
  NationalityFormikTypes,
  OwnerFormTypes,
  OwnerFormikTypes,
  OwnersOptionsFormTypes,
  OwnersOptionsFormikTypes,
  ResetPasswordFormTypes,
  ResetPasswordFormikTypes,
  UserFormTypes,
  UserFormikTypes,
  UsersOptionsFormTypes,
  UsersOptionsFormikTypes,
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
  const { LinkToCompanyInitailValues, LinkToCompanySchema } =
    useLinkToCompanySchema();

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
        case "jobsOptions":
          return {
            initialValues: JobsOptionsInitailValues,
            validationSchema: JobsOptionsSchema,
            onSubmit: (values: JobsOptionsFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as JobsOptionsFormikTypes;
        case "editNationality":
        case "addNationality":
          return {
            initialValues: NationalityInitailValues,
            validationSchema: NationalitySchema,
            onSubmit: (values: NationalityFormTypes) => {
              handleSubmit(values);
            },
          } as NationalityFormikTypes;
        case "nationalitiesOptions":
          return {
            initialValues: NationalitiesOptionsInitailValues,
            validationSchema: NationalitiesOptionsSchema,
            onSubmit: (values: NationalitiesOptionsFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as NationalitiesOptionsFormikTypes;
        case "editUser":
        case "addUser":
          return {
            initialValues: UserInitailValues,
            validationSchema: UserSchema,
            onSubmit: (values: UserFormTypes) => {
              handleSubmit(values);
            },
          } as UserFormikTypes;
        case "usersOptions":
          return {
            initialValues: UsersOptionsInitailValues,
            validationSchema: UsersOptionsSchema,
            onSubmit: (values: UsersOptionsFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as UsersOptionsFormikTypes;
        case "editOwner":
        case "addOwner":
          return {
            initialValues: OwnerInitailValues,
            validationSchema: OwnerSchema,
            onSubmit: (values: OwnerFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as OwnerFormikTypes;
        case "ownersOptions":
          return {
            initialValues: OwnersOptionsInitailValues,
            validationSchema: OwnersOptionsSchema,
            onSubmit: (values: OwnersOptionsFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as OwnersOptionsFormikTypes;
        case "addCompany":
        case "editCompany":
          return {
            initialValues: CompanyInitailValues,
            validationSchema: CompanySchema,
            onSubmit: (values: CompanyFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as CompanyFormikTypes;
        case "companiesOptions":
          return {
            initialValues: CompaniesOptionsInitailValues,
            validationSchema: CompaniesOptionsSchema,
            onSubmit: (values: CompaniesOptionsFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as CompaniesOptionsFormikTypes;
        case "linkOwner":
        case "linkPRO":
          return {
            initialValues: LinkToCompanyInitailValues,
            validationSchema: LinkToCompanySchema,
            onSubmit: (values: LinkToCompanyFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as LinkToCompanyFormikTypes;
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
      LinkToCompanyInitailValues,
      LinkToCompanySchema,
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

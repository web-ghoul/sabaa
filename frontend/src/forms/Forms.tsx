import { Box } from "@mui/material";
import { FormikProps } from "formik";
import useSubmitForm from "../hooks/useSubmitForm";
import { AllFormiksTypes, FormsTypes } from "../types/forms.types";
import CompaniesOptionsForm from "./CompaniesOptionsForm/CompaniesOptionsForm";
import CompanyForm from "./CompanyForm/CompanyForm";
import CreateCompaniesSheetForm from "./CreateCompaniesSheetForm/CreateCompaniesSheetForm";
import CreateJobsSheetForm from "./CreateJobsSheetForm/CreateJobsSheetForm";
import CreateNationalitiesSheetForm from "./CreateNationalitiesSheetForm/CreateNationalitiesSheetForm";
import CreateOwnersSheetForm from "./CreateOwnersSheetForm/CreateOwnersSheetForm";
import DeleteForm from "./DeleteForm/DeleteForm";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import JobForm from "./JobForm/JobForm";
import JobsOptionsForm from "./JobsOptionsForm/JobsOptionsForm";
import LinkToCompanyForm from "./LinkToCompanyForm/LinkToCompanyForm";
import LoginForm from "./LoginForm/LoginForm";
import NationalitiesOptionsForm from "./NationalitiesOptionsForm/NationalitiesOptionsForm";
import NationalityForm from "./NationalityForm/NationalityForm";
import OwnerForm from "./OwnerForm/OwnerForm";
import OwnersOptionsForm from "./OwnersOptionsForm/OwnersOptionsForm";
import ProForm from "./ProForm/ProForm";
import ProsOptionsForm from "./ProsOptionsForm/ProsOptionsForm";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";
import UserForm from "./UserForm/UserForm";
import UsersOptionsForm from "./UsersOptionsForm/UsersOptionsForm";

const Forms = ({ type, index }: FormsTypes) => {
  const { formik } = useSubmitForm(type);

  return (
    <Box component={"form"} onSubmit={formik.handleSubmit}>
      {type === "createJobsSheet" && <CreateJobsSheetForm index={index || 0} />}
      {type === "createCompaniesSheet" && (
        <CreateCompaniesSheetForm index={index || 0} />
      )}
      {type === "createNationalitiesSheet" && (
        <CreateNationalitiesSheetForm index={index || 0} />
      )}
      {type === "createOwnersSheet" && (
        <CreateOwnersSheetForm index={index || 0} />
      )}
      {(type === "editNationality" || type === "addNationality") && (
        <NationalityForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {(type === "editJob" || type === "addJob") && (
        <JobForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {(type === "addUser" || type === "editUser") && (
        <UserForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {(type === "addOwner" || type === "editOwner") && (
        <OwnerForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {(type === "addPro" || type === "editPro") && (
        <ProForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {(type === "addCompany" || type === "editCompany") && (
        <CompanyForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {type === "jobsOptions" && (
        <JobsOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "nationalitiesOptions" && (
        <NationalitiesOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "companiesOptions" && (
        <CompaniesOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {(type === "linkOwner" || type === "linkPRO") && (
        <LinkToCompanyForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "usersOptions" && (
        <UsersOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "ownersOptions" && (
        <OwnersOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "prosOptions" && (
        <ProsOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "delete" && <DeleteForm />}
      {type === "login" && (
        <LoginForm formik={formik as unknown as FormikProps<AllFormiksTypes>} />
      )}
      {type === "resetPassword" && (
        <ResetPasswordForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "forgotPassword" && (
        <ForgotPasswordForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
    </Box>
  );
};

export default Forms;

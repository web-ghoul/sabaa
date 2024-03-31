import { Box } from "@mui/material";
import { FormikProps } from "formik";
import useSubmitForm from "../hooks/useSubmitForm";
import { AllFormiksTypes, FormsTypes } from "../types/forms.types";
import AddCompanyForm from "./AddCompanyForm/AddCompanyForm";
import AddJobForm from "./AddJobForm/AddJobForm";
import AddNationalityForm from "./AddNationalityForm/AddNationalityForm";
import AddOwnerForm from "./AddOwnerForm/AddOwnerForm";
import AddUserForm from "./AddUserForm/AddUserForm";
import CompaniesOptionsForm from "./CompaniesOptionsForm/CompaniesOptionsForm";
<<<<<<< HEAD
import CreateCompaniesSheetForm from "./CreateCompaniesSheetForm/CreateCompaniesSheetForm";
import CreateJobsSheetForm from "./CreateJobsSheetForm/CreateJobsSheetForm";
import CreateNationalitiesSheetForm from "./CreateNationalitiesSheetForm/CreateNationalitiesSheetForm";
import CreateOwnersSheetForm from "./CreateOwnersSheetForm/CreateOwnersSheetForm";
import DeleteForm from "./DeleteForm/DeleteForm";
import EditCompanyForm from "./EditCompanyForm/EditCompanyForm";
import EditJobForm from "./EditJobForm/EditJobForm";
import EditNationalityForm from "./EditNationalityForm/EditNationalityForm";
import EditOwnerForm from "./EditOwnerForm/EditOwnerForm";
import EditUserForm from "./EditUserForm/EditUserForm";
=======
import EditJobForm from "./EditJobForm/EditJobForm";
import EditNationalityForm from "./EditNationalityForm/EditNationalityForm";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import JobsOptionsForm from "./JobsOptionsForm/JobsOptionsForm";
import LoginForm from "./LoginForm/LoginForm";
import NationalitiesOptionsForm from "./NationalitiesOptionsForm/NationalitiesOptionsForm";
import OwnersOptionsForm from "./OwnersOptionsForm/OwnersOptionsForm";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";
import UsersOptionsForm from "./UsersOptionsForm/UsersOptionsForm";

<<<<<<< HEAD
const Forms = ({ type, index }: FormsTypes) => {
=======
const Forms = ({ type }: FormsTypes) => {
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  const { formik } = useSubmitForm(type);

  return (
    <Box component={"form"} onSubmit={formik.handleSubmit}>
<<<<<<< HEAD
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
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      {type === "editNationality" && (
        <EditNationalityForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "editJob" && (
        <EditJobForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "addNationality" && (
        <AddNationalityForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "addJob" && (
        <AddJobForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "addUser" && (
        <AddUserForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
<<<<<<< HEAD
      {type === "editUser" && (
        <EditUserForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      {type === "addOwner" && (
        <AddOwnerForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
<<<<<<< HEAD
      {type === "editOwner" && (
        <EditOwnerForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      {type === "addCompany" && (
        <AddCompanyForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
<<<<<<< HEAD
      {type === "editCompany" && (
        <EditCompanyForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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
<<<<<<< HEAD
      {type === "delete" && <DeleteForm />}
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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

import { Box } from "@mui/material";
import { FormikProps } from "formik";
import useSubmitForm from "../hooks/useSubmitForm";
import { AllFormiksTypes, FormsTypes } from "../types/forms.types";
import ActivitiesOptionsForm from "./ActivitiesOptionsForm/ActivitiesOptionsForm";
import CompaniesOptionsForm from "./CompaniesOptionsForm/CompaniesOptionsForm";
import CompanyForm from "./CompanyForm/CompanyForm";
import ConvertCustomerForm from "./ConvertCustomerForm/ConvertCustomerForm";
import CreateCompaniesSheetForm from "./CreateCompaniesSheetForm/CreateCompaniesSheetForm";
import CreateCustomersSheetForm from "./CreateCustomersSheetForm/CreateCustomersSheetForm";
import CreateEmployeesSheetForm from "./CreateEmployeesSheetForm/CreateEmployeesSheetForm";
import CreateJobsSheetForm from "./CreateJobsSheetForm/CreateJobsSheetForm";
import CreateNationalitiesSheetForm from "./CreateNationalitiesSheetForm/CreateNationalitiesSheetForm";
import CreateOwnersSheetForm from "./CreateOwnersSheetForm/CreateOwnersSheetForm";
import CreateProsSheetForm from "./CreateProsSheetForm/CreateProsSheetForm";
import CustomerForm from "./CustomerForm/CustomerForm";
import CustomersOptionsForm from "./CustomersOptionsForm/CustomersOptionsForm";
import DeleteForm from "./DeleteForm/DeleteForm";
import DownloadExcelForm from "./DownloadExcelForm/DownloadExcelForm";
import EChannelForm from "./EChannelForm/EChannelForm";
import EChannelsOptionsForm from "./EChannelsOptionsForm/EChannelsOptionsForm";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
import EmployeesOptionsForm from "./EmployeesOptionsForm/EmployeesOptionsForm";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import JobForm from "./JobForm/JobForm";
import JobsOptionsForm from "./JobsOptionsForm/JobsOptionsForm";
import LinkToCompanyForm from "./LinkToCompanyForm/LinkToCompanyForm";
import LoginForm from "./LoginForm/LoginForm";
import NationalitiesOptionsForm from "./NationalitiesOptionsForm/NationalitiesOptionsForm";
import NationalityForm from "./NationalityForm/NationalityForm";
import OTPForm from "./OTPForm/OTPForm";
import OwnerForm from "./OwnerForm/OwnerForm";
import OwnersOptionsForm from "./OwnersOptionsForm/OwnersOptionsForm";
import ProForm from "./ProForm/ProForm";
import ProsOptionsForm from "./ProsOptionsForm/ProsOptionsForm";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";
import SponsorForm from "./SponsorForm/SponsorForm";
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

      {/* User */}
      {type === "usersOptions" && (
        <UsersOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {(type === "addUser" || type === "editUser") && (
        <UserForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {/* User */}

      {/* Owner */}
      {type === "ownersOptions" && (
        <OwnersOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {(type === "addOwner" || type === "editOwner") && (
        <OwnerForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {type === "createOwnersSheet" && (
        <CreateOwnersSheetForm index={index || 0} />
      )}
      {/* Owner */}

      {/* Pro */}
      {type === "prosOptions" && (
        <ProsOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {(type === "addPro" || type === "editPro") && (
        <ProForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {type === "createProsSheet" && <CreateProsSheetForm index={index || 0} />}
      {/* Pro */}

      {/* Employee */}
      {type === "employeesOptions" && (
        <EmployeesOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {(type === "addEmployee" || type === "editEmployee") && (
        <EmployeeForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {type === "createEmployeesSheet" && (
        <CreateEmployeesSheetForm index={index || 0} />
      )}
      {/* Employee */}

      {/* Customer */}
      {(type === "addCustomer" || type === "editCustomer") && (
        <CustomerForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {type === "customersOptions" && (
        <CustomersOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "convertCustomer" && (
        <ConvertCustomerForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "createCustomersSheet" && (
        <CreateCustomersSheetForm index={index || 0} />
      )}
      {/* Customer */}

      {/* Sponsor */}
      {(type === "addSponsor" || type === "editSponsor") && (
        <SponsorForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {/* Sponsor */}

      {/* Company */}
      {(type === "addCompany" || type === "editCompany") && (
        <CompanyForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {type === "companiesOptions" && (
        <CompaniesOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {/* Company */}

      {/* Job */}
      {(type === "editJob" || type === "addJob") && (
        <JobForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {type === "jobsOptions" && (
        <JobsOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {/* Job */}

      {/* Nationaliy */}
      {(type === "editNationality" || type === "addNationality") && (
        <NationalityForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {type === "nationalitiesOptions" && (
        <NationalitiesOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {type === "createNationalitiesSheet" && (
        <CreateNationalitiesSheetForm index={index || 0} />
      )}
      {/* Nationaliy */}

      {/* Activity */}
      {type === "activitiesOptions" && (
        <ActivitiesOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {/* Activity */}

      {/* Link Company */}
      {(type === "linkOwner" || type === "linkPro") && (
        <LinkToCompanyForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {/* Link Company */}

      {/* E-Channel */}
      {(type === "addEChannel" || type === "editEChannel") && (
        <EChannelForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
          type={type}
        />
      )}
      {type === "eChannelsOptions" && (
        <EChannelsOptionsForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
      {/* E-Channel */}

      {/* Delete */}
      {type === "delete" && <DeleteForm />}
      {/* Delete */}

      {/* Authentication */}
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
      {type === "otp" && (
        <OTPForm formik={formik as unknown as FormikProps<AllFormiksTypes>} />
      )}
      {/* Authentication */}

      {type === "downloadExcel" && (
        <DownloadExcelForm
          formik={formik as unknown as FormikProps<AllFormiksTypes>}
        />
      )}
    </Box>
  );
};

export default Forms;

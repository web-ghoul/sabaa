import { Box } from "@mui/material";
import useSubmitForm from "../hooks/useSubmitForm";
import { FormsTypes } from "../types/forms.types";
import ActivitiesOptionsForm from "./ActivitiesOptionsForm/ActivitiesOptionsForm";
import AlertForm from "./AlertForm/AlertForm";
import CompaniesOptionsForm from "./CompaniesOptionsForm/CompaniesOptionsForm";
import CompanyForm from "./CompanyForm/CompanyForm";
import CompanyInfoForm from "./CompanyInfoForm/CompanyInfoForm";
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
import NatwasalForm from "./NatwasalForm/NatwasalForm";
import NatwasalsOptionsForm from "./NatwasalsOptionsForm/NatwasalsOptionsForm";
import OptionForm from "./OptionForm/OptionForm";
import OTPForm from "./OTPForm/OTPForm";
import OwnerForm from "./OwnerForm/OwnerForm";
import OwnersOptionsForm from "./OwnersOptionsForm/OwnersOptionsForm";
import ProForm from "./ProForm/ProForm";
import ProsOptionsForm from "./ProsOptionsForm/ProsOptionsForm";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";
import RoleForm from "./RoleForm/RoleForm";
import SponsorForm from "./SponsorForm/SponsorForm";
import TasheelForm from "./TasheelForm/TasheelForm";
import TasheelsOptionsForm from "./TasheelsOptionsForm/TasheelsOptionsForm";
import ApprovedTransactionForm from "./TransactionsForm/ApprovedTransactionForm";
import TransactionForm from "./TransactionsForm/TransactionForm";
import TransactionsOptionsForm from "./TransactionsOptionsForm/TransactionsOptionsForm";
import UserForm from "./UserForm/UserForm";
import UsersOptionsForm from "./UsersOptionsForm/UsersOptionsForm";

const Forms = ({ type, index, tType }: FormsTypes) => {
  const { register, handleSubmitForm, errors, setValue, getValues } =
    useSubmitForm(type);

  return (
    <Box component={"form"} onSubmit={handleSubmitForm}>
      {type === "createJobsSheet" && <CreateJobsSheetForm index={index || 0} />}
      {type === "createCompaniesSheet" && (
        <CreateCompaniesSheetForm index={index || 0} />
      )}

      {/* User */}
      {type === "usersOptions" && (
        <UsersOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />
      )}
      {(type === "addUser" || type === "editUser") && (
        <UserForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* User */}

      {/* Role */}
      {(type === "addRole" || type === "editRole") && (
        <RoleForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Role */}

      {/* Transaction */}
      {type === "transactionsOptions" && (
        <TransactionsOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          tType={tType}
        />
      )}
      {(type === "addTransaction" || type === "editTransaction") && (
        <TransactionForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "approvedTransaction" && (
        <ApprovedTransactionForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "newLCTransaction" && (
        <ApprovedTransactionForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "renewLCTransaction" && (
        <ApprovedTransactionForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Transaction */}

      {/* Owner */}
      {type === "ownersOptions" && (
        <OwnersOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {(type === "addOwner" || type === "editOwner") && (
        <OwnerForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
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
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {(type === "addPro" || type === "editPro") && (
        <ProForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "createProsSheet" && <CreateProsSheetForm index={index || 0} />}
      {/* Pro */}

      {/* Employee */}
      {type === "employeesOptions" && (
        <EmployeesOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {(type === "addEmployee" || type === "editEmployee") && (
        <EmployeeForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
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
          setValue={setValue}
          register={register}
          getValues={getValues}
          errors={errors}
          type={type}
        />
      )}
      {type === "customersOptions" && (
        <CustomersOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "convertCustomer" && (
        <ConvertCustomerForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "createCustomersSheet" && (
        <CreateCustomersSheetForm index={index || 0} />
      )}
      {/* Customer */}

      {/* Sponsor */}
      {(type === "addSponsor" || type === "editSponsor") && (
        <SponsorForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Sponsor */}

      {/* Company */}
      {(type === "addCompany" || type === "editCompany") && (
        <CompanyForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "companiesOptions" && (
        <CompaniesOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Company */}

      {/* Job */}
      {(type === "editJob" || type === "addJob") && (
        <JobForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "jobsOptions" && (
        <JobsOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Job */}

      {/* Selectors */}
      {(type === "editOption" || type === "addOption") && (
        <OptionForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Selectors */}

      {/* Nationaliy */}
      {(type === "editNationality" || type === "addNationality") && (
        <NationalityForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "nationalitiesOptions" && (
        <NationalitiesOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "createNationalitiesSheet" && (
        <CreateNationalitiesSheetForm index={index || 0} />
      )}
      {/* Nationaliy */}

      {/* Activity */}
      {type === "activitiesOptions" && (
        <ActivitiesOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Activity */}

      {/* Edit Alerts */}
      {type === "editAlerts" && (
        <AlertForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Edit Alerts */}

      {/* Link Company */}
      {(type === "linkOwner" || type === "linkPro") && (
        <LinkToCompanyForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Link Company */}

      {/* E-Channel */}
      {(type === "addEChannel" || type === "editEChannel") && (
        <EChannelForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "eChannelsOptions" && (
        <EChannelsOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* E-Channel */}

      {/* Tasheel */}
      {(type === "addTasheel" || type === "editTasheel") && (
        <TasheelForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "tasheelsOptions" && (
        <TasheelsOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Tasheel */}

      {/* Natwasal */}
      {(type === "addNatwasal" || type === "editNatwasal") && (
        <NatwasalForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "natwasalsOptions" && (
        <NatwasalsOptionsForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Natwasal */}

      {/* Delete */}
      {type === "delete" && <DeleteForm />}
      {/* Delete */}

      {/* Authentication */}
      {type === "login" && (
        <LoginForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "resetPassword" && (
        <ResetPasswordForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "forgotPassword" && (
        <ForgotPasswordForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === "otp" && (
        <OTPForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Authentication */}

      {type === "downloadExcel" && (
        <DownloadExcelForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}

      {/*  Company Info  */}
      {type === "editCompanyInfo" && (
        <CompanyInfoForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Company Info */}
    </Box>
  );
};

export default Forms;

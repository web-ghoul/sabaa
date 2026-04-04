import { Box, Skeleton } from "@mui/material";
import { lazy, Suspense } from "react";
import useSubmitForm from "../hooks/useSubmitForm";
import { FormsTypes } from "../types/forms.types";

// Lazy load all form components
const ActivitiesOptionsForm = lazy(
  () => import("./ActivitiesOptionsForm/ActivitiesOptionsForm"),
);
const AlertForm = lazy(() => import("./AlertForm/AlertForm"));
const CompaniesOptionsForm = lazy(
  () => import("./CompaniesOptionsForm/CompaniesOptionsForm"),
);
const CompanyForm = lazy(() => import("./CompanyForm/CompanyForm"));
const CompanyInfoForm = lazy(() => import("./CompanyInfoForm/CompanyInfoForm"));
const ConvertCustomerForm = lazy(
  () => import("./ConvertCustomerForm/ConvertCustomerForm"),
);
const CreateCompaniesSheetForm = lazy(
  () => import("./CreateCompaniesSheetForm/CreateCompaniesSheetForm"),
);
const CreateCustomersSheetForm = lazy(
  () => import("./CreateCustomersSheetForm/CreateCustomersSheetForm"),
);
const CreateEmployeesSheetForm = lazy(
  () => import("./CreateEmployeesSheetForm/CreateEmployeesSheetForm"),
);
const CreateJobsSheetForm = lazy(
  () => import("./CreateJobsSheetForm/CreateJobsSheetForm"),
);
const CreateNationalitiesSheetForm = lazy(
  () => import("./CreateNationalitiesSheetForm/CreateNationalitiesSheetForm"),
);
const CreateOwnersSheetForm = lazy(
  () => import("./CreateOwnersSheetForm/CreateOwnersSheetForm"),
);
const CreateProsSheetForm = lazy(
  () => import("./CreateProsSheetForm/CreateProsSheetForm"),
);
const CustomerForm = lazy(() => import("./CustomerForm/CustomerForm"));
const CustomersOptionsForm = lazy(
  () => import("./CustomersOptionsForm/CustomersOptionsForm"),
);
const DeleteForm = lazy(() => import("./DeleteForm/DeleteForm"));
const DownloadExcelForm = lazy(
  () => import("./DownloadExcelForm/DownloadExcelForm"),
);
const EChannelForm = lazy(() => import("./EChannelForm/EChannelForm"));
const EChannelsOptionsForm = lazy(
  () => import("./EChannelsOptionsForm/EChannelsOptionsForm"),
);
const EmployeeForm = lazy(() => import("./EmployeeForm/EmployeeForm"));
const EmployeesOptionsForm = lazy(
  () => import("./EmployeesOptionsForm/EmployeesOptionsForm"),
);
const ForgotPasswordForm = lazy(
  () => import("./ForgotPasswordForm/ForgotPasswordForm"),
);
const JobForm = lazy(() => import("./JobForm/JobForm"));
const JobsOptionsForm = lazy(() => import("./JobsOptionsForm/JobsOptionsForm"));
const LinkToCompanyForm = lazy(
  () => import("./LinkToCompanyForm/LinkToCompanyForm"),
);
const LoginForm = lazy(() => import("./LoginForm/LoginForm"));
const NationalitiesOptionsForm = lazy(
  () => import("./NationalitiesOptionsForm/NationalitiesOptionsForm"),
);
const NationalityForm = lazy(() => import("./NationalityForm/NationalityForm"));
const NatwasalsOptionsForm = lazy(
  () => import("./NatwasalsOptionsForm/NatwasalsOptionsForm"),
);
const NatwasalForm = lazy(() => import("./NatwasalForm/NatwasalForm"));
const OptionForm = lazy(() => import("./OptionForm/OptionForm"));
const OTPForm = lazy(() => import("./OTPForm/OTPForm"));
const OwnerForm = lazy(() => import("./OwnerForm/OwnerForm"));
const OwnersOptionsForm = lazy(
  () => import("./OwnersOptionsForm/OwnersOptionsForm"),
);
const ProForm = lazy(() => import("./ProForm/ProForm"));
const ProsOptionsForm = lazy(() => import("./ProsOptionsForm/ProsOptionsForm"));
const ResetPasswordForm = lazy(
  () => import("./ResetPasswordForm/ResetPasswordForm"),
);
const RoleForm = lazy(() => import("./RoleForm/RoleForm"));
const SponsorForm = lazy(() => import("./SponsorForm/SponsorForm"));
const TasheelForm = lazy(() => import("./TasheelForm/TasheelForm"));
const TasheelsOptionsForm = lazy(
  () => import("./TasheelsOptionsForm/TasheelsOptionsForm"),
);
const ApprovedTransactionForm = lazy(
  () => import("./TransactionsForm/ApprovedTransactionForm"),
);
const NewLCTransactionForm = lazy(
  () => import("./TransactionsForm/NewLCTransactionForm"),
);
const RenewLCTransactionForm = lazy(
  () => import("./TransactionsForm/RenewTransactionForm"),
);
const TransactionForm = lazy(
  () => import("./TransactionsForm/TransactionForm"),
);
const TransactionsOptionsForm = lazy(
  () => import("./TransactionsOptionsForm/TransactionsOptionsForm"),
);
const UserForm = lazy(() => import("./UserForm/UserForm"));
const UsersOptionsForm = lazy(
  () => import("./UsersOptionsForm/UsersOptionsForm"),
);

const FormSkeleton = () => (
  <Box className="grid gap-4 p-4">
    <Skeleton variant="text" width="60%" height={40} />
    <Skeleton variant="rounded" height={56} />
    <Skeleton variant="text" width="40%" height={30} />
    <Skeleton variant="rounded" height={56} />
    <Skeleton variant="rounded" height={56} />
    <Box className="flex justify-end gap-2 mt-4">
      <Skeleton variant="rounded" width={100} height={40} />
      <Skeleton variant="rounded" width={120} height={40} />
    </Box>
  </Box>
);

const Forms = ({ type, index, tType }: FormsTypes) => {
  const { register, handleSubmitForm, errors, setValue, getValues } =
    useSubmitForm(type);

  return (
    <Box component={"form"} onSubmit={handleSubmitForm}>
      <Suspense fallback={<FormSkeleton />}>
        {type === "createJobsSheet" && (
          <CreateJobsSheetForm index={index || 0} />
        )}
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
        {(type === "newLCTransaction" || type === "editNewLCTransaction") && (
          <NewLCTransactionForm
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
            type={type}
          />
        )}
        {(type === "renewLCTransaction" ||
          type === "editRenewLCTransaction") && (
          <RenewLCTransactionForm
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
        {type === "createProsSheet" && (
          <CreateProsSheetForm index={index || 0} />
        )}
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
      </Suspense>
    </Box>
  );
};

export default Forms;

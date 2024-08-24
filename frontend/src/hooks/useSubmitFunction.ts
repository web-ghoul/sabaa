import useCompanySubmit from "../forms/CompanyForm/useCompanySubmit";
import useCompanyInfoSubmit from "../forms/CompanyInfoForm/useCompanyInfoSubmit";
import useConvertCustomerSubmit from "../forms/ConvertCustomerForm/useConvertCustomerSubmit";
import useCreateCompaniesSheetSubmit from "../forms/CreateCompaniesSheetForm/useCreateCompaniesSheetSubmit";
import useCreateCustomersSheetSubmit from "../forms/CreateCustomersSheetForm/useCreateCustomersSheetSubmit";
import useCreateEmployeesSheetSubmit from "../forms/CreateEmployeesSheetForm/useCreateEmployeesSheetSubmit";
import useCreateJobsSheetSubmit from "../forms/CreateJobsSheetForm/useCreateJobsSheetSubmit";
import useCreateNationalitiesSheetSubmit from "../forms/CreateNationalitiesSheetForm/useCreateNationalitiesSheetSubmit";
import useCreateOwnersSheetSubmit from "../forms/CreateOwnersSheetForm/useCreateOwnersSheetSubmit";
import useCreateProsSheetSubmit from "../forms/CreateProsSheetForm/useCreateProsSheetSubmit";
import useCustomerSubmit from "../forms/CustomerForm/useCustomerSubmit";
import useDeleteSubmit from "../forms/DeleteForm/useDeleteSubmit";
import useDownloadExcelSubmit from "../forms/DownloadExcelForm/useDownloadExcelSubmit";
import useEChannelSubmit from "../forms/EChannelForm/useEChannelSubmit";
import useEmployeeSubmit from "../forms/EmployeeForm/useEmployeeSubmit";
import useForgotPasswordSubmit from "../forms/ForgotPasswordForm/useForgotPasswordSubmit";
import useJobSubmit from "../forms/JobForm/useJobSubmit";
import useLinkToCompanySubmit from "../forms/LinkToCompanyForm/useLinkToCompanySubmit";
import useLoginSubmit from "../forms/LoginForm/useLoginSubmit";
import useNationalitySubmit from "../forms/NationalityForm/useNationalitySubmit";
import useNatwasalSubmit from "../forms/NatwasalForm/useNatwasalSubmit";
import useOptionSubmit from "../forms/OptionForm/useOptionSubmit";
import useOTPSubmit from "../forms/OTPForm/useOTPSubmit";
import useOwnerSubmit from "../forms/OwnerForm/useOwnerSubmit";
import useProSubmit from "../forms/ProForm/useProSubmit";
import useResetPasswordSubmit from "../forms/ResetPasswordForm/useResetPasswordSubmit";
import useRoleSubmit from "../forms/RoleForm/useRoleSubmit";
import useSponsorSubmit from "../forms/SponsorForm/useSponsorSubmit";
import useTasheelSubmit from "../forms/TasheelForm/useTasheelSubmit";
import useTransactionSubmit from "../forms/TransactionsForm/useTransactionSubmit";
import useUserSubmit from "../forms/UserForm/useUserSubmit";
import {
  AllFormsTypes,
  CompanyFormTypes,
  CompanyInfoFormTypes,
  ConvertCustomerFormTypes,
  CustomerFormTypes,
  DownloadExcelFormTypes,
  EChannelFormTypes,
  EmployeeFormTypes,
  ForgotPasswordFormTypes,
  JobFormTypes,
  LinkToCompanyFormTypes,
  LoginFormTypes,
  NationalityFormTypes,
  NatwasalFormTypes,
  OptionFormTypes,
  OTPFormTypes,
  OwnerFormTypes,
  ProFormTypes,
  ResetPasswordFormTypes,
  RoleFormTypes,
  SponsorFormTypes,
  TasheelFormTypes,
  TransactionFormTypes,
  UserFormTypes,
} from "../types/forms.types";

const useSubmitFunction = (type: string) => {
  const { login } = useLoginSubmit();
  const { forgotPassword } = useForgotPasswordSubmit();
  const { resetPassword } = useResetPasswordSubmit();
  const { OTP } = useOTPSubmit();
  const { editUser, addUser } = useUserSubmit();
  const { editCustomer, addCustomer } = useCustomerSubmit();
  const { editPro, addPro } = useProSubmit();
  const { editOwner, addOwner } = useOwnerSubmit();
  const { editJob, addJob } = useJobSubmit();
  const { editNationality, addNationality } = useNationalitySubmit();
  const { editCompany, addCompany } = useCompanySubmit();
  const { editEmployee, addEmployee } = useEmployeeSubmit();
  const { editSponsor, addSponsor } = useSponsorSubmit();
  const { editTasheel, addTasheel } = useTasheelSubmit();
  const { editNatwasal, addNatwasal } = useNatwasalSubmit();
  const { editEChannel, addEChannel } = useEChannelSubmit();
  const { linkToCompany } = useLinkToCompanySubmit();
  const { handleDelete } = useDeleteSubmit();
  const { createCompaniesSheet } = useCreateCompaniesSheetSubmit();
  const { createJobsSheet } = useCreateJobsSheetSubmit();
  const { createNationalitiesSheet } = useCreateNationalitiesSheetSubmit();
  const { createOwnersSheet } = useCreateOwnersSheetSubmit();
  const { createProsSheet } = useCreateProsSheetSubmit();
  const { createCustomersSheet } = useCreateCustomersSheetSubmit();
  const { createEmployeesSheet } = useCreateEmployeesSheetSubmit();
  const { convertCustomer } = useConvertCustomerSubmit();
  const { handleDownloadExcelSubmit } = useDownloadExcelSubmit();
  const { addWorkPermit, editWorkPermit, newLC, renewLC } =
    useTransactionSubmit();
  const { addRole, editRole } = useRoleSubmit();
  const { editCompanyInfo } = useCompanyInfoSubmit();
  const { addOption, editOption } = useOptionSubmit();

  const submitFunction = (values: AllFormsTypes | unknown) => {
    switch (type) {
      case "forgotPassword":
        forgotPassword(values as ForgotPasswordFormTypes);
        break;
      case "otp":
        OTP(values as OTPFormTypes);
        break;
      case "resetPassword":
        resetPassword(values as ResetPasswordFormTypes);
        break;
      case "login":
        login(values as LoginFormTypes);
        break;
      case "addJob":
        addJob(values as JobFormTypes);
        break;
      case "editJob":
        editJob(values as JobFormTypes);
        break;
      case "addRole":
        addRole(values as RoleFormTypes);
        break;
      case "editRole":
        editRole(values as RoleFormTypes);
        break;
      case "addOption":
        addOption(values as OptionFormTypes);
        break;
      case "editOption":
        editOption(values as OptionFormTypes);
        break;
      case "createJobsSheet":
        createJobsSheet(values as unknown);
        break;
      case "addNationality":
        addNationality(values as NationalityFormTypes);
        break;
      case "editNationality":
        editNationality(values as NationalityFormTypes);
        break;
      case "createNationalitiesSheet":
        createNationalitiesSheet(values as unknown);
        break;
      case "addUser":
        addUser(values as UserFormTypes);
        break;
      case "editUser":
        editUser(values as UserFormTypes);
        break;
      case "addOwner":
        addOwner(values as OwnerFormTypes);
        break;
      case "editOwner":
        editOwner(values as OwnerFormTypes);
        break;
      case "createOwnersSheet":
        createOwnersSheet(values as unknown);
        break;
      case "addPro":
        addPro(values as ProFormTypes);
        break;
      case "editPro":
        editPro(values as ProFormTypes);
        break;
      case "createProsSheet":
        createProsSheet(values as unknown);
        break;
      case "addEmployee":
        addEmployee(values as EmployeeFormTypes);
        break;
      case "editEmployee":
        editEmployee(values as EmployeeFormTypes);
        break;
      case "createEmployeesSheet":
        createEmployeesSheet(values as unknown);
        break;
      case "addCustomer":
        addCustomer(values as CustomerFormTypes);
        break;
      case "editCustomer":
        editCustomer(values as CustomerFormTypes);
        break;
      case "createCustomersSheet":
        createCustomersSheet(values as unknown);
        break;
      case "convertCustomer":
        convertCustomer(values as ConvertCustomerFormTypes);
        break;
      case "addSponsor":
        addSponsor(values as SponsorFormTypes);
        break;
      case "editSponsor":
        editSponsor(values as SponsorFormTypes);
        break;
      case "addCompany":
        addCompany(values as CompanyFormTypes);
        break;
      case "editCompany":
        editCompany(values as CompanyFormTypes);
        break;
      case "linkPro":
      case "linkOwner":
        linkToCompany(values as LinkToCompanyFormTypes);
        break;
      case "createCompaniesSheet":
        createCompaniesSheet(values as unknown);
        break;
      case "addEChannel":
        addEChannel(values as EChannelFormTypes);
        break;
      case "editEChannel":
        editEChannel(values as EChannelFormTypes);
        break;
      case "addTasheel":
        addTasheel(values as TasheelFormTypes);
        break;
      case "editTasheel":
        editTasheel(values as TasheelFormTypes);
        break;
      case "addNatwasal":
        addNatwasal(values as NatwasalFormTypes);
        break;
      case "editNatwasal":
        editNatwasal(values as NatwasalFormTypes);
        break;
      case "addWorkPermit":
        addWorkPermit(values as TransactionFormTypes);
        break;
      case "editWorkPermit":
        editWorkPermit(values as TransactionFormTypes);
        break;
      case "newLC":
        newLC(values as TransactionFormTypes);
        break;
      case "renewLC":
        renewLC(values as TransactionFormTypes);
        break;
      case "downloadExcel":
        handleDownloadExcelSubmit(values as DownloadExcelFormTypes);
        break;
      case "editCompanyInfo":
        editCompanyInfo(values as CompanyInfoFormTypes);
        break;
      case "delete":
        handleDelete();
        break;
      default:
        return () => {};
    }
  };

  return { submitFunction };
};

export default useSubmitFunction;

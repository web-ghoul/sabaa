import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ObjectSchema } from "yup";
import useCompaniesOptionsSchema from "../forms/CompaniesOptionsForm/useCompaniesOptionsSchema";
import useCompanySchema from "../forms/CompanyForm/useCompanySchema";
import useCustomerSchema from "../forms/CustomerForm/useCustomerSchema";
import useCustomersOptionsSchema from "../forms/CustomersOptionsForm/useCustomersOptionsSchema";
import useDeleteSchema from "../forms/DeleteForm/useDeleteSchema";
import useEChannelSchema from "../forms/EChannelForm/useEChannelSchema";
import useEChannelsOptionsSchema from "../forms/EChannelsOptionsForm/useEChannelsOptionsSchema";
import useEmployeeSchema from "../forms/EmployeeForm/useEmployeeSchema";
import useEmployeesOptionsSchema from "../forms/EmployeesOptionsForm/useEmployeesOptionsSchema";
import useForgotPasswordSchema from "../forms/ForgotPasswordForm/useForgotPasswordSchema";
import useLinkToCompanySchema from "../forms/LinkToCompanyForm/useLinkToCompanySchema";
import useLoginSchema from "../forms/LoginForm/useLoginSchema";
import useNatwasalSchema from "../forms/NatwasalForm/useNatwasalSchema";
import useNatwasalsOptionsSchema from "../forms/NatwasalsOptionsForm/useNatwasalsOptionsSchema";
import useOTPSchema from "../forms/OTPForm/useOTPSchema";
import useOwnerSchema from "../forms/OwnerForm/useOwnerSchema";
import useOwnersOptionsSchema from "../forms/OwnersOptionsForm/useOwnersOptionsSchema";
import useProSchema from "../forms/ProForm/useProSchema";
import useProsOptionsSchema from "../forms/ProsOptionsForm/useProsOptionsSchema";
import useResetPasswordSchema from "../forms/ResetPasswordForm/useResetPasswordSchema";
import useSponsorSchema from "../forms/SponsorForm/useSponsorSchema";
import useTasheelSchema from "../forms/TasheelForm/useTasheelSchema";
import useTasheelsOptionsSchema from "../forms/TasheelsOptionsForm/useTasheelsOptionsSchema";
import useUserSchema from "../forms/UserForm/useUserSchema";
import useUsersOptionsSchema from "../forms/UsersOptionsForm/useUsersOptionsSchema";
import { AllFormsTypes } from "../types/forms.types";
import useSubmitFunction from "./useSubmitFunction";
import useDownloadExcelSchema from "../forms/DownloadExcelForm/useDownloadExcelSchema";
import useTransactionsOptionsSchema from "../forms/TransactionsOptionsForm/useTransactionsOptionsSchema";
import useTransactionSchema from "../forms/TransactionsForm/useTransactionSchema";
import useCreateEmployeesSheetSchema from "../forms/CreateEmployeesSheetForm/useCreateEmployeesSheetSchema";
import useCreateNationalitiesSheetSchema from "../forms/CreateNationalitiesSheetForm/useCreateNationalitiesSheetSchema";
import useCreateJobsSheetSchema from "../forms/CreateJobsSheetForm/useCreateJobsSheetSchema";
import useCreateCustomersSheetSchema from "../forms/CreateCustomersSheetForm/useCreateCustomersSheetSchema";
import useCreateProsSheetSchema from "../forms/CreateProsSheetForm/useCreateProsSheetSchema";
import useRoleSchema from "../forms/RoleForm/useRoleSchema";

const useSubmitForm = (type: string) => {
  const { submitFunction } = useSubmitFunction(type);
  const { LoginSchema, LoginInitialValues } = useLoginSchema();
  const { ForgotPasswordSchema, ForgotPasswordInitialValues } =
    useForgotPasswordSchema();
  const { OTPSchema, OTPInitialValues } = useOTPSchema();
  const { ResetPasswordSchema, ResetPasswordInitialValues } =
    useResetPasswordSchema();
  const { DeleteSchema, DeleteInitialValues } = useDeleteSchema();
  const { CustomerSchema, CustomerInitialValues } = useCustomerSchema();
  const { CustomersOptionsSchema, CustomersOptionsInitialValues } =
    useCustomersOptionsSchema();
  const { OwnerSchema, OwnerInitialValues } = useOwnerSchema();
  const { OwnersOptionsSchema, OwnersOptionsInitialValues } =
    useOwnersOptionsSchema();
  const { UserSchema, UserInitialValues } = useUserSchema();
  const { UsersOptionsSchema, UsersOptionsInitialValues } =
    useUsersOptionsSchema();
  const { ProSchema, ProInitialValues } = useProSchema();
  const { ProsOptionsSchema, ProsOptionsInitialValues } =
    useProsOptionsSchema();
  const { SponsorSchema, SponsorInitialValues } = useSponsorSchema();
  const { EmployeeSchema, EmployeeInitialValues } = useEmployeeSchema();
  const { EmployeesOptionsSchema, EmployeesOptionsInitialValues } =
    useEmployeesOptionsSchema();
  const { createEmployeesSheetInitialValues, createEmployeesSheetSchema } =
    useCreateEmployeesSheetSchema();
  const { CompanySchema, CompanyInitialValues } = useCompanySchema();
  const { CompaniesOptionsSchema, CompaniesOptionsInitialValues } =
    useCompaniesOptionsSchema();
  const { EChannelSchema, EChannelInitialValues } = useEChannelSchema();
  const { EChannelsOptionsSchema, EChannelsOptionsInitialValues } =
    useEChannelsOptionsSchema();
  const { TasheelSchema, TasheelInitialValues } = useTasheelSchema();
  const { TasheelsOptionsSchema, TasheelsOptionsInitialValues } =
    useTasheelsOptionsSchema();
  const { NatwasalSchema, NatwasalInitialValues } = useNatwasalSchema();
  const { LinkToCompanySchema, LinkToCompanyInitialValues } =
    useLinkToCompanySchema();
  const { NatwasalsOptionsSchema, NatwasalsOptionsInitialValues } =
    useNatwasalsOptionsSchema();
  const { DownloadExcelInitialValues, DownloadExcelSchema } =
    useDownloadExcelSchema();
  const { TransactionsOptionsInitialValues, TransactionsOptionsSchema } =
    useTransactionsOptionsSchema();
  const {
    TransactionInitialValues,
    TransactionSchema,
    NewLCSchema,
    NewLCInitialValues,
  } = useTransactionSchema();
  const {
    createNationalitiesSheetInitialValues,
    createNationalitiesSheetSchema,
  } = useCreateNationalitiesSheetSchema();
  const { createJobsSheetInitialValues, createJobsSheetSchema } =
    useCreateJobsSheetSchema();
  const { createCustomersSheetInitialValues, createCustomersSheetSchema } =
    useCreateCustomersSheetSchema();
  const { createProsSheetSchema } = useCreateProsSheetSchema();
  const { RoleInitialValues, RoleSchema } = useRoleSchema();

  const schemas: { [key: string]: ObjectSchema<AllFormsTypes> } = {
    login: LoginSchema,
    otp: OTPSchema,
    forgotPassword: ForgotPasswordSchema,
    resetPassword: ResetPasswordSchema,
    delete: DeleteSchema,
    linkOwner: LinkToCompanySchema,
    linkPro: LinkToCompanySchema,
    addCustomer: CustomerSchema,
    editCustomer: CustomerSchema,
    customersOptions: CustomersOptionsSchema,
    addOwner: OwnerSchema,
    editOwner: OwnerSchema,
    ownersOptions: OwnersOptionsSchema,
    addUser: UserSchema,
    editUser: UserSchema,
    addRole: RoleSchema,
    editRole: RoleSchema,
    usersOptions: UsersOptionsSchema,
    addEmployee: EmployeeSchema,
    editEmployee: EmployeeSchema,
    employeesOptions: EmployeesOptionsSchema,
    createEmployeesSheet: createEmployeesSheetSchema,
    createNationalitiesSheet: createNationalitiesSheetSchema,
    createJobsSheet: createJobsSheetSchema,
    createCustomersSheet: createCustomersSheetSchema,
    createProsSheet: createProsSheetSchema,
    addPro: ProSchema,
    editPro: ProSchema,
    prosOptions: ProsOptionsSchema,
    addSponsor: SponsorSchema,
    editSponsor: SponsorSchema,
    addCompany: CompanySchema,
    editCompany: CompanySchema,
    companiesOptions: CompaniesOptionsSchema,
    addEChannel: EChannelSchema,
    editEChannel: EChannelSchema,
    eChannelsOptions: EChannelsOptionsSchema,
    addTasheel: TasheelSchema,
    editTasheel: TasheelSchema,
    tasheelsOptions: TasheelsOptionsSchema,
    addNatwasal: NatwasalSchema,
    editNatwasal: NatwasalSchema,
    natwasalsOptions: NatwasalsOptionsSchema,
    downloadExcel: DownloadExcelSchema,
    transactionsOptions: TransactionsOptionsSchema,
    addTransaction: TransactionSchema,
    editTransaction: TransactionSchema,
    newLC: NewLCSchema,
  };

  const initialValues: { [key: string]: AllFormsTypes } = {
    login: LoginInitialValues,
    otp: OTPInitialValues,
    forgotPassword: ForgotPasswordInitialValues,
    resetPassword: ResetPasswordInitialValues,
    delete: DeleteInitialValues,
    linkOwner: LinkToCompanyInitialValues,
    linkPro: LinkToCompanyInitialValues,
    addCustomer: CustomerInitialValues,
    editCustomer: CustomerInitialValues,
    customersOptions: CustomersOptionsInitialValues,
    addOwner: OwnerInitialValues,
    editOwner: OwnerInitialValues,
    ownersOptions: OwnersOptionsInitialValues,
    addUser: UserInitialValues,
    editUser: UserInitialValues,
    addRole: RoleInitialValues,
    editRole: RoleInitialValues,
    usersOptions: UsersOptionsInitialValues,
    addPro: ProInitialValues,
    editPro: ProInitialValues,
    prosOptions: ProsOptionsInitialValues,
    addSponsor: SponsorInitialValues,
    editSponsor: SponsorInitialValues,
    addEmployee: EmployeeInitialValues,
    editEmployee: EmployeeInitialValues,
    employeesOptions: EmployeesOptionsInitialValues,
    createEmployeesSheet: createEmployeesSheetInitialValues,
    createNationalitiesSheet: createNationalitiesSheetInitialValues,
    createJobsSheet: createJobsSheetInitialValues,
    createCustomersSheet: createCustomersSheetInitialValues,
    addCompany: CompanyInitialValues,
    editCompany: CompanyInitialValues,
    companiesOptions: CompaniesOptionsInitialValues,
    addEChannel: EChannelInitialValues,
    editEChannel: EChannelInitialValues,
    eChannelsOptions: EChannelsOptionsInitialValues,
    addTasheel: TasheelInitialValues,
    editTasheel: TasheelInitialValues,
    tasheelsOptions: TasheelsOptionsInitialValues,
    addNatwasal: NatwasalInitialValues,
    editNatwasal: NatwasalInitialValues,
    natwasalsOptions: NatwasalsOptionsInitialValues,
    downloadExcel: DownloadExcelInitialValues,
    transactionsOptions: TransactionsOptionsInitialValues,
    addTransaction: TransactionInitialValues,
    editTransaction: TransactionInitialValues,
    newLC: NewLCInitialValues,
  };

  const chosenSchema = schemas[type];

  const chosenInitialValues = initialValues[type];

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(chosenSchema),
    defaultValues: chosenInitialValues,
  });

  return {
    register,
    errors,
    setValue,
    getValues,
    handleSubmitForm: handleSubmit(submitFunction),
  };
};

export default useSubmitForm;

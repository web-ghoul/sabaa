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
import useConvertCustomerSchema from "../forms/ConvertCustomerForm/useConvertCustomerSchema";
import useCompanyInfoSchema from "../forms/CompanyInfoForm/useCompanyInfoSchema";
import useJobSchema from "../forms/JobForm/useJobSchema";
import useJobsOptionsSchema from "../forms/JobsOptionsForm/useJobsOptionsSchema";
import useNationalitiesOptionsSchema from "../forms/NationalitiesOptionsForm/useNationalitiesOptionsSchema";
import useNationalitySchema from "../forms/NationalityForm/useEditNationalitySchema";
import useOptionSchema from "../forms/OptionForm/useOptionSchema";

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
  const { JobSchema, JobInitialValues } = useJobSchema();
  const { JobsOptionsSchema, JobsOptionsInitialValues } =
    useJobsOptionsSchema();
  const { NationalitySchema, NationalityInitialValues } =
    useNationalitySchema();
  const { NationalitiesOptionsSchema, NationalitiesOptionsInitialValues } =
    useNationalitiesOptionsSchema();
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
  const { TransactionInitialValues, TransactionSchema } =
    useTransactionSchema();
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
  const { CompanyInfoInitialValues, CompanyInfoSchema } =
    useCompanyInfoSchema();
  const { ConvertCustomerInitialValues, ConvertCustomerSchema } =
    useConvertCustomerSchema();
  const { OptionSchema, OptionInitialValues } = useOptionSchema();

  const schemas: { [key: string]: ObjectSchema<AllFormsTypes> } = {
    //Authentication
    login: LoginSchema,
    otp: OTPSchema,
    forgotPassword: ForgotPasswordSchema,
    resetPassword: ResetPasswordSchema,
    //Authentication

    delete: DeleteSchema,

    linkOwner: LinkToCompanySchema,
    linkPro: LinkToCompanySchema,

    //Job
    addJob: JobSchema,
    editJob: JobSchema,
    jobsOptions: JobsOptionsSchema,
    //Job

    //Nationalities
    addNationality: NationalitySchema,
    editNationality: NationalitySchema,
    nationalitiesOptions: NationalitiesOptionsSchema,
    //Nationalities

    //Customer
    addCustomer: CustomerSchema,
    editCustomer: CustomerSchema,
    customersOptions: CustomersOptionsSchema,
    convertCustomer: ConvertCustomerSchema,
    //Customer

    //Owner
    addOwner: OwnerSchema,
    editOwner: OwnerSchema,
    ownersOptions: OwnersOptionsSchema,
    //Owner

    //User
    addUser: UserSchema,
    editUser: UserSchema,
    usersOptions: UsersOptionsSchema,
    //User

    //Role
    addRole: RoleSchema,
    editRole: RoleSchema,
    //Role

    //Option
    addOption: OptionSchema,
    editOption: OptionSchema,
    //Option

    //Employee
    addEmployee: EmployeeSchema,
    editEmployee: EmployeeSchema,
    employeesOptions: EmployeesOptionsSchema,
    //Employee

    //Pro
    addPro: ProSchema,
    editPro: ProSchema,
    prosOptions: ProsOptionsSchema,
    //Pro

    //Sponsor
    addSponsor: SponsorSchema,
    editSponsor: SponsorSchema,
    //Sponsor

    //Company
    addCompany: CompanySchema,
    editCompany: CompanySchema,
    companiesOptions: CompaniesOptionsSchema,
    //Company

    //E-Channel
    addEChannel: EChannelSchema,
    editEChannel: EChannelSchema,
    eChannelsOptions: EChannelsOptionsSchema,
    //E-Channel

    //Tasheel
    addTasheel: TasheelSchema,
    editTasheel: TasheelSchema,
    tasheelsOptions: TasheelsOptionsSchema,
    //Tasheel

    //Natwasal
    addNatwasal: NatwasalSchema,
    editNatwasal: NatwasalSchema,
    natwasalsOptions: NatwasalsOptionsSchema,
    //Natwasal

    //Excel
    createEmployeesSheet: createEmployeesSheetSchema,
    createNationalitiesSheet: createNationalitiesSheetSchema,
    createJobsSheet: createJobsSheetSchema,
    createCustomersSheet: createCustomersSheetSchema,
    createProsSheet: createProsSheetSchema,
    downloadExcel: DownloadExcelSchema,
    //Excel

    //Transactions
    transactionsOptions: TransactionsOptionsSchema,
    addWorkPermit: TransactionSchema,
    editWorkPermit: TransactionSchema,
    approvedStatus: TransactionSchema,
    newLC: TransactionSchema,
    renewLC: TransactionSchema,
    //Transactions

    //Company Info
    editCompanyInfo: CompanyInfoSchema,
    //Company Info
  };

  const initialValues: { [key: string]: AllFormsTypes } = {
    //Authentication
    login: LoginInitialValues,
    otp: OTPInitialValues,
    forgotPassword: ForgotPasswordInitialValues,
    resetPassword: ResetPasswordInitialValues,
    //Authentication

    delete: DeleteInitialValues,

    linkOwner: LinkToCompanyInitialValues,
    linkPro: LinkToCompanyInitialValues,

    //Job
    addJob: JobInitialValues,
    editJob: JobInitialValues,
    jobsOptions: JobsOptionsInitialValues,
    //Job

    //Nationalities
    addNationality: NationalityInitialValues,
    editNationality: NationalityInitialValues,
    nationalitiesOptions: NationalitiesOptionsInitialValues,
    //Nationalities

    //Customer
    addCustomer: CustomerInitialValues,
    editCustomer: CustomerInitialValues,
    customersOptions: CustomersOptionsInitialValues,
    ConvertCustomer: ConvertCustomerInitialValues,
    //Customer

    //Owner
    addOwner: OwnerInitialValues,
    editOwner: OwnerInitialValues,
    ownersOptions: OwnersOptionsInitialValues,
    //Owner

    //User
    addUser: UserInitialValues,
    editUser: UserInitialValues,
    usersOptions: UsersOptionsInitialValues,
    //User

    //Role
    addRole: RoleInitialValues,
    editRole: RoleInitialValues,
    //Role

    //Option
    addOption: OptionInitialValues,
    editOption: OptionInitialValues,
    //Option

    //Pro
    addPro: ProInitialValues,
    editPro: ProInitialValues,
    prosOptions: ProsOptionsInitialValues,
    //Pro

    //Sponsor
    addSponsor: SponsorInitialValues,
    editSponsor: SponsorInitialValues,
    //Sponsor

    //Employee
    addEmployee: EmployeeInitialValues,
    editEmployee: EmployeeInitialValues,
    employeesOptions: EmployeesOptionsInitialValues,
    //Employee

    //Company
    addCompany: CompanyInitialValues,
    editCompany: CompanyInitialValues,
    companiesOptions: CompaniesOptionsInitialValues,
    //Company

    //E-Channel
    addEChannel: EChannelInitialValues,
    editEChannel: EChannelInitialValues,
    eChannelsOptions: EChannelsOptionsInitialValues,
    //E-Channel

    //Tasheel
    addTasheel: TasheelInitialValues,
    editTasheel: TasheelInitialValues,
    tasheelsOptions: TasheelsOptionsInitialValues,
    //Tasheel

    //Natwasal
    addNatwasal: NatwasalInitialValues,
    editNatwasal: NatwasalInitialValues,
    natwasalsOptions: NatwasalsOptionsInitialValues,
    //Natwasal

    //Excel
    createEmployeesSheet: createEmployeesSheetInitialValues,
    createNationalitiesSheet: createNationalitiesSheetInitialValues,
    createJobsSheet: createJobsSheetInitialValues,
    createCustomersSheet: createCustomersSheetInitialValues,
    downloadExcel: DownloadExcelInitialValues,
    //Excel

    //Transactions
    transactionsOptions: TransactionsOptionsInitialValues,
    addWorkPermit: TransactionInitialValues,
    editWorkPermit: TransactionInitialValues,
    approvedStatus: TransactionInitialValues,
    renewLC: TransactionInitialValues,
    newLC: TransactionInitialValues,
    //Transactions

    //Company Info
    editCompanyInfo: CompanyInfoInitialValues,
    //Company Info
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

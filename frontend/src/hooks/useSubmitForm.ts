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

const useSubmitForm = (type: string) => {
  const { submitFunction } = useSubmitFunction(type);
  const { LoginSchema, LoginInitailValues } = useLoginSchema();
  const { ForgotPasswordSchema, ForgotPasswordInitailValues } =
    useForgotPasswordSchema();
  const { OTPSchema, OTPInitailValues } = useOTPSchema();
  const { ResetPasswordSchema, ResetPasswordInitailValues } =
    useResetPasswordSchema();
  const { DeleteSchema, DeleteInitailValues } = useDeleteSchema();
  const { CustomerSchema, CustomerInitailValues } = useCustomerSchema();
  const { CustomersOptionsSchema, CustomersOptionsInitailValues } =
    useCustomersOptionsSchema();
  const { OwnerSchema, OwnerInitailValues } = useOwnerSchema();
  const { OwnersOptionsSchema, OwnersOptionsInitailValues } =
    useOwnersOptionsSchema();
  const { UserSchema, UserInitailValues } = useUserSchema();
  const { UsersOptionsSchema, UsersOptionsInitailValues } =
    useUsersOptionsSchema();
  const { ProSchema, ProInitailValues } = useProSchema();
  const { ProsOptionsSchema, ProsOptionsInitailValues } =
    useProsOptionsSchema();
  const { SponsorSchema, SponsorInitailValues } = useSponsorSchema();
  const { EmployeeSchema, EmployeeInitailValues } = useEmployeeSchema();
  const { EmployeesOptionsSchema, EmployeesOptionsInitailValues } =
    useEmployeesOptionsSchema();
  const { CompanySchema, CompanyInitailValues } = useCompanySchema();
  const { CompaniesOptionsSchema, CompaniesOptionsInitailValues } =
    useCompaniesOptionsSchema();
  const { EChannelSchema, EChannelInitailValues } = useEChannelSchema();
  const { EChannelsOptionsSchema, EChannelsOptionsInitailValues } =
    useEChannelsOptionsSchema();
  const { TasheelSchema, TasheelInitailValues } = useTasheelSchema();
  const { TasheelsOptionsSchema, TasheelsOptionsInitailValues } =
    useTasheelsOptionsSchema();
  const { NatwasalSchema, NatwasalInitailValues } = useNatwasalSchema();
  const { LinkToCompanySchema, LinkToCompanyInitailValues } =
    useLinkToCompanySchema();
  const { NatwasalsOptionsSchema, NatwasalsOptionsInitailValues } =
    useNatwasalsOptionsSchema();

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
    usersOptions: UsersOptionsSchema,
    addEmployee: EmployeeSchema,
    editEmployee: EmployeeSchema,
    employeesOptions: EmployeesOptionsSchema,
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
  };

  const initialValues: { [key: string]: AllFormsTypes } = {
    login: LoginInitailValues,
    otp: OTPInitailValues,
    forgotPassword: ForgotPasswordInitailValues,
    resetPassword: ResetPasswordInitailValues,
    delete: DeleteInitailValues,
    linkOwner: LinkToCompanyInitailValues,
    linkPro: LinkToCompanyInitailValues,
    addCustomer: CustomerInitailValues,
    editCustomer: CustomerInitailValues,
    customersOptions: CustomersOptionsInitailValues,
    addOwner: OwnerInitailValues,
    editOwner: OwnerInitailValues,
    ownersOptions: OwnersOptionsInitailValues,
    addUser: UserInitailValues,
    editUser: UserInitailValues,
    usersOptions: UsersOptionsInitailValues,
    addPro: ProInitailValues,
    editPro: ProInitailValues,
    prosOptions: ProsOptionsInitailValues,
    addSponsor: SponsorInitailValues,
    editSponsor: SponsorInitailValues,
    addEmployee: EmployeeInitailValues,
    editEmployee: EmployeeInitailValues,
    employeesOptions: EmployeesOptionsInitailValues,
    addCompany: CompanyInitailValues,
    editCompany: CompanyInitailValues,
    companiesOptions: CompaniesOptionsInitailValues,
    addEChannel: EChannelInitailValues,
    editEChannel: EChannelInitailValues,
    eChannelsOptions: EChannelsOptionsInitailValues,
    addTasheel: TasheelInitailValues,
    editTasheel: TasheelInitailValues,
    tasheelsOptions: TasheelsOptionsInitailValues,
    addNatwasal: NatwasalInitailValues,
    editNatwasal: NatwasalInitailValues,
    natwasalsOptions: NatwasalsOptionsInitailValues,
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

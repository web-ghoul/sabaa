import { MouseEvent } from "react";
import { EntitiesType, EntityType } from "./app.types";
import {
  CompanyTypes,
  CustomerTypes,
  EChannelTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  ProTypes,
  SponsorTypes,
  TasheelTypes,
  TransactionTypes,
  UserTypes,
} from "./store.types";

interface AppContextProps {
  AuthRoutes: string[];
  pageContainerClasses: string;
  defaultAvatar: string;
  defaultCompany: string;
  openUserMenu: null | HTMLElement;
  ownersPage: number;
  setOwnersPage: (page: number) => void;
  prosPage: number;
  setProsPage: (page: number) => void;
  employeesPage: number;
  setEmployeesPage: (page: number) => void;
  customersPage: number;
  setCustomersPage: (page: number) => void;
  jobsPage: number;
  setJobsPage: (page: number) => void;
  companiesPage: number;
  setCompaniesPage: (page: number) => void;
  usersPage: number;
  setUsersPage: (page: number) => void;
  queries: { [key: string]: string };
  setQueries: (queries: { [key: string]: string }) => void;
  handleAddQuery: (query: { [key: string]: string }) => void;
  handleRemoveQuery: (queryName: string) => void;
  nationalitiesPage: number;
  setNationalitiesPage: (page: number) => void;
  handleCloseUserMenu: () => void;
  handleOpenUserMenu: (event: MouseEvent<HTMLButtonElement>) => void;
  openTableMenu: null | HTMLElement;
  handleCloseTableMenu: () => void;
  handleOpenTableMenu: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface SidebarsContextProps {
  openSidebar: boolean;
  sidebarWidth: string;
  handleCloseSidebar: () => void;
  handleOpenSidebar: () => void;
}

interface ExcelsContextProps {
  excelType: { type: "excel" | "all"; entity: EntitiesType };
  setExcelType: (value: {
    type: "excel" | "all";
    entity: EntitiesType;
    ent?: EntityType;
  }) => void;
  ownersSheets: OwnersSheetTypes[];
  ownerIndex: { fileIndex: number; index: number };
  setOwnerIndex: (value: { fileIndex: number; index: number }) => void;
  handleAddOwnersSheet: (ownersSheet: OwnersSheetTypes) => void;
  handleRemoveOwnersSheet: (fileIndex: number) => void;
  handleEditOwnerInSheet: (value: OwnerTypes) => void;
  handleDeleteOwnerFromSheet: () => void;
  prosSheets: ProsSheetTypes[];
  proIndex: { fileIndex: number; index: number };
  setProIndex: (value: { fileIndex: number; index: number }) => void;
  handleAddProsSheet: (prosSheet: ProsSheetTypes) => void;
  handleRemoveProsSheet: (fileIndex: number) => void;
  handleEditProInSheet: (value: ProTypes) => void;
  handleDeleteProFromSheet: () => void;
  employeesSheets: EmployeesSheetTypes[];
  employeeIndex: { fileIndex: number; index: number };
  setEmployeeIndex: (value: { fileIndex: number; index: number }) => void;
  handleAddEmployeesSheet: (employeesSheet: EmployeesSheetTypes) => void;
  handleRemoveEmployeesSheet: (fileIndex: number) => void;
  handleEditEmployeeInSheet: (value: EmployeeTypes) => void;
  handleDeleteEmployeeFromSheet: () => void;
  customersSheets: CustomersSheetTypes[];
  customerIndex: { fileIndex: number; index: number };
  setCustomerIndex: (value: { fileIndex: number; index: number }) => void;
  handleAddCustomersSheet: (prosSheet: CustomersSheetTypes) => void;
  handleRemoveCustomersSheet: (fileIndex: number) => void;
  handleEditCustomerInSheet: (value: CustomerTypes) => void;
  handleDeleteCustomerFromSheet: () => void;
  companiesSheets: CompaniesSheetTypes[];
  companyIndex: { fileIndex: number; index: number };
  setCompanyIndex: (value: { fileIndex: number; index: number }) => void;
  handleAddCompaniesSheet: (companiesSheet: CompaniesSheetTypes) => void;
  handleRemoveCompaniesSheet: (fileIndex: number) => void;
  handleEditCompanyInSheet: (value: CompanyTypes) => void;
  handleDeleteCompanyFromSheet: () => void;
  transactionsSheets: TransactionsSheetTypes[];
  transactionIndex: { fileIndex: number; index: number };
  setTransactionIndex: (value: { fileIndex: number; index: number }) => void;
  handleAddTransactionsSheet: (companiesSheet: CompaniesSheetTypes) => void;
  handleRemoveTransactionsSheet: (fileIndex: number) => void;
  handleEditTransactionInSheet: (value: CompanyTypes) => void;
  handleDeleteTransactionFromSheet: () => void;
  jobsSheets: JobsSheetTypes[];
  jobIndex: { fileIndex: number; index: number };
  setJobIndex: (value: { fileIndex: number; index: number }) => void;
  handleAddJobsSheet: (jobsSheet: JobsSheetTypes) => void;
  handleRemoveJobsSheet: (fileIndex: number) => void;
  handleEditJobInSheet: (value: JobTypes) => void;
  handleDeleteJobFromSheet: () => void;
  nationalitiesSheets: NationalitiesSheetTypes[];
  nationalityIndex: { fileIndex: number; index: number };
  setNationalityIndex: (value: { fileIndex: number; index: number }) => void;
  handleAddNationalitiesSheet: (
    nationalitiesSheet: NationalitiesSheetTypes
  ) => void;
  handleRemoveNationalitiesSheet: (fileIndex: number) => void;
  handleEditNationalityInSheet: (value: NationalityTypes) => void;
  handleDeleteNationalityFromSheet: () => void;
}

interface FormsContextTypes {
  formsLoading: boolean;
  handleCloseFormsLoading: () => void;
  handleOpenFormsLoading: () => void;
  formType: string;
  setFormType: (type: string) => void;
  searchForOwners: string;
  setSearchForOwners: (search: string) => void;
  searchForEmployees: string;
  setSearchForEmployees: (search: string) => void;
  searchForEChannels: string;
  setSearchForEChannels: (search: string) => void;
  searchForTasheel: string;
  setSearchForTasheel: (search: string) => void;
  searchForNatwasal: string;
  setSearchForNatwasal: (search: string) => void;
  searchForCustomers: string;
  setSearchForCustomers: (search: string) => void;
  searchForPros: string;
  setSearchForPros: (search: string) => void;
  searchForCompanies: string;
  setSearchForCompanies: (search: string) => void;
  searchForActivities: string;
  setSearchForActivities: (search: string) => void;
  searchForUsers: string;
  setSearchForUsers: (search: string) => void;
  searchForJobs: string;
  setSearchForJobs: (search: string) => void;
  searchForNationalities: string;
  setSearchForNationalities: (search: string) => void;
  companyImage: File | string;
  setCompanyImage: (image: File | string) => void;
  ownerImage: File | string;
  setOwnerImage: (image: File | string) => void;
  employeeImage: File | string;
  setEmployeeImage: (image: File | string) => void;
  customerImage: File | string;
  setCustomerImage: (image: File | string) => void;
  sponsorImage: File | string;
  setSponsorImage: (image: File | string) => void;
  proImage: File | string;
  setProImage: (image: File | string) => void;
  userImage: File | string;
  setUserImage: (image: File | string) => void;
  editableJobData: JobTypes | null;
  setEditableJobData: (job: JobTypes | null) => void;
  editableOwnerData: OwnerTypes | null;
  setEditableOwnerData: (owner: OwnerTypes | null) => void;
  editableEmployeeData: EmployeeTypes | null;
  setEditableEmployeeData: (employee: EmployeeTypes | null) => void;
  editableCustomerData: CustomerTypes | null;
  setEditableCustomerData: (customer: CustomerTypes | null) => void;
  editableSponsorData: SponsorTypes | null;
  setEditableSponsorData: (sponsor: SponsorTypes | null) => void;
  editableProData: ProTypes | null;
  setEditableProData: (pro: OwnerTypes | null) => void;
  editableCompanyData: CompanyTypes | null;
  setEditableCompanyData: (company: CompanyTypes | null) => void;
  editableNationalityData: NationalityTypes | null;
  setEditableNationalityData: (nationality: NationalityTypes | null) => void;
  editableUserData: UserTypes | null;
  setEditableUserData: (user: UserTypes | null) => void;
  editableEChannelData: EChannelTypes | null;
  setEditableEChannelData: (eChannel: EChannelTypes | null) => void;
  editableTasheelData: TasheelTypes | null;
  setEditableTasheelData: (tasheel: TasheelTypes | null) => void;
  editableNatwasalData: TasheelTypes | null;
  setEditableNatwasalData: (natwasal: TasheelTypes | null) => void;
  editableTransactionData: TransactionTypes | null;
  setEditableTransactionData: (transaction: TransactionTypes | null) => void;
}

interface ModalsContextTypes {
  openDownloadExcelModal: boolean;
  handleOpenDownloadExcelModal: (
    type: "excel" | "all",
    entity: EntitiesType,
    ent?: EntityType
  ) => void;
  handleCloseDownloadExcelModal: () => void;
  openForgotPasswordModal: boolean;
  handleOpenForgotPasswordModal: () => void;
  handleCloseForgotPasswordModal: () => void;
  openJobModal: boolean;
  handleOpenJobModal: (type: string) => void;
  handleCloseJobModal: () => void;
  openNationalityModal: boolean;
  handleOpenNationalityModal: (string: string) => void;
  handleCloseNationalityModal: () => void;
  openLinkToCompanyModal: boolean;
  handleOpenLinkToCompanyModal: (type: string) => void;
  handleCloseLinkToCompanyModal: () => void;
  openUploadEmployeesModal: boolean;
  handleOpenUploadEmployeesModal: () => void;
  handleCloseUploadEmployeesModal: () => void;
  openDeleteModal: boolean;
  handleOpenDeleteModal: (type: string) => void;
  handleCloseDeleteModal: () => void;
  openOwnerModal: boolean;
  handleOpenOwnerModal: (string: string) => void;
  handleCloseOwnerModal: () => void;
  openEmployeeModal: boolean;
  handleOpenEmployeeModal: (string: string) => void;
  handleCloseEmployeeModal: () => void;
  openCustomerModal: boolean;
  handleOpenCustomerModal: (string: string) => void;
  handleCloseCustomerModal: () => void;
  openConvertCustomerModal: boolean;
  handleOpenConvertCustomerModal: () => void;
  handleCloseConvertCustomerModal: () => void;
  openSponsorModal: boolean;
  handleOpenSponsorModal: (string: string) => void;
  handleCloseSponsorModal: () => void;
  openViewSponsorModal: boolean;
  handleOpenViewSponsorModal: () => void;
  handleCloseViewSponsorModal: () => void;
  openProModal: boolean;
  handleOpenProModal: (string: string) => void;
  handleCloseProModal: () => void;
  openUserModal: boolean;
  handleOpenUserModal: (string: string) => void;
  handleCloseUserModal: () => void;
  openCompanyModal: boolean;
  handleOpenCompanyModal: (type: string) => void;
  handleCloseCompanyModal: () => void;
  openEChannelModal: boolean;
  handleOpenEChannelModal: (string: string) => void;
  handleCloseEChannelModal: () => void;
  openTasheelModal: boolean;
  handleOpenTasheelModal: (string: string) => void;
  handleCloseTasheelModal: () => void;
  openNatwasalModal: boolean;
  handleOpenNatwasalModal: (string: string) => void;
  handleCloseNatwasalModal: () => void;
  openTransactionModal: boolean;
  handleOpenTransactionModal: (string: string) => void;
  handleCloseTransactionModal: () => void;
  openApprovalWorkPermitModal: boolean;
  handleOpenApprovalWorkPermitModal: () => void;
  handleCloseApprovalWorkPermitModal: () => void;
}

interface TabsContextProps {
  userTabsValue: number;
  setUserTabsValue: (value: number) => void;
  ownerTabsValue: number;
  setOwnerTabsValue: (value: number) => void;
  proTabsValue: number;
  setProTabsValue: (value: number) => void;
  employeeTabsValue: number;
  setEmployeeTabsValue: (value: number) => void;
  customerTabsValue: number;
  setCustomerTabsValue: (value: number) => void;
  companyTabsValue: number;
  setCompanyTabsValue: (value: number) => void;
}

interface OwnersSheetTypes {
  fileName: string;
  data: Array<OwnerTypes>;
}

interface ProsSheetTypes {
  fileName: string;
  data: Array<ProTypes>;
}

interface EmployeesSheetTypes {
  fileName: string;
  data: Array<EmployeeTypes>;
}

interface CustomersSheetTypes {
  fileName: string;
  data: Array<CustomerTypes>;
}

interface CompaniesSheetTypes {
  fileName: string;
  data: Array<CompanyTypes>;
}

interface TransactionsSheetTypes {
  fileName: string;
  data: Array<TransactionTypes>;
}

interface UsersSheetTypes {
  fileName: string;
  data: Array<UserTypes>;
}

interface JobsSheetTypes {
  fileName: string;
  data: Array<JobTypes>;
}

interface NationalitiesSheetTypes {
  fileName: string;
  data: Array<NationalityTypes>;
}

export type {
  AppContextProps,
  CompaniesSheetTypes,
  CustomersSheetTypes,
  EmployeesSheetTypes,
  ExcelsContextProps,
  FormsContextTypes,
  JobsSheetTypes,
  ModalsContextTypes,
  NationalitiesSheetTypes,
  OwnersSheetTypes,
  ProsSheetTypes,
  SidebarsContextProps,
  TabsContextProps,
  UsersSheetTypes,
  TransactionsSheetTypes,
};

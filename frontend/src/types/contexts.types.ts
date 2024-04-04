import { MouseEvent } from "react";
import {
  CompanyTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  UserTypes,
} from "./store.types";

interface AppContextProps {
  pageContainerClasses: string;
  defaultAvatar: string;
  defaultCompany: string;
  openUserMenu: null | HTMLElement;
  ownersPage: number;
  setOwnersPage: (page: number) => void;
  jobsPage: number;
  setJobsPage: (page: number) => void;
  companiesPage: number;
  setCompaniesPage: (page: number) => void;
  usersPage: number;
  setUsersPage: (page: number) => void;
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
  ownersSheets: OwnersSheetTypes[];
  ownerIndex: { fileIndex: number; index: number };
  setOwnerIndex: (value: { fileIndex: number; index: number }) => void;
  handleAddOwnersSheet: (ownersSheet: OwnersSheetTypes) => void;
  handleRemoveOwnersSheet: (fileIndex: number) => void;
  handleEditOwnerInSheet: (value: OwnerTypes) => void;
  handleDeleteOwnerFromSheet: () => void;
  companiesSheets: CompaniesSheetTypes[];
  companyIndex: { fileIndex: number; index: number };
  setCompanyIndex: (value: { fileIndex: number; index: number }) => void;
  handleAddCompaniesSheet: (companiesSheet: CompaniesSheetTypes) => void;
  handleRemoveCompaniesSheet: (fileIndex: number) => void;
  handleEditCompanyInSheet: (value: CompanyTypes) => void;
  handleDeleteCompanyFromSheet: () => void;
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
  openDeleteModal: boolean;
  handleOpenDeleteModal: (type: string) => void;
  handleCloseDeleteModal: () => void;
  openOwnerModal: boolean;
  handleOpenOwnerModal: (string: string) => void;
  handleCloseOwnerModal: () => void;
  openUserModal: boolean;
  handleOpenUserModal: (string: string) => void;
  handleCloseUserModal: () => void;
  openCompanyModal: boolean;
  handleOpenCompanyModal: (type: string) => void;
  handleCloseCompanyModal: () => void;
  formType: string;
  setFormType: (type: string) => void;
  searchForOwners: string;
  setSearchForOwners: (search: string) => void;
  searchForCompanies: string;
  setSearchForCompanies: (search: string) => void;
  searchForUsers: string;
  setSearchForUsers: (search: string) => void;
  searchForJobs: string;
  setSearchForJobs: (search: string) => void;
  searchForNationalities: string;
  setSearchForNationalities: (search: string) => void;
  openForgotPasswordModal: boolean;
  handleOpenForgotPasswordModal: () => void;
  handleCloseForgotPasswordModal: () => void;
  openJobModal: boolean;
  handleOpenJobModal: (type: string) => void;
  handleCloseJobModal: () => void;
  openNationalityModal: boolean;
  handleOpenNationalityModal: (string: string) => void;
  handleCloseNationalityModal: () => void;
  companyImage: File | string;
  setCompanyImage: (image: File | string) => void;
  ownerImage: File | string;
  setOwnerImage: (image: File | string) => void;
  userImage: File | string;
  setUserImage: (image: File | string) => void;
  editableJobData: JobTypes | null;
  setEditableJobData: (job: JobTypes | null) => void;
  editableOwnerData: OwnerTypes | null;
  setEditableOwnerData: (owner: OwnerTypes | null) => void;
  editableCompanyData: CompanyTypes | null;
  setEditableCompanyData: (company: CompanyTypes | null) => void;
  editableNationalityData: NationalityTypes | null;
  setEditableNationalityData: (nationality: NationalityTypes | null) => void;
  editableUserData: UserTypes | null;
  setEditableUserData: (user: UserTypes | null) => void;
}

interface TabsContextProps {
  userTabsValue: number;
  setUserTabsValue: (value: number) => void;
  ownerTabsValue: number;
  setOwnerTabsValue: (value: number) => void;
  companyTabsValue: number;
  setCompanyTabsValue: (value: number) => void;
}

interface OwnersSheetTypes {
  fileName: string;
  data: Array<OwnerTypes>;
}

interface CompaniesSheetTypes {
  fileName: string;
  data: Array<CompanyTypes>;
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
  ExcelsContextProps,
  FormsContextTypes,
  JobsSheetTypes,
  NationalitiesSheetTypes,
  OwnersSheetTypes,
  SidebarsContextProps,
  TabsContextProps,
  UsersSheetTypes,
};

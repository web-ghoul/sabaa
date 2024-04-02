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
  handleOpenDeleteModal: () => void;
  handleCloseDeleteModal: () => void;
  openEditOwnerModal: boolean;
  handleOpenEditOwnerModal: () => void;
  handleCloseEditOwnerModal: () => void;
  openEditCompanyModal: boolean;
  handleOpenEditCompanyModal: () => void;
  handleCloseEditCompanyModal: () => void;
  deleteType: string;
  setDeleteType: (type: string) => void;
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
  openAddJobModal: boolean;
  handleOpenAddJobModal: () => void;
  handleCloseAddJobModal: () => void;
  openEditJobModal: boolean;
  handleOpenEditJobModal: () => void;
  handleCloseEditJobModal: () => void;
  openAddNationalityModal: boolean;
  handleOpenAddNationalityModal: () => void;
  handleCloseAddNationalityModal: () => void;
  openEditNationalityModal: boolean;
  handleOpenEditNationalityModal: () => void;
  handleCloseEditNationalityModal: () => void;
  addCompanyImage: File | string;
  setAddCompanyImage: (image: File | string) => void;
  editCompanyImage: File | string;
  setEditCompanyImage: (image: File | string) => void;
  addOwnerImage: File | string;
  setAddOwnerImage: (image: File | string) => void;
  editOwnerImage: File | string;
  setEditOwnerImage: (image: File | string) => void;
  addUserImage: File | string;
  setAddUserImage: (image: File | string) => void;
  editUserImage: File | string;
  setEditUserImage: (image: File | string) => void;
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

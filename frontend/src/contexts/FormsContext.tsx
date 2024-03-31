import { createContext, useContext, useState } from "react";
import { FormsContextTypes } from "../types/contexts.types";
import {
  CompanyTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  UserTypes,
} from "../types/store.types";
import { AppContext } from "./AppContext";

export const FormsContext = createContext<FormsContextTypes>({
  formsLoading: false,
  handleCloseFormsLoading: () => {},
  handleOpenFormsLoading: () => {},
  openDeleteModal: false,
  handleOpenDeleteModal: () => {},
  handleCloseDeleteModal: () => {},
  openForgotPasswordModal: false,
  handleOpenForgotPasswordModal: () => {},
  handleCloseForgotPasswordModal: () => {},
  openAddJobModal: false,
  handleOpenAddJobModal: () => {},
  handleCloseAddJobModal: () => {},
  openEditJobModal: false,
  handleOpenEditJobModal: () => {},
  handleCloseEditJobModal: () => {},
  openEditOwnerModal: false,
  handleOpenEditOwnerModal: () => {},
  handleCloseEditOwnerModal: () => {},
  openEditCompanyModal: false,
  handleOpenEditCompanyModal: () => {},
  handleCloseEditCompanyModal: () => {},
  openAddNationalityModal: false,
  handleOpenAddNationalityModal: () => {},
  handleCloseAddNationalityModal: () => {},
  openEditNationalityModal: false,
  handleOpenEditNationalityModal: () => {},
  handleCloseEditNationalityModal: () => {},
  deleteType: "",
  setDeleteType: () => {},
  searchForOwners: "",
  setSearchForOwners: () => {},
  searchForJobs: "",
  setSearchForJobs: () => {},
  searchForUsers: "",
  setSearchForUsers: () => {},
  searchForCompanies: "",
  setSearchForCompanies: () => {},
  searchForNationalities: "",
  setSearchForNationalities: () => {},
  addCompanyImage: "",
  setAddCompanyImage: () => {},
  editCompanyImage: "",
  setEditCompanyImage: () => {},
  addOwnerImage: "",
  setAddOwnerImage: () => {},
  editOwnerImage: "",
  setEditOwnerImage: () => {},
  addUserImage: "",
  setAddUserImage: () => {},
  editUserImage: "",
  setEditUserImage: () => {},
  editableJobData: null,
  setEditableJobData: () => {},
  editableOwnerData: null,
  setEditableOwnerData: () => {},
  editableNationalityData: null,
  setEditableNationalityData: () => {},
  editableUserData: null,
  setEditableUserData: () => {},
  editableCompanyData: null,
  setEditableCompanyData: () => {},
});

const FormsProvider = ({ children }: { children: React.ReactNode }) => {
  const { defaultAvatar, defaultCompany } = useContext(AppContext);

  //Loading Form
  const [formsLoading, setFormsLoading] = useState(false);

  //Search
  const [searchForOwners, setSearchForOwners] = useState("");
  const [searchForCompanies, setSearchForCompanies] = useState("");
  const [searchForUsers, setSearchForUsers] = useState("");
  const [searchForJobs, setSearchForJobs] = useState("");
  const [searchForNationalities, setSearchForNationalities] = useState("");

  //Delete Type
  const [deleteType, setDeleteType] = useState("");

  const handleCloseFormsLoading = () => {
    setFormsLoading(false);
  };

  const handleOpenFormsLoading = () => {
    setFormsLoading(true);
  };

  //Delete
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  //Forgot Password
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);

  const handleCloseForgotPasswordModal = () => {
    setOpenForgotPasswordModal(false);
  };

  const handleOpenForgotPasswordModal = () => {
    setOpenForgotPasswordModal(true);
  };

  //Add Job
  const [openAddJobModal, setOpenAddJobModal] = useState(false);

  const handleCloseAddJobModal = () => {
    setOpenAddJobModal(false);
  };

  const handleOpenAddJobModal = () => {
    setOpenAddJobModal(true);
  };

  //Edit Job
  const [openEditJobModal, setOpenEditJobModal] = useState(false);

  const handleCloseEditJobModal = () => {
    setOpenEditJobModal(false);
  };

  const handleOpenEditJobModal = () => {
    setOpenEditJobModal(true);
  };

  //Edit Owner
  const [openEditOwnerModal, setOpenEditOwnerModal] = useState(false);

  const handleCloseEditOwnerModal = () => {
    setOpenEditOwnerModal(false);
  };

  const handleOpenEditOwnerModal = () => {
    setOpenEditOwnerModal(true);
  };

  //Edit Company
  const [openEditCompanyModal, setOpenEditCompanyModal] = useState(false);

  const handleCloseEditCompanyModal = () => {
    setOpenEditCompanyModal(false);
  };

  const handleOpenEditCompanyModal = () => {
    setOpenEditCompanyModal(true);
  };

  //Add Nationality
  const [openAddNationalityModal, setOpenAddNationalityModal] = useState(false);

  const handleCloseAddNationalityModal = () => {
    setOpenAddNationalityModal(false);
  };

  const handleOpenAddNationalityModal = () => {
    setOpenAddNationalityModal(true);
  };

  //Edit Nationality

  const [openEditNationalityModal, setOpenEditNationalityModal] =
    useState(false);

  const handleCloseEditNationalityModal = () => {
    setOpenEditNationalityModal(false);
  };

  const handleOpenEditNationalityModal = () => {
    setOpenEditNationalityModal(true);
  };

  //Add Company Image
  const [addCompanyImage, setAddCompanyImage] = useState<File | string>(
    defaultCompany
  );

  //Edit Company Image
  const [editCompanyImage, setEditCompanyImage] = useState<File | string>(
    defaultCompany
  );

  //Add Owner Image
  const [addOwnerImage, setAddOwnerImage] = useState<File | string>(
    defaultAvatar
  );

  //Edit Owner Image
  const [editOwnerImage, setEditOwnerImage] = useState<File | string>(
    defaultAvatar
  );

  //Add User Image
  const [addUserImage, setAddUserImage] = useState<File | string>(
    defaultAvatar
  );

  //Edit User Image
  const [editUserImage, setEditUserImage] = useState<File | string>(
    defaultAvatar
  );

  //Editable Job Data
  const [editableJobData, setEditableJobData] = useState<JobTypes | null>(null);

  //Editable Owner Data
  const [editableOwnerData, setEditableOwnerData] = useState<OwnerTypes | null>(
    null
  );

  //Editable Nationality Data
  const [editableNationalityData, setEditableNationalityData] =
    useState<NationalityTypes | null>(null);

  //Editable User Data
  const [editableUserData, setEditableUserData] = useState<UserTypes | null>(
    null
  );

  //Editable Company Data
  const [editableCompanyData, setEditableCompanyData] =
    useState<CompanyTypes | null>(null);

  const values = {
    formsLoading,
    handleCloseFormsLoading,
    handleOpenFormsLoading,
    openForgotPasswordModal,
    handleOpenForgotPasswordModal,
    handleCloseForgotPasswordModal,
    openAddJobModal,
    editCompanyImage,
    setEditCompanyImage,
    openDeleteModal,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    handleCloseAddJobModal,
    editUserImage,
    setEditUserImage,
    editOwnerImage,
    openEditCompanyModal,
    handleCloseEditCompanyModal,
    handleOpenEditCompanyModal,
    setEditOwnerImage,
    deleteType,
    setDeleteType,
    handleOpenAddJobModal,
    openEditOwnerModal,
    handleCloseEditOwnerModal,
    handleOpenEditOwnerModal,
    openAddNationalityModal,
    handleCloseAddNationalityModal,
    handleOpenAddNationalityModal,
    openEditNationalityModal,
    handleCloseEditNationalityModal,
    handleOpenEditNationalityModal,
    openEditJobModal,
    handleCloseEditJobModal,
    handleOpenEditJobModal,
    editableOwnerData,
    setEditableOwnerData,
    addCompanyImage,
    setAddCompanyImage,
    addOwnerImage,
    setAddOwnerImage,
    editableJobData,
    setEditableJobData,
    editableNationalityData,
    setEditableNationalityData,
    editableUserData,
    searchForOwners,
    setSearchForOwners,
    searchForCompanies,
    searchForUsers,
    setSearchForUsers,
    setSearchForCompanies,
    searchForJobs,
    setSearchForJobs,
    searchForNationalities,
    setSearchForNationalities,
    setEditableUserData,
    addUserImage,
    setAddUserImage,
    editableCompanyData,
    setEditableCompanyData,
  };
  return (
    <FormsContext.Provider value={values}>{children}</FormsContext.Provider>
  );
};

export default FormsProvider;

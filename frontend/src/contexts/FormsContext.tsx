import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
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
  openJobModal: false,
  handleOpenJobModal: () => {},
  handleCloseJobModal: () => {},
  openOwnerModal: false,
  handleOpenOwnerModal: () => {},
  handleCloseOwnerModal: () => {},
  openUserModal: false,
  handleOpenUserModal: () => {},
  handleCloseUserModal: () => {},
  openCompanyModal: false,
  handleOpenCompanyModal: () => {},
  handleCloseCompanyModal: () => {},
  openNationalityModal: false,
  handleOpenNationalityModal: () => {},
  handleCloseNationalityModal: () => {},
  formType: "",
  setFormType: () => {},
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
  companyImage: "",
  setCompanyImage: () => {},
  ownerImage: "",
  setOwnerImage: () => {},
  userImage: "",
  setUserImage: () => {},
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
  const { company } = useSelector((state: RootState) => state.company);
  const { defaultAvatar, defaultCompany } = useContext(AppContext);

  //Loading Form
  const [formsLoading, setFormsLoading] = useState(false);

  //Form Type
  const [formType, setFormType] = useState("");

  //Search
  const [searchForOwners, setSearchForOwners] = useState("");
  const [searchForCompanies, setSearchForCompanies] = useState("");
  const [searchForUsers, setSearchForUsers] = useState("");
  const [searchForJobs, setSearchForJobs] = useState("");
  const [searchForNationalities, setSearchForNationalities] = useState("");

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

  const handleOpenDeleteModal = (type: string) => {
    setFormType(type);
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

  //Job Modal
  const [openJobModal, setOpenJobModal] = useState(false);

  const handleCloseJobModal = () => {
    setOpenJobModal(false);
  };

  const handleOpenJobModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableJobData(null);
    }
    setFormType(type);
    setOpenJobModal(true);
  };

  //Owner Modal
  const [openOwnerModal, setOpenOwnerModal] = useState(false);

  const handleCloseOwnerModal = () => {
    setOpenOwnerModal(false);
  };

  const handleOpenOwnerModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableOwnerData(null);
    }
    setFormType(type);
    setOpenOwnerModal(true);
  };

  //User Modal
  const [openUserModal, setOpenUserModal] = useState(false);

  const handleCloseUserModal = () => {
    setOpenUserModal(false);
  };

  const handleOpenUserModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableUserData(null);
    }
    setFormType(type);
    setOpenUserModal(true);
  };

  //Company Modal
  const [openCompanyModal, setOpenCompanyModal] = useState(false);

  const handleCloseCompanyModal = () => {
    setOpenCompanyModal(false);
  };

  const handleOpenCompanyModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableCompanyData(null);
    }
    setFormType(type);
    setOpenCompanyModal(true);
  };

  //Nationality Modal
  const [openNationalityModal, setOpenNationalityModal] = useState(false);

  const handleCloseNationalityModal = () => {
    setOpenNationalityModal(false);
  };

  const handleOpenNationalityModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableNationalityData(null);
    }
    setFormType(type);
    setOpenNationalityModal(true);
  };

  //Company Image
  const [companyImage, setCompanyImage] = useState<File | string>(
    defaultCompany
  );

  //Owner Image
  const [ownerImage, setOwnerImage] = useState<File | string>(defaultAvatar);

  //User Image
  const [userImage, setUserImage] = useState<File | string>(defaultAvatar);

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

  useEffect(() => {
    if (editableOwnerData) {
      setOwnerImage(editableOwnerData.avatar);
    }
    if (editableUserData) {
      setUserImage(editableUserData.avatar);
    }
    if (editableCompanyData) {
      setCompanyImage(editableCompanyData.logo);
    }
  }, [editableOwnerData, editableUserData, editableCompanyData]);

  useEffect(() => {
    if (company) {
      setEditableCompanyData(company);
    }
  }, [company]);

  const values = {
    formsLoading,
    handleCloseFormsLoading,
    handleOpenFormsLoading,
    formType,
    setFormType,
    openForgotPasswordModal,
    handleOpenForgotPasswordModal,
    handleCloseForgotPasswordModal,
    openJobModal,
    openUserModal,
    handleCloseUserModal,
    handleOpenUserModal,
    companyImage,
    setCompanyImage,
    openDeleteModal,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    handleCloseJobModal,
    userImage,
    setUserImage,
    ownerImage,
    openCompanyModal,
    handleCloseCompanyModal,
    handleOpenCompanyModal,
    setOwnerImage,
    handleOpenJobModal,
    openOwnerModal,
    handleCloseOwnerModal,
    handleOpenOwnerModal,
    openNationalityModal,
    handleCloseNationalityModal,
    handleOpenNationalityModal,
    editableOwnerData,
    setEditableOwnerData,
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
    editableCompanyData,
    setEditableCompanyData,
  };
  return (
    <FormsContext.Provider value={values}>{children}</FormsContext.Provider>
  );
};

export default FormsProvider;

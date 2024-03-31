import { createContext, useContext, useState } from "react";
<<<<<<< HEAD
import { FormsContextTypes } from "../types/contexts.types";
import {
  CompanyTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  UserTypes,
} from "../types/store.types";
=======
import { FormsContextTypes } from "../types/forms.types";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import { AppContext } from "./AppContext";

export const FormsContext = createContext<FormsContextTypes>({
  formsLoading: false,
  handleCloseFormsLoading: () => {},
  handleOpenFormsLoading: () => {},
<<<<<<< HEAD
  openDeleteModal: false,
  handleOpenDeleteModal: () => {},
  handleCloseDeleteModal: () => {},
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  openForgotPasswordModal: false,
  handleOpenForgotPasswordModal: () => {},
  handleCloseForgotPasswordModal: () => {},
  openAddJobModal: false,
  handleOpenAddJobModal: () => {},
  handleCloseAddJobModal: () => {},
  openEditJobModal: false,
  handleOpenEditJobModal: () => {},
  handleCloseEditJobModal: () => {},
<<<<<<< HEAD
  openEditOwnerModal: false,
  handleOpenEditOwnerModal: () => {},
  handleCloseEditOwnerModal: () => {},
  openEditCompanyModal: false,
  handleOpenEditCompanyModal: () => {},
  handleCloseEditCompanyModal: () => {},
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  openAddNationalityModal: false,
  handleOpenAddNationalityModal: () => {},
  handleCloseAddNationalityModal: () => {},
  openEditNationalityModal: false,
  handleOpenEditNationalityModal: () => {},
  handleCloseEditNationalityModal: () => {},
<<<<<<< HEAD
  deleteType: "",
  setDeleteType: () => {},
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
=======
  addCompanyImage: "",
  setAddCompanyImage: () => {},
  addOwnerImage: "",
  setAddOwnerImage: () => {},
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
});

const FormsProvider = ({ children }: { children: React.ReactNode }) => {
  const { defaultAvatar, defaultCompany } = useContext(AppContext);
<<<<<<< HEAD

  //Loading Form
  const [formsLoading, setFormsLoading] = useState(false);

  //Delete Type
  const [deleteType, setDeleteType] = useState("");

=======
  //Loading Form
  const [formsLoading, setFormsLoading] = useState(false);

>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  const handleCloseFormsLoading = () => {
    setFormsLoading(false);
  };

  const handleOpenFormsLoading = () => {
    setFormsLoading(true);
  };

<<<<<<< HEAD
  //Delete
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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
<<<<<<< HEAD

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
=======
  //Add Nationality

>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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

<<<<<<< HEAD
  //Edit Company Image
  const [editCompanyImage, setEditCompanyImage] = useState<File | string>(
    defaultCompany
  );

=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  //Add Owner Image
  const [addOwnerImage, setAddOwnerImage] = useState<File | string>(
    defaultAvatar
  );

<<<<<<< HEAD
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

=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  const values = {
    formsLoading,
    handleCloseFormsLoading,
    handleOpenFormsLoading,
    openForgotPasswordModal,
    handleOpenForgotPasswordModal,
    handleCloseForgotPasswordModal,
    openAddJobModal,
<<<<<<< HEAD
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
=======
    handleCloseAddJobModal,
    handleOpenAddJobModal,
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
    openAddNationalityModal,
    handleCloseAddNationalityModal,
    handleOpenAddNationalityModal,
    openEditNationalityModal,
    handleCloseEditNationalityModal,
    handleOpenEditNationalityModal,
    openEditJobModal,
    handleCloseEditJobModal,
    handleOpenEditJobModal,
<<<<<<< HEAD
    editableOwnerData,
    setEditableOwnerData,
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
    addCompanyImage,
    setAddCompanyImage,
    addOwnerImage,
    setAddOwnerImage,
<<<<<<< HEAD
    editableJobData,
    setEditableJobData,
    editableNationalityData,
    setEditableNationalityData,
    editableUserData,
    setEditableUserData,
    addUserImage,
    setAddUserImage,
    editableCompanyData,
    setEditableCompanyData,
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  };
  return (
    <FormsContext.Provider value={values}>{children}</FormsContext.Provider>
  );
};

export default FormsProvider;

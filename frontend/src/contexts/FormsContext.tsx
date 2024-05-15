import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FormsContextTypes } from "../types/contexts.types";
import {
  CompanyTypes,
  CustomerTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  ProTypes,
  UserTypes,
} from "../types/store.types";
import { AppContext } from "./AppContext";

export const FormsContext = createContext<FormsContextTypes>({
  formsLoading: false,
  handleCloseFormsLoading: () => {},
  handleOpenFormsLoading: () => {},
  openLinkToCompanyModal: false,
  handleOpenLinkToCompanyModal: () => {},
  handleCloseLinkToCompanyModal: () => {},
  openUploadEmployeesModal: false,
  handleOpenUploadEmployeesModal: () => {},
  handleCloseUploadEmployeesModal: () => {},
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
  openEmployeeModal: false,
  handleOpenEmployeeModal: () => {},
  handleCloseEmployeeModal: () => {},
  openCustomerModal: false,
  handleOpenCustomerModal: () => {},
  handleCloseCustomerModal: () => {},
  openProModal: false,
  handleOpenProModal: () => {},
  handleCloseProModal: () => {},
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
  searchForEmployees: "",
  setSearchForEmployees: () => {},
  searchForCustomers: "",
  setSearchForCustomers: () => {},
  searchForPros: "",
  setSearchForPros: () => {},
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
  employeeImage: "",
  setEmployeeImage: () => {},
  customerImage: "",
  setCustomerImage: () => {},
  proImage: "",
  setProImage: () => {},
  userImage: "",
  setUserImage: () => {},
  editableJobData: null,
  setEditableJobData: () => {},
  editableOwnerData: null,
  setEditableOwnerData: () => {},
  editableEmployeeData: null,
  setEditableEmployeeData: () => {},
  editableCustomerData: null,
  setEditableCustomerData: () => {},
  editableProData: null,
  setEditableProData: () => {},
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
  const [searchForEmployees, setSearchForEmployees] = useState("");
  const [searchForCustomers, setSearchForCustomers] = useState("");
  const [searchForPros, setSearchForPros] = useState("");
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

  //Upload Employees
  const [openUploadEmployeesModal, setOpenUploadEmployeesModal] =
    useState(false);

  const handleCloseUploadEmployeesModal = () => {
    setOpenUploadEmployeesModal(false);
  };

  const handleOpenUploadEmployeesModal = () => {
    setOpenUploadEmployeesModal(true);
  };

  //Link Company
  const [openLinkToCompanyModal, setOpenLinkToCompanyModal] = useState(false);

  const handleCloseLinkToCompanyModal = () => {
    setOpenLinkToCompanyModal(false);
  };

  const handleOpenLinkToCompanyModal = (type: string) => {
    setFormType(type);
    setOpenLinkToCompanyModal(true);
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

  //Employee Modal
  const [openEmployeeModal, setOpenEmployeeModal] = useState(false);

  const handleCloseEmployeeModal = () => {
    setOpenEmployeeModal(false);
  };

  const handleOpenEmployeeModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableEmployeeData(null);
    }
    setFormType(type);
    setOpenEmployeeModal(true);
  };

  //Customer Modal
  const [openCustomerModal, setOpenCustomerModal] = useState(false);

  const handleCloseCustomerModal = () => {
    setOpenCustomerModal(false);
  };

  const handleOpenCustomerModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableCustomerData(null);
    }
    setFormType(type);
    setOpenCustomerModal(true);
  };

  //Pro Modal
  const [openProModal, setOpenProModal] = useState(false);

  const handleCloseProModal = () => {
    setOpenProModal(false);
  };

  const handleOpenProModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableProData(null);
    }
    setFormType(type);
    setOpenProModal(true);
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

  //Employee Image
  const [employeeImage, setEmployeeImage] = useState<File | string>(
    defaultAvatar
  );

  //Customer Image
  const [customerImage, setCustomerImage] = useState<File | string>(
    defaultAvatar
  );

  //Pro Image
  const [proImage, setProImage] = useState<File | string>(defaultAvatar);

  //User Image
  const [userImage, setUserImage] = useState<File | string>(defaultAvatar);

  //Editable Job Data
  const [editableJobData, setEditableJobData] = useState<JobTypes | null>(null);

  //Editable Owner Data
  const [editableOwnerData, setEditableOwnerData] = useState<OwnerTypes | null>(
    null
  );

  //Editable Employee Data
  const [editableEmployeeData, setEditableEmployeeData] =
    useState<EmployeeTypes | null>(null);

  //Editable Customer Data
  const [editableCustomerData, setEditableCustomerData] =
    useState<CustomerTypes | null>(null);

  //Editable Pro Data
  const [editableProData, setEditableProData] = useState<ProTypes | null>(null);

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
    if (editableProData) {
      setProImage(editableProData.avatar);
    }
    if (editableEmployeeData) {
      setEmployeeImage(editableEmployeeData.avatar);
    }
    if (editableUserData) {
      setUserImage(editableUserData.avatar);
    }
    if (editableCompanyData) {
      setCompanyImage(editableCompanyData.logo);
    }
  }, [
    editableOwnerData,
    editableUserData,
    editableCompanyData,
    editableProData,
    editableEmployeeData,
  ]);

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
    openLinkToCompanyModal,
    handleCloseLinkToCompanyModal,
    handleOpenLinkToCompanyModal,
    handleCloseProModal,
    handleOpenProModal,
    openProModal,
    editableProData,
    setEditableProData,
    proImage,
    setProImage,
    searchForPros,
    setSearchForPros,
    searchForEmployees,
    setSearchForEmployees,
    openEmployeeModal,
    handleCloseEmployeeModal,
    handleOpenEmployeeModal,
    editableEmployeeData,
    setEditableEmployeeData,
    employeeImage,
    setEmployeeImage,
    customerImage,
    setCustomerImage,
    editableCustomerData,
    setEditableCustomerData,
    openCustomerModal,
    handleCloseCustomerModal,
    handleOpenCustomerModal,
    searchForCustomers,
    setSearchForCustomers,
    openUploadEmployeesModal,
    handleCloseUploadEmployeesModal,
    handleOpenUploadEmployeesModal,
  };
  return (
    <FormsContext.Provider value={values}>{children}</FormsContext.Provider>
  );
};

export default FormsProvider;

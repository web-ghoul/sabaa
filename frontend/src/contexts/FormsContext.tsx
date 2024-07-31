import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FormsContextTypes } from "../types/contexts.types";
import {
  CompanyTypes,
  CustomerTypes,
  EChannelTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  ProTypes,
  RoleTypes,
  SponsorTypes,
  TasheelTypes,
  TransactionTypes,
  UserTypes,
} from "../types/store.types";
import { AppContext } from "./AppContext";

export const FormsContext = createContext<FormsContextTypes>({
  formsLoading: false,
  handleCloseFormsLoading: () => {},
  handleOpenFormsLoading: () => {},
  formType: "",
  setFormType: () => {},
  searchForOwners: "",
  setSearchForOwners: () => {},
  searchForEmployees: "",
  setSearchForEmployees: () => {},
  searchForEChannels: "",
  setSearchForEChannels: () => {},
  searchForTasheel: "",
  setSearchForTasheel: () => {},
  searchForNatwasal: "",
  setSearchForNatwasal: () => {},
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
  searchForActivities: "",
  setSearchForActivities: () => {},
  searchForNationalities: "",
  setSearchForNationalities: () => {},
  searchForTransactions: "",
  setSearchForTransactions: () => {},
  companyImage: "",
  setCompanyImage: () => {},
  ownerImage: "",
  setOwnerImage: () => {},
  employeeImage: "",
  setEmployeeImage: () => {},
  customerImage: "",
  setCustomerImage: () => {},
  sponsorImage: "",
  setSponsorImage: () => {},
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
  editableSponsorData: null,
  setEditableSponsorData: () => {},
  editableProData: null,
  setEditableProData: () => {},
  editableNationalityData: null,
  setEditableNationalityData: () => {},
  editableUserData: null,
  setEditableUserData: () => {},
  editableCompanyData: null,
  setEditableCompanyData: () => {},
  editableEChannelData: null,
  setEditableEChannelData: () => {},
  editableTasheelData: null,
  setEditableTasheelData: () => {},
  editableNatwasalData: null,
  setEditableNatwasalData: () => {},
  editableTransactionData: null,
  setEditableTransactionData: () => {},
  editableRoleData: null,
  setEditableRoleData: () => {},
});

const FormsProvider = ({ children }: { children: React.ReactNode }) => {
  const { company } = useSelector((state: RootState) => state.company);
  const { defaultAvatar, defaultCompany } = useContext(AppContext);

  //Loading Form
  const [formsLoading, setFormsLoading] = useState(false);
  const handleCloseFormsLoading = () => {
    setFormsLoading(false);
  };

  const handleOpenFormsLoading = () => {
    setFormsLoading(true);
  };

  //Form Type
  const [formType, setFormType] = useState("");

  //Search
  const [searchForOwners, setSearchForOwners] = useState("");
  const [searchForEmployees, setSearchForEmployees] = useState("");
  const [searchForEChannels, setSearchForEChannels] = useState("");
  const [searchForTasheel, setSearchForTasheel] = useState("");
  const [searchForNatwasal, setSearchForNatwasal] = useState("");
  const [searchForCustomers, setSearchForCustomers] = useState("");
  const [searchForPros, setSearchForPros] = useState("");
  const [searchForCompanies, setSearchForCompanies] = useState("");
  const [searchForActivities, setSearchForActivities] = useState("");
  const [searchForUsers, setSearchForUsers] = useState("");
  const [searchForJobs, setSearchForJobs] = useState("");
  const [searchForNationalities, setSearchForNationalities] = useState("");
  const [searchForTransactions, setSearchForTransactions] = useState("");

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

  //Sponsor Image
  const [sponsorImage, setSponsorImage] = useState<File | string>(
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

  //Editable Sponsor Data
  const [editableSponsorData, setEditableSponsorData] =
    useState<SponsorTypes | null>(null);

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

  //Editable E-Channel Data
  const [editableEChannelData, setEditableEChannelData] =
    useState<EChannelTypes | null>(null);

  //Editable Tasheel Data
  const [editableTasheelData, setEditableTasheelData] =
    useState<TasheelTypes | null>(null);

  //Editable E-Channel Data
  const [editableNatwasalData, setEditableNatwasalData] =
    useState<TasheelTypes | null>(null);

  //Editable Transaction Data
  const [editableTransactionData, setEditableTransactionData] =
    useState<TransactionTypes | null>(null);

  //Editable Role Data
  const [editableRoleData, setEditableRoleData] = useState<RoleTypes | null>(
    null
  );

  useEffect(() => {
    if (editableOwnerData) {
      setOwnerImage(editableOwnerData.avatar);
    }
    if (editableProData) {
      setProImage(editableProData.avatar);
    }
    if (editableCustomerData) {
      setCustomerImage(editableCustomerData.avatar);
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
    editableCustomerData,
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
    companyImage,
    setCompanyImage,
    userImage,
    setUserImage,
    ownerImage,
    setOwnerImage,
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
    editableProData,
    setEditableProData,
    proImage,
    setProImage,
    searchForPros,
    setSearchForPros,
    searchForEmployees,
    setSearchForEmployees,
    editableEmployeeData,
    setEditableEmployeeData,
    employeeImage,
    setEmployeeImage,
    customerImage,
    setCustomerImage,
    editableCustomerData,
    setEditableCustomerData,
    searchForCustomers,
    setSearchForCustomers,
    searchForActivities,
    setSearchForActivities,
    editableSponsorData,
    setEditableSponsorData,
    sponsorImage,
    setSponsorImage,
    searchForEChannels,
    setSearchForEChannels,
    editableEChannelData,
    setEditableEChannelData,
    editableTasheelData,
    setEditableTasheelData,
    editableNatwasalData,
    setEditableNatwasalData,
    searchForTasheel,
    setSearchForTasheel,
    searchForNatwasal,
    setSearchForNatwasal,
    editableTransactionData,
    setEditableTransactionData,
    editableRoleData,
    setEditableRoleData,
    searchForTransactions,
    setSearchForTransactions,
  };
  return (
    <FormsContext.Provider value={values}>{children}</FormsContext.Provider>
  );
};

export default FormsProvider;

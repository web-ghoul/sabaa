import { ReactNode, createContext, useContext, useState } from "react";
import { EntitiesType, EntityType } from "../types/app.types";
import { ModalsContextTypes } from "../types/contexts.types";
import { ExcelsContext } from "./ExcelsContext";
import { FormsContext } from "./FormsContext";

export const ModalsContext = createContext<ModalsContextTypes>({
  openDownloadExcelModal: false,
  handleOpenDownloadExcelModal: () => {},
  handleCloseDownloadExcelModal: () => {},
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
  openConvertCustomerModal: false,
  handleOpenConvertCustomerModal: () => {},
  handleCloseConvertCustomerModal: () => {},
  openSponsorModal: false,
  handleOpenSponsorModal: () => {},
  handleCloseSponsorModal: () => {},
  openViewSponsorModal: false,
  handleOpenViewSponsorModal: () => {},
  handleCloseViewSponsorModal: () => {},
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
  openEChannelModal: false,
  handleOpenEChannelModal: () => {},
  handleCloseEChannelModal: () => {},
  openTasheelModal: false,
  handleOpenTasheelModal: () => {},
  handleCloseTasheelModal: () => {},
  openNatwasalModal: false,
  handleOpenNatwasalModal: () => {},
  handleCloseNatwasalModal: () => {},
  openTransactionModal: false,
  handleOpenTransactionModal: () => {},
  handleCloseTransactionModal: () => {},
  openNewLCModal: false,
  handleOpenNewLCModal: () => {},
  handleCloseNewLCModal: () => {},
  openRoleModal: false,
  handleOpenRoleModal: () => {},
  handleCloseRoleModal: () => {},
  openOptionModal: false,
  handleOpenOptionModal: () => {},
  handleCloseOptionModal: () => {},
});

const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const {
    setFormType,
    setEditableJobData,
    setEditableOwnerData,
    setEditableEmployeeData,
    setEditableCustomerData,
    setEditableSponsorData,
    setEditableProData,
    setEditableEChannelData,
    setEditableTasheelData,
    setEditableNatwasalData,
    setEditableUserData,
    setEditableCompanyData,
    setEditableNationalityData,
    setEditableTransactionData,
  } = useContext(FormsContext);

  const { setExcelType } = useContext(ExcelsContext);

  //Upload Employees
  const [openUploadEmployeesModal, setOpenUploadEmployeesModal] =
    useState(false);

  const handleCloseUploadEmployeesModal = () => {
    setOpenUploadEmployeesModal(false);
  };

  const handleOpenUploadEmployeesModal = () => {
    setOpenUploadEmployeesModal(true);
  };
  //Upload Employees

  //Download Excel
  const [openDownloadExcelModal, setOpenDownloadExcelModal] = useState(false);

  const handleCloseDownloadExcelModal = () => {
    setOpenDownloadExcelModal(false);
  };

  const handleOpenDownloadExcelModal = (
    type: "excel" | "all",
    entity: EntitiesType,
    ent?: EntityType
  ) => {
    setOpenDownloadExcelModal(true);
    setExcelType({ type: type, entity: entity, ent: ent });
  };
  //Download Excel

  //Link Company
  const [openLinkToCompanyModal, setOpenLinkToCompanyModal] = useState(false);

  const handleCloseLinkToCompanyModal = () => {
    setOpenLinkToCompanyModal(false);
  };

  const handleOpenLinkToCompanyModal = (type: string) => {
    setFormType(type);
    setOpenLinkToCompanyModal(true);
  };
  //Link Company

  //Delete
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenDeleteModal = (type: string) => {
    setFormType(type);
    setOpenDeleteModal(true);
  };
  //Delete

  //Forgot Password
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);

  const handleCloseForgotPasswordModal = () => {
    setOpenForgotPasswordModal(false);
  };

  const handleOpenForgotPasswordModal = () => {
    setOpenForgotPasswordModal(true);
  };
  //Forgot Password

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
  //Job Modal

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
  //Owner Modal

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
  //Employee Modal

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
  //Customer Modal

  //Convert Modal
  const [openConvertCustomerModal, setOpenConvertCustomerModal] =
    useState(false);

  const handleCloseConvertCustomerModal = () => {
    setOpenConvertCustomerModal(false);
  };

  const handleOpenConvertCustomerModal = () => {
    setOpenConvertCustomerModal(true);
  };
  //Convert Modal

  //Sponsor Modal
  const [openSponsorModal, setOpenSponsorModal] = useState(false);

  const handleCloseSponsorModal = () => {
    setOpenSponsorModal(false);
  };

  const handleOpenSponsorModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableSponsorData(null);
    }
    setFormType(type);
    setOpenSponsorModal(true);
  };
  //Sponsor Modal

  //View Sponsor Modal
  const [openViewSponsorModal, setOpenViewSponsorModal] = useState(false);

  const handleCloseViewSponsorModal = () => {
    setOpenViewSponsorModal(false);
  };

  const handleOpenViewSponsorModal = () => {
    setOpenViewSponsorModal(true);
  };
  //View Sponsor Modal

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
  //Pro Modal

  //E-Channel Modal
  const [openEChannelModal, setOpenEChannelModal] = useState(false);

  const handleCloseEChannelModal = () => {
    setOpenEChannelModal(false);
  };

  const handleOpenEChannelModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableEChannelData(null);
    }
    setFormType(type);
    setOpenEChannelModal(true);
  };
  //E-Channel Modal

  //Tasheel Modal
  const [openTasheelModal, setOpenTasheelModal] = useState(false);

  const handleCloseTasheelModal = () => {
    setOpenTasheelModal(false);
  };

  const handleOpenTasheelModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableTasheelData(null);
    }
    setFormType(type);
    setOpenTasheelModal(true);
  };
  //Tasheel Modal

  //Natwasal Modal
  const [openNatwasalModal, setOpenNatwasalModal] = useState(false);

  const handleCloseNatwasalModal = () => {
    setOpenNatwasalModal(false);
  };

  const handleOpenNatwasalModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableNatwasalData(null);
    }
    setFormType(type);
    setOpenNatwasalModal(true);
  };
  //Natwasal Modal

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
  //User Modal

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
  //Company Modal

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
  //Nationality Modal

  //Transaction Modal
  const [openTransactionModal, setOpenTransactionModal] = useState(false);

  const handleCloseTransactionModal = () => {
    setOpenTransactionModal(false);
  };

  const handleOpenTransactionModal = (type: string) => {
    if (type.startsWith("add")) {
      setEditableTransactionData(null);
    }
    setFormType(type);
    setOpenTransactionModal(true);
  };
  //Transaction Modal

  //New Labour Card Modal
  const [openNewLCModal, setOpenNewLCModal] = useState(false);

  const handleCloseNewLCModal = () => {
    setOpenNewLCModal(false);
  };

  const handleOpenNewLCModal = () => {
    setOpenNewLCModal(true);
  };
  //New Labour Card Modal

  //Permission Modal
  const [openRoleModal, setOpenRoleModal] = useState(false);

  const handleCloseRoleModal = () => {
    setOpenRoleModal(false);
  };

  const handleOpenRoleModal = (type: string) => {
    setOpenRoleModal(true);
    setFormType(type);
  };
  //Permission Modal

  //Selectors Modal
  const [openOptionModal, setOpenOptionModal] = useState(false);

  const handleCloseOptionModal = () => {
    setOpenOptionModal(false);
  };

  const handleOpenOptionModal = (type: string) => {
    setOpenOptionModal(true);
    setFormType(type);
  };
  //Selectors Modal

  const values = {
    openOptionModal,
    handleOpenOptionModal,
    handleCloseOptionModal,
    openForgotPasswordModal,
    handleOpenForgotPasswordModal,
    handleCloseForgotPasswordModal,
    openJobModal,
    openUserModal,
    handleCloseUserModal,
    handleOpenUserModal,
    openDeleteModal,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    handleCloseJobModal,
    openCompanyModal,
    handleCloseCompanyModal,
    handleOpenCompanyModal,
    handleOpenJobModal,
    openOwnerModal,
    handleCloseOwnerModal,
    handleOpenOwnerModal,
    openNationalityModal,
    handleCloseNationalityModal,
    handleOpenNationalityModal,
    openLinkToCompanyModal,
    handleCloseLinkToCompanyModal,
    handleOpenLinkToCompanyModal,
    handleCloseProModal,
    handleOpenProModal,
    openProModal,
    openEmployeeModal,
    handleCloseEmployeeModal,
    handleOpenEmployeeModal,
    openCustomerModal,
    handleCloseCustomerModal,
    handleOpenCustomerModal,
    openUploadEmployeesModal,
    handleCloseUploadEmployeesModal,
    handleOpenUploadEmployeesModal,
    openDownloadExcelModal,
    handleCloseDownloadExcelModal,
    handleOpenDownloadExcelModal,
    openSponsorModal,
    handleCloseSponsorModal,
    handleOpenSponsorModal,
    openConvertCustomerModal,
    handleCloseConvertCustomerModal,
    handleOpenConvertCustomerModal,
    openEChannelModal,
    handleCloseEChannelModal,
    handleOpenEChannelModal,
    openTasheelModal,
    handleCloseTasheelModal,
    handleOpenTasheelModal,
    openNatwasalModal,
    handleCloseNatwasalModal,
    handleOpenNatwasalModal,
    openViewSponsorModal,
    handleCloseViewSponsorModal,
    handleOpenViewSponsorModal,
    openTransactionModal,
    handleCloseTransactionModal,
    handleOpenTransactionModal,
    openNewLCModal,
    handleCloseNewLCModal,
    handleOpenNewLCModal,
    openRoleModal,
    handleOpenRoleModal,
    handleCloseRoleModal,
  };
  return (
    <ModalsContext.Provider value={values}>{children}</ModalsContext.Provider>
  );
};

export default ModalsProvider;

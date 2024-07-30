import { CircularProgress, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { PrimaryIconButton } from "../../mui/buttons/PrimaryIconButton";
import { ButtonTypes } from "../../types/components.types";

const Button = ({
  title,
  icon,
  bg,
  variant,
  handling,
  type,
  loading,
}: ButtonTypes) => {
  const classes = `${
    bg === "excel"
      ? `!bg-excel hover:!bg-green-950`
      : bg && `${bg} hover:${bg.replace("5", "6")}`
  }`;
  const {
    setEditableCompanyData,
    setEditableEmployeeData,
    setEditableCustomerData,
    setEditableEChannelData,
    setEditableTasheelData,
    setEditableNatwasalData,
    setEditableTransactionData,
  } = useContext(FormsContext);
  const {
    handleOpenUserModal,
    handleOpenOwnerModal,
    handleOpenJobModal,
    handleOpenNationalityModal,
    handleOpenCustomerModal,
    handleOpenEChannelModal,
    handleOpenTasheelModal,
    handleOpenNatwasalModal,
    handleOpenTransactionModal,
  } = useContext(ModalsContext);
  const navigate = useNavigate();

  const handleClick = () => {
    const newTitle = title?.toLowerCase();
    const newVar = variant?.toLowerCase();
    if (newVar === "under development") {
      handleAlert({ msg: "Under Development..." });
    } else if (newTitle === "add owner") {
      handleOpenOwnerModal("addOwner");
    } else if (newTitle === "add user") {
      handleOpenUserModal("addUser");
    } else if (newTitle === "add job") {
      handleOpenJobModal("addJob");
    } else if (newTitle === "add nationality") {
      handleOpenNationalityModal("addNationality");
    } else if (newTitle === "add company") {
      setEditableCompanyData(null);
      navigate(`${import.meta.env.VITE_ADD_COMPANY_ROUTE}`);
    } else if (newTitle === "add employee") {
      setEditableEmployeeData(null);
      navigate(`${import.meta.env.VITE_ADD_EMPLOYEE_ROUTE}`);
    } else if (newTitle === "add customer") {
      setEditableCustomerData(null);
      handleOpenCustomerModal("addCustomer");
    } else if (newTitle === "add e-channel") {
      setEditableEChannelData(null);
      handleOpenEChannelModal("addEChannel");
    } else if (newTitle === "add tasheel") {
      setEditableTasheelData(null);
      handleOpenTasheelModal("addTasheel");
    } else if (newTitle === "add natwasal") {
      setEditableNatwasalData(null);
      handleOpenNatwasalModal("addNatwasal");
    } else if (newTitle === "add transaction") {
      setEditableTransactionData(null);
      handleOpenTransactionModal("addTransaction");
    } else if (newTitle === "edit") {
      if (newVar === "owner") {
        handleOpenOwnerModal("editOwner");
      } else if (newVar === "user") {
        handleOpenUserModal("editUser");
      } else if (newVar === "job") {
        handleOpenJobModal("editJob");
      } else if (newVar === "nationality") {
        handleOpenNationalityModal("editNationality");
      }
    }
  };

  const loadingIcon = (
    <CircularProgress sx={{ color: (theme) => theme.palette.common.white }} />
  );

  return title ? (
    <PrimaryButton
      type={type || "button"}
      onClick={handling || handleClick}
      className={classes}
      loadingPosition={"center"}
      loading={loading}
      loadingIndicator={loadingIcon}
    >
      {icon}
      <Typography variant="button">{title}</Typography>
    </PrimaryButton>
  ) : (
    <PrimaryIconButton
      onClick={handling}
      loadingPosition={"center"}
      loading={loading}
      loadingIndicator={loadingIcon}
      className={classes}
    >
      {icon}
    </PrimaryIconButton>
  );
};

export default Button;

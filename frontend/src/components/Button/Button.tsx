import { Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { PrimaryIconButton } from "../../mui/buttons/PrimaryIconButton";
import { ButtonTypes } from "../../types/components.types";

const Button = ({ title, icon, bg, variant, handling }: ButtonTypes) => {
  const classes = `${
    bg === "excel"
      ? `!bg-excel hover:!bg-green-950`
      : bg && `${bg} hover:${bg.replace("5", "6")}`
  }`;
  const {
    handleOpenUserModal,
    handleOpenOwnerModal,
    handleOpenJobModal,
    handleOpenNationalityModal,
    setEditableCompanyData,
    setEditableEmployeeData,
    setEditableCustomerData,
  } = useContext(FormsContext);
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
      navigate(`${import.meta.env.VITE_ADD_CUSTOMER_ROUTE}`);
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

  return title ? (
    <PrimaryButton onClick={handling || handleClick} className={classes}>
      {icon}
      <Typography variant="button">{title}</Typography>
    </PrimaryButton>
  ) : (
    <PrimaryIconButton onClick={handling} className={classes}>
      {icon}
    </PrimaryIconButton>
  );
};

export default Button;

import {
  CancelRounded,
  DeleteRounded,
  EditRounded,
  HistoryRounded,
  JoinFullRounded,
  PersonAddRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import TableMenuItem from "../TableMenuItem";

const OwnersTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { editableOwnerData } = useContext(FormsContext);
  const {
    handleOpenOwnerModal,
    handleOpenDeleteModal,
    handleOpenLinkToCompanyModal,
  } = useContext(ModalsContext);
  const { handleDeleteOwnerFromSheet } = useContext(ExcelsContext);

  const handleView = () => {
    navigate(
      `${import.meta.env.VITE_OWNERS_ROUTE}/${
        editableOwnerData && editableOwnerData._id
      }`
    );
  };

  const handleLink = () => {
    handleOpenLinkToCompanyModal("linkOwner");
  };

  const handleEdit = () => {
    handleOpenOwnerModal("editOwner");
  };

  const handleAddSponsoredPerson = () => {};

  const handleCancelResidence = () => {};

  const handleRenewResidence = () => {};

  const handleDelete = () => {
    if (sheet) {
      handleDeleteOwnerFromSheet();
    } else {
      handleOpenDeleteModal("owner");
    }
  };

  useEffect(() => {
    setSheet(pathname === `${import.meta.env.VITE_UPLOAD_OWNERS_ROUTE}`);
  }, [pathname, sheet]);

  return (
    <Menu
      className={`grid justify-stretch items-center gap-0`}
      open={Boolean(openTableMenu)}
      elevation={3}
      onClose={handleCloseTableMenu}
      anchorEl={openTableMenu}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {!sheet && (
        <TableMenuItem
          icon={<VisibilityRounded />}
          title={"View"}
          handling={handleView}
        />
      )}
      {!sheet && (
        <TableMenuItem
          icon={<JoinFullRounded />}
          title={"Link"}
          handling={handleLink}
        />
      )}
      <TableMenuItem
        icon={<EditRounded />}
        title={"Edit"}
        handling={handleEdit}
      />
      <TableMenuItem
        icon={<PersonAddRounded />}
        title={"Add Sponsored Persons"}
        handling={handleAddSponsoredPerson}
      />
      <TableMenuItem
        icon={<HistoryRounded />}
        title={"Renew Residence"}
        handling={handleRenewResidence}
      />
      <TableMenuItem
        icon={<CancelRounded />}
        title={"Cancel Residence"}
        handling={handleCancelResidence}
      />
      <TableMenuItem
        icon={<DeleteRounded />}
        title={"Delete"}
        handling={handleDelete}
      />
    </Menu>
  );
};

export default OwnersTableMenu;

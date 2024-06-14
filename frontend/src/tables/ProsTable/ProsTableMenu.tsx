import {
  DeleteRounded,
  EditRounded,
  JoinFullRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import TableMenuItem from "../TableMenuItem";

const ProsTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    handleOpenProModal,
    handleOpenDeleteModal,
    handleOpenLinkToCompanyModal,
    editableProData,
  } = useContext(FormsContext);
  const { handleDeleteProFromSheet } = useContext(ExcelsContext);

  const handleView = () => {
    navigate(
      `${import.meta.env.VITE_PROS_ROUTE}/${
        editableProData && editableProData._id
      }`
    );
  };

  const handleLink = () => {
    handleOpenLinkToCompanyModal("linkPro");
  };

  const handleEdit = () => {
    handleOpenProModal("editPro");
  };

  const handleDelete = () => {
    if (sheet) {
      handleDeleteProFromSheet();
    } else {
      handleOpenDeleteModal("pro");
    }
  };

  useEffect(() => {
    setSheet(pathname === `${import.meta.env.VITE_UPLOAD_PROS_ROUTE}`);
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
        icon={<DeleteRounded />}
        title={"Delete"}
        handling={handleDelete}
      />
    </Menu>
  );
};

export default ProsTableMenu;

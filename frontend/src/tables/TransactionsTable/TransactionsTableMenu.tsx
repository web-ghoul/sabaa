import {
  AddCardRounded,
  DeleteRounded,
  EditRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import TableMenuItem from "../TableMenuItem";

const TransactionsTableMenu = ({ type }: { type: string }) => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  // const navigate = useNavigate();
  const { editableTransactionData } = useContext(FormsContext);
  const {
    handleOpenTransactionModal,
    handleOpenDeleteModal,
    handleOpenNewLCModal,
  } = useContext(ModalsContext);
  const { handleDeleteOwnerFromSheet } = useContext(ExcelsContext);

  const handleView = () => {};

  const handleEdit = () => {
    handleOpenTransactionModal("editTransaction");
  };

  const handleNewLc = () => {
    handleOpenNewLCModal();
  };

  const handleDelete = () => {
    if (sheet) {
      handleDeleteOwnerFromSheet();
    } else {
      handleOpenDeleteModal("transaction");
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
      <TableMenuItem
        icon={<VisibilityRounded />}
        title={"View"}
        handling={handleView}
      />
      <TableMenuItem
        icon={<EditRounded />}
        title={"Edit"}
        handling={handleEdit}
      />
      {(type === "pre" ||
        type === "new" ||
        (editableTransactionData &&
          editableTransactionData.status.toLowerCase() === "approved")) && (
        <TableMenuItem
          icon={<AddCardRounded />}
          title={"New Labour Card"}
          handling={handleNewLc}
        />
      )}
      <TableMenuItem
        icon={<DeleteRounded />}
        title={"Delete"}
        handling={handleDelete}
      />
    </Menu>
  );
};

export default TransactionsTableMenu;

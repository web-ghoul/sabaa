import {
  AddCircleOutlineRounded,
  ApprovalRounded,
  DeleteRounded,
  EditRounded,
  EventNoteRounded,
  PublishedWithChangesRounded,
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
  const { editableTransactionData } = useContext(FormsContext);
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  const { handleOpenTransactionModal, handleOpenDeleteModal } =
    useContext(ModalsContext);
  const { handleDeleteOwnerFromSheet } = useContext(ExcelsContext);
  const { handleOpenViewLogsModal } = useContext(ModalsContext);

  const handleView = () => {};

  const handleEdit = () => {
    if (pathname === `${import.meta.env.VITE_TRANSACTIONS_PRE_ROUTE}`) {
      handleOpenTransactionModal("editTransaction");
    } else if (pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`) {
      handleOpenTransactionModal("editNewLCTransaction");
    } else if (
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
    ) {
      handleOpenTransactionModal("editRenewLCTransaction");
    }
  };

  const handleApprovedStatus = () => {
    handleOpenTransactionModal("approvedTransaction");
  };

  const handleNewLC = () => {
    handleOpenTransactionModal("newLCTransaction");
  };

  const handleRenewLC = () => {
    handleOpenTransactionModal("renewLCTransaction");
  };

  const handleViewLogs = () => {
    handleOpenViewLogsModal();
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
      {type === "pre" && editableTransactionData?.status !== "Approved" && (
        <TableMenuItem
          icon={<ApprovalRounded />}
          title={"Approved Status"}
          handling={handleApprovedStatus}
        />
      )}
      {type === "pre" && editableTransactionData?.status === "Approved" && (
        <TableMenuItem
          icon={<AddCircleOutlineRounded />}
          title={"New LC"}
          handling={handleNewLC}
        />
      )}
      {type === "new" &&
        editableTransactionData?.cardType !==
          "ELECTRONIC WORK PERMIT FOR PART TIME" && (
          <TableMenuItem
            icon={<PublishedWithChangesRounded />}
            title={"Renew LC"}
            handling={handleRenewLC}
          />
        )}
      <TableMenuItem
        icon={<EventNoteRounded />}
        title={"Logs"}
        handling={handleViewLogs}
      />
      <TableMenuItem
        icon={<DeleteRounded />}
        title={"Delete"}
        handling={handleDelete}
      />
    </Menu>
  );
};

export default TransactionsTableMenu;

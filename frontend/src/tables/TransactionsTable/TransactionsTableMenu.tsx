import {
  DeleteRounded,
  EditRounded,
  JoinFullRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import TableMenuItem from "../TableMenuItem";

const TransactionsTableMenu = ({ type }: { type: string }) => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();
  // const navigate = useNavigate();
  // const { editableTransactionData } = useContext(FormsContext);
  const {
    handleOpenTransactionModal,
    handleOpenDeleteModal,
    handleOpenLinkToCompanyModal,
  } = useContext(ModalsContext);
  const { handleDeleteOwnerFromSheet } = useContext(ExcelsContext);

  const handleView = () => {};

  const handleLink = () => {
    handleOpenLinkToCompanyModal("linkOwner");
  };

  const handleEditAll = () => {
    handleOpenTransactionModal("editPreTransaction");
  };

  const handleEdit = () => {
    // handleOpenTransactionModal("editOwner");
  };

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
    <>
      {type === "all" && (
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
            handling={handleEditAll}
          />
          <TableMenuItem
            icon={<DeleteRounded />}
            title={"Delete"}
            handling={handleDelete}
          />
        </Menu>
      )}

      {type === "pre" && (
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
            icon={<JoinFullRounded />}
            title={"Link"}
            handling={handleLink}
          />
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
      )}

      {type === "new" && (
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
            icon={<JoinFullRounded />}
            title={"Link"}
            handling={handleLink}
          />
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
      )}

      {type === "renew" && (
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
            icon={<JoinFullRounded />}
            title={"Link"}
            handling={handleLink}
          />
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
      )}
    </>
  );
};

export default TransactionsTableMenu;

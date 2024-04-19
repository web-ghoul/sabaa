import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import TableMenuItem from "../TableMenuItem";

const JobsTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const { handleOpenJobModal, handleOpenDeleteModal } =
    useContext(FormsContext);
  const { handleDeleteJobFromSheet } = useContext(ExcelsContext);
  const [sheet, setSheet] = useState(false);
  const { pathname } = useLocation();

  const handleDelete = () => {
    if (sheet) {
      handleDeleteJobFromSheet();
    } else {
      handleOpenDeleteModal("job");
    }
  };

  useEffect(() => {
    setSheet(pathname === `${import.meta.env.VITE_UPLOAD_JOBS_ROUTE}`);
  }, [pathname]);

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
        icon={<EditRounded />}
        title={"Edit"}
        handling={() => handleOpenJobModal("editJob")}
      />
      <TableMenuItem
        icon={<DeleteRounded />}
        title={"Delete"}
        handling={handleDelete}
      />
    </Menu>
  );
};

export default JobsTableMenu;

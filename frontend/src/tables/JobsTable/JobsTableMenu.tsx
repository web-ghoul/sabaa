import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
<<<<<<< HEAD
import { ExcelsContext } from "../../contexts/ExcelsContext";
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import { FormsContext } from "../../contexts/FormsContext";
import TableMenuItem from "../TableMenuItem";

const JobsTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const { handleOpenEditJobModal } = useContext(FormsContext);
<<<<<<< HEAD
  const { handleDeleteJobFromSheet } = useContext(ExcelsContext);

=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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
        handling={handleOpenEditJobModal}
      />
      <TableMenuItem
        icon={<DeleteRounded />}
        title={"Delete"}
        color={`text-error`}
<<<<<<< HEAD
        handling={handleDeleteJobFromSheet}
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      />
    </Menu>
  );
};

export default JobsTableMenu;

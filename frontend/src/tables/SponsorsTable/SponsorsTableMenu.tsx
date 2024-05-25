import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import TableMenuItem from "../TableMenuItem";

const SponsorsTableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  const { handleOpenSponsorModal, handleOpenDeleteModal } =
    useContext(FormsContext);

  const handleEdit = () => {
    handleOpenSponsorModal("editSponsor");
  };

  const handleDelete = () => {
    handleOpenDeleteModal("sponsor");
  };

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

export default SponsorsTableMenu;

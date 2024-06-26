import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import Item from "./Item";

const TableMenu = () => {
  const { openTableMenu, handleCloseTableMenu } = useContext(AppContext);
  return (
    <Menu
      className={`grid justify-stretch items-center gap-0`}
      open={Boolean(openTableMenu)}
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
      <Item icon={<EditRounded />} title={"Edit"} />
      <Item icon={<DeleteRounded />} title={"Delete"} color={`text-error`} />
    </Menu>
  );
};

export default TableMenu;

import { MenuItem, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { MenuItemTypes } from "../types/components.types";

const TableMenuItem = ({ icon, title, color, handling }: MenuItemTypes) => {
  const { handleCloseTableMenu } = useContext(AppContext);
  const handleClick = () => {
    if (handling) {
      handling();
    }
    handleCloseTableMenu();
  };
  return (
    <MenuItem
      onClick={handleClick}
      className={`flex justify-start items-start gap-2 ${
        title.toLowerCase() === "view"
          ? "!text-green-500"
          : title.toLowerCase() === "edit"
          ? "!text-blue-500"
          : title.toLowerCase() === "delete"
          ? "!text-red-500"
          : title.toLowerCase() === "link" && "!text-zinc-500"
      } !${color}`}
      sx={{ "& >svg": { fontSize: "18px" } }}
    >
      {icon}
      <Typography variant="subtitle2" className="capitalize">
        {title}
      </Typography>
    </MenuItem>
  );
};

export default TableMenuItem;

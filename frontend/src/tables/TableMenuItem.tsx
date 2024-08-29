import { MenuItem, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { MenuItemTypes } from "../types/components.types";

const TableMenuItem = ({ icon, title, color, handling }: MenuItemTypes) => {
  const t = title.toLowerCase();
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
      className={`flex justify-start items-start gap-2  ${
        t === "view"
          ? "!text-green-500"
          : t === "approved status"
          ? "!text-teal-500"
          : t === "edit"
          ? "!text-blue-500"
          : t === "delete"
          ? "!text-red-500"
          : t === "convert"
          ? "!text-purple-500"
          : t === "link"
          ? "!text-zinc-500"
          : t === "add sponsored persons"
          ? "!text-orange-700"
          : t === "renew residence"
          ? "!text-green-900"
          : t === "cancel residence"
          ? "!text-blue-900"
          : t === "new labour card" && "!text-amber-700"
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

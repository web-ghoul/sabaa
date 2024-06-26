import { MenuItem, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { MenuItemTypes } from "../../types/components.types";

const Item = ({ icon, title, color, handling }: MenuItemTypes) => {
  const { handleCloseUserMenu } = useContext(AppContext);
  const handleClick = () => {
    if (handling) {
      handling();
    }
    handleCloseUserMenu();
  };
  return (
    <MenuItem
      onClick={handleClick}
      className={`flex justify-start items-start gap-2 ${color} hover:!text-primary `}
      sx={{ "& >svg": { fontSize: "18px" } }}
    >
      {icon}
      <Typography variant="subtitle2" className="capitalize">
        {title}
      </Typography>
    </MenuItem>
  );
};

export default Item;

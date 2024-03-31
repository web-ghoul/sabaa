import { AccountCircleRounded, LogoutRounded } from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { handleAlert } from "../../functions/handleAlert";
import { logout } from "../../store/auth";
import Item from "./Item";

const UserMenu = () => {
  const { openUserMenu, handleCloseUserMenu } = useContext(AppContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProfile = () => {
    navigate(`${import.meta.env.VITE_PROFILE_ROUTE}`);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleAlert({ msg: "Logout Successfully", status: "success" });
    navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`);
  };

  return (
    <Menu
      className={`grid justify-stretch items-center gap-0`}
      open={Boolean(openUserMenu)}
      onClose={handleCloseUserMenu}
      anchorEl={openUserMenu}
      elevation={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Item
        icon={<AccountCircleRounded />}
        title={"Profile"}
        handling={handleProfile}
      />
      <Item
        icon={<LogoutRounded />}
        title={"Logout"}
        color={`!text-error`}
        handling={handleLogout}
      />
    </Menu>
  );
};

export default UserMenu;

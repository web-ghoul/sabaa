import { AccountCircleRounded, LogoutRounded } from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useContext } from "react";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { handleAlert } from "../../functions/handleAlert";
import { logout } from "../../store/auth";
=======
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import Item from "./Item";

const UserMenu = () => {
  const { openUserMenu, handleCloseUserMenu } = useContext(AppContext);
  const navigate = useNavigate();
<<<<<<< HEAD
  const dispatch = useDispatch();

  const handleProfile = () => {
    navigate(`${import.meta.env.VITE_PROFILE_ROUTE}`);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleAlert({ msg: "Logout Successfully", status: "success" });
    navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`);
  };

=======

  const handleLogout = () => {
    navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`);
  };
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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
<<<<<<< HEAD
      <Item
        icon={<AccountCircleRounded />}
        title={"Profile"}
        handling={handleProfile}
      />
=======
      <Item icon={<AccountCircleRounded />} title={"Profile"} />
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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

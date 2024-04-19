import {
  AdminPanelSettingsRounded,
  KeyboardArrowDownRounded,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AppContext } from "../../contexts/AppContext";
import { UserBoxTypes } from "../../types/components.types";

const UserBox = ({
  avatar,
  username,
  role,
  menu,
  head,
  size,
  res,
  variant
}: UserBoxTypes) => {
  const { handleOpenUserMenu, defaultAvatar ,defaultCompany} = useContext(AppContext);

  return (
    <Box
      className={`flex justify-start items-center gap-2 sm:!gap-1 ${
        res && "sm:grid sm:justify-center"
      }`}
    >
      <Box
        className={`flex justify-center items-center overflow-hidden rounded-full ${
          res && "sm:m-auto"
        } ${
          size === "3xlarge"
            ? "w-[110px] h-[110px] md:w-[90px] md:h-[90px] sm:!w-[75px] sm:!h-[75px]"
            : size === "2xlarge"
            ? "w-[90px] h-[90px] md:w-[75px] md:h-[75px] sm:!w-[60px] sm:!h-[60px]"
            : size === "xlarge"
            ? "w-[70px] h-[70px] md:w-[45px] md:h-[45px] sm:!w-[40px] sm:!h-[40px]"
            : size === "large"
            ? "w-[50px] h-[50px] md:w-[45px] md:h-[45px] sm:!w-[40px] sm:!h-[40px]"
            : size === "medium"
            ? "w-[40px] h-[40px] md:w-[35px] md:h-[35px] sm:!w-[30px] sm:!h-[30px]"
            : "w-[30px] h-[30px] md:w-[28px] md:h-[28px] sm:w-[25px] sm:h-[25px]"
        }`}
      >
        <LazyLoadImage
          alt={"avatar"}
          src={
            avatar
              ? `${import.meta.env.VITE_SERVER_URL}/${avatar}`
              : variant === "company" ? defaultCompany : defaultAvatar
          }
        />
      </Box>
      <Box className={`grid justify-start items-center gap-1`}>
        <Typography variant={head || "h6"}>{username}</Typography>
        {role && (
          <Box className={`flex justify-start items-center gap-1`}>
            <AdminPanelSettingsRounded
              sx={{ fontSize: "15px" }}
              className={`text-primary`}
            />
            <Typography variant="subtitle1" className={`text-primary`}>
              {role}
            </Typography>
          </Box>
        )}
      </Box>
      {menu && (
        <IconButton
          onClick={handleOpenUserMenu}
          className={`hover:text-primary`}
        >
          <KeyboardArrowDownRounded />
        </IconButton>
      )}
    </Box>
  );
};

export default UserBox;

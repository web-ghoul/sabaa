import { ViewListRounded } from "@mui/icons-material";
import { Box, IconButton, styled, useMediaQuery } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { SidebarContext } from "../../contexts/SidebarsContext.tsx";
import { PrimaryContainer } from "../../mui/boxes&containers/PrimaryContainer.ts";
import { RootState } from "../../store/store.ts";
import SpecialsButtons from "../SpecialsButtons/SpecialsButtons.tsx";
import LoadingUserBox from "../UserBox/LoadingUserBox.tsx";
import UserBox from "../UserBox/UserBox.tsx";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Header = () => {
  const { openSidebar, sidebarWidth, handleOpenSidebar } =
    useContext(SidebarContext);
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  const [top, setTop] = useState(true);

  window.addEventListener("scroll", () => {
    setTop(window.scrollY === 0);
  });

  const mdScreen = useMediaQuery("(max-width:992px)");

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: sidebarWidth,
      width: `calc(100% - ${sidebarWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar
      position="fixed"
      open={openSidebar}
      className={`!bg-white h-[70px] md:h-[60px] sm:!h-[50px] ${
        top && "!shadow-none"
      }`}
    >
      <PrimaryContainer>
        <Box
          className={`!flex justify-between items-center gap-4 relative md:!pl-[0px]`}
          sx={{ paddingLeft: `${sidebarWidth}` }}
        >
          <Box className={`flex justify-start items-center gap-2`}>
            {mdScreen && (
              <IconButton onClick={handleOpenSidebar}>
                <ViewListRounded
                  className={`!text-[25px] sm:!text-[20px] text-primary`}
                />
              </IconButton>
            )}
            <SpecialsButtons />
          </Box>
          <Box className={`flex justify-end items-center gap-6`}>
            {!isLoading && user ? (
              <UserBox
                size={"medium"}
                username={user.name}
                role={user.role}
                menu={true}
                avatar={user.avatar}
              />
            ) : (
              <LoadingUserBox size={"medium"} />
            )}
          </Box>
        </Box>
      </PrimaryContainer>
    </AppBar>
  );
};

export default Header;

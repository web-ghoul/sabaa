import { Box, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { useContext } from "react";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { SidebarContext } from "../../contexts/SidebarsContext.tsx";
import { PrimaryContainer } from "../../mui/boxes&containers/PrimaryContainer.ts";
import { RootState } from "../../store/store.ts";
=======
import { SidebarContext } from "../../contexts/SidebarsContext.tsx";
import { PrimaryContainer } from "../../mui/boxes&containers/PrimaryContainer.ts";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import BadgeNotification from "../BadgeNotification/BadgeNotification.tsx";
import Logo from "../Logo/Logo.tsx";
import UserBox from "../UserBox/UserBox.tsx";
import UserMenu from "../UserMenu/UserMenu.tsx";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const Header = () => {
  const { openSidebar, sidebarWidth, handleCloseSidebar } =
    useContext(SidebarContext);
<<<<<<< HEAD
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

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
      className={`!bg-white h-[70px]`}
      onClick={handleCloseSidebar}
    >
      <PrimaryContainer>
        <Box
          className={`!flex justify-between items-center gap-4 relative`}
          sx={{ paddingLeft: `${sidebarWidth}` }}
        >
          <Box className={`flex justify-start items-center gap-4`}>
            <Logo />
          </Box>
          <Box className={`flex justify-end items-center gap-6`}>
            <BadgeNotification not={4} />
<<<<<<< HEAD
            {!isLoading && user && (
              <UserBox
                size={"medium"}
                username={user.name}
                role={user.role}
                menu={true}
                avatar={user.avatar}
              />
            )}
=======
            <UserBox
              size={"medium"}
              username={"webGhoul"}
              role={"admin"}
              menu={true}
            />
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
          </Box>
          <UserMenu />
        </Box>
      </PrimaryContainer>
    </AppBar>
  );
};

export default Header;

import { Box, CSSObject, styled, Theme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarsContext";
import Head from "./Head";
import Items from "./Items";

const Sidebar = () => {
  const { sidebarWidth } = useContext(SidebarContext);

  const openedMixin = (theme: Theme): CSSObject => ({
    width: sidebarWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: sidebarWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{ "& > div": { borderRadius: "0 20px 20px 0" }, zIndex: "1300" }}
      className={`[&>div]:bg-secondary`}
    >
      <Box
        className={`transition-all w-[${sidebarWidth}] grid justify-stretch items-center grid-rows-[auto,1fr] h-full overflow-hidden`}
      >
        <Head />
        <Items />
      </Box>
    </Drawer>
  );
};

export default Sidebar;

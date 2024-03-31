import {
  ApartmentRounded,
  AssessmentRounded,
  AssignmentIndRounded,
  BadgeRounded,
  EmailRounded,
  FlagRounded,
  FolderRounded,
  GridViewRounded,
  GroupRounded,
  ListAltRounded,
  MenuOpenRounded,
  MenuRounded,
  PendingActionsRounded,
  ReceiptLongRounded,
  SettingsRounded,
  WorkRounded,
} from "@mui/icons-material";
import { Box, CSSObject, IconButton, styled, Theme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { useContext } from "react";
import { FaHandshakeSimple } from "react-icons/fa6";
import { SidebarContext } from "../../contexts/SidebarsContext";
import Logo from "../Logo/Logo";
import Item from "./Item";

const Sidebar = () => {
  const { openSidebar, handleCloseSidebar, handleOpenSidebar, sidebarWidth } =
    useContext(SidebarContext);

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
        <Box
          className={`h-[70px] w-full bg-secondaryLight flex ${
            openSidebar ? "justify-between px-4" : "justify-center"
          }  items-center`}
        >
          {openSidebar ? (
            <>
              <Logo color={"light"} />
              <IconButton onClick={handleCloseSidebar}>
                <MenuOpenRounded className={`text-primary`} />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={handleOpenSidebar}>
              <MenuRounded className={`text-primary`} />
            </IconButton>
          )}
        </Box>
        <Box
          className={`grid items-center h-full ${
            openSidebar ? "justify-stretch" : "justify-center"
          }`}
        >
          <Item
            icon={<GridViewRounded />}
            title="Dashboard"
            url={`${import.meta.env.VITE_DASHBOARD_ROUTE}`}
          />
          <Item
            icon={<AssignmentIndRounded />}
            title="Owners"
            url={`${import.meta.env.VITE_OWNERS_ROUTE}`}
          />
          <Item
            icon={<BadgeRounded />}
            title="Employees"
            url={`${import.meta.env.VITE_EMPLOYEES_ROUTE}`}
          />
          <Item
            icon={<ApartmentRounded />}
            title="Companies"
            url={`${import.meta.env.VITE_COMPANIES_ROUTE}`}
          />
          <Item
            icon={<FaHandshakeSimple />}
            title="Public Relation Officers"
            url={`${import.meta.env.VITE_PUBLIC_RELATION_OFFICERS_ROUTE}`}
          />
          <Item
            icon={<WorkRounded />}
            title="Jobs"
            url={`${import.meta.env.VITE_JOBS_ROUTE}`}
          />
          <Item
            icon={<FlagRounded />}
            title="Nationalities"
            url={`${import.meta.env.VITE_NATIONALITIES_ROUTE}`}
          />
          <Item
            icon={<ReceiptLongRounded />}
            title="Transactions"
            url={`${import.meta.env.VITE_TRANSACTIONS_ROUTE}`}
          />
          <Item
            icon={<EmailRounded />}
            title="Mails"
            url={`${import.meta.env.VITE_MAILS_ROUTE}`}
          />
          <Item
            icon={<PendingActionsRounded />}
            title="Activities"
            url={`${import.meta.env.VITE_ACTIVITIES_ROUTE}`}
          />
          <Item
            icon={<AssessmentRounded />}
            title="Reports"
            url={`${import.meta.env.VITE_REPORTS_ROUTE}`}
          />
          <Item
            icon={<ListAltRounded />}
            title="Todo List"
            url={`${import.meta.env.VITE_TODO_LIST_ROUTE}`}
          />
          <Item
            icon={<FolderRounded />}
            title="File Manager"
            url={`${import.meta.env.VITE_FILE_MANAGER_ROUTE}`}
          />
          <Item
            icon={<GroupRounded />}
            title="Users"
            url={`${import.meta.env.VITE_USERS_ROUTE}`}
          />
          <Item
            icon={<SettingsRounded />}
            title="Settings"
            url={`${import.meta.env.VITE_SETTINGS_ROUTE}`}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

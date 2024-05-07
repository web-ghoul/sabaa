import {
  ApartmentRounded,
  AssessmentRounded,
  AssignmentIndRounded,
  BadgeRounded,
  Diversity3Rounded,
  EmailRounded,
  FlagRounded,
  FolderRounded,
  GridViewRounded,
  GroupRounded,
  ListAltRounded,
  PendingActionsRounded,
  ReceiptLongRounded,
  SettingsRounded,
  WorkRounded,
} from "@mui/icons-material";
import { Box, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { FaHandshakeSimple } from "react-icons/fa6";
import { SidebarContext } from "../../contexts/SidebarsContext";
import Item from "./Item";

const Items = () => {
  const { openSidebar } = useContext(SidebarContext);
  const lgClasses = ` ${openSidebar ? "justify-stretch" : "justify-center"}`;
  const mdClasses = ` justify-stretch !w-full`;

  const mdScreen = useMediaQuery("(max-width:992px)");
  return (
    <Box
      className={`${
        mdScreen ? mdClasses : lgClasses
      } grid overflow-auto items-center h-full`}
    >
      <Item
        icon={<GridViewRounded />}
        title="Dashboard"
        url={`${import.meta.env.VITE_DASHBOARD_ROUTE}`}
      />
      <Item
        icon={<Diversity3Rounded />}
        title="Walk in Customers"
        url={`${import.meta.env.VITE_CUSTOMERS_ROUTE}`}
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
  );
};

export default Items;

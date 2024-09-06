import {
  AddBoxRounded,
  AppRegistrationRounded,
  AssessmentRounded,
  AutoAwesomeMotionRounded,
  BorderAllRounded,
  CallToActionRounded,
  Diversity3Rounded,
  EmojiTransportationRounded,
  GridViewRounded,
  LocalConvenienceStoreRounded,
  PendingActionsRounded,
  PersonPinRounded,
  PublishedWithChangesRounded,
  SettingsRounded,
} from "@mui/icons-material";
import { Box, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarsContext";
import CompaniesIcon from "../Icons/CompaniesIcon";
import CustomersIcon from "../Icons/CustomersIcon";
import EChannelsIcon from "../Icons/EChannelsIcon";
import EmployeesIcon from "../Icons/EmployeesIcon";
import JobsIcon from "../Icons/JobsIcon";
import NationalitiesIcon from "../Icons/NationalitiesIcon";
import OwnersIcon from "../Icons/OwnersIcon";
import ProsIcon from "../Icons/ProsIcon";
import TransactionsIcon from "../Icons/TransactionsIcon";
import UsersIcon from "../Icons/UsersIcon";
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
      } grid overflow-auto justify-stretch items-center h-full`}
    >
      <Item
        icon={<GridViewRounded />}
        title="Dashboard"
        url={`${import.meta.env.VITE_DASHBOARD_ROUTE}`}
      />
      <Item
        icon={<CustomersIcon />}
        title="Walk in Customers"
        url={`${import.meta.env.VITE_CUSTOMERS_ROUTE}`}
      />
      <Item
        icon={<OwnersIcon />}
        title="Owners"
        url={`${import.meta.env.VITE_OWNERS_ROUTE}`}
      />
      <Item
        icon={<EmployeesIcon />}
        title="Employees"
        url={`${import.meta.env.VITE_EMPLOYEES_ROUTE}`}
      />
      <Item
        icon={<CompaniesIcon />}
        title="Companies"
        url={`${import.meta.env.VITE_COMPANIES_ROUTE}`}
      />
      <Item
        icon={<ProsIcon />}
        title="Public Relation Officers"
        url={`${import.meta.env.VITE_PROS_ROUTE}`}
      />
      <Item
        icon={<JobsIcon />}
        title="Jobs"
        url={`${import.meta.env.VITE_JOBS_ROUTE}`}
      />
      <Item
        icon={<NationalitiesIcon />}
        title="Nationalities"
        url={`${import.meta.env.VITE_NATIONALITIES_ROUTE}`}
      />
      <Item
        icon={<EChannelsIcon />}
        title="E-Channels Person"
        url={`${import.meta.env.VITE_ECHANNELS_ROUTE}`}
      />
      <Item
        icon={<AutoAwesomeMotionRounded />}
        title="Tasheels"
        url={`${import.meta.env.VITE_TASHEELS_ROUTE}`}
      />
      <Item
        icon={<CallToActionRounded />}
        title="Natwasals"
        url={`${import.meta.env.VITE_NATWASALS_ROUTE}`}
      />
      <Item
        icon={<TransactionsIcon />}
        title="Transactions"
        url={`${import.meta.env.VITE_TRANSACTIONS_ROUTE}`}
        sub
      >
        <Item
          icon={<BorderAllRounded />}
          title="All"
          url={`${import.meta.env.VITE_TRANSACTIONS_ALL_ROUTE}`}
        />
        <Item
          icon={<AppRegistrationRounded />}
          title="Pre Approval Work Permit"
          url={`${import.meta.env.VITE_TRANSACTIONS_PRE_ROUTE}`}
        />
        <Item
          icon={<AddBoxRounded />}
          title="New Labour Card"
          url={`${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`}
        />
        <Item
          icon={<PublishedWithChangesRounded />}
          title="Renew Labour Card"
          url={`${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`}
        />
      </Item>
      {/* <Item
        icon={<EmailRounded />}
        title="Mails"
        url={`${import.meta.env.VITE_MAILS_ROUTE}`}
      /> */}
      <Item
        icon={<PendingActionsRounded />}
        title="Activities"
        url={`${import.meta.env.VITE_ACTIVITIES_ROUTE}`}
      />
      <Item
        icon={<AssessmentRounded />}
        title="Reports"
        url={`${import.meta.env.VITE_REPORTS_ROUTE}`}
        sub
      >
        <Item
          icon={<Diversity3Rounded />}
          title="Employee List"
          url={`${import.meta.env.VITE_EMPLOYEE_LIST_ROUTE}`}
        />
        <Item
          icon={<EmojiTransportationRounded />}
          title="Owner Company"
          url={`${import.meta.env.VITE_OWNER_COMPANY_ROUTE}`}
        />
        <Item
          icon={<LocalConvenienceStoreRounded />}
          title="Company Transaction"
          url={`${import.meta.env.VITE_COMPANY_TRANSACTION_ROUTE}`}
        />
        <Item
          icon={<PersonPinRounded />}
          title="Employee details"
          url={`${import.meta.env.VITE_EMPLOYEE_DETAILS_ROUTE}`}
        />
      </Item>
      {/* <Item
        icon={<ListAltRounded />}
        title="Todo List"
        url={`${import.meta.env.VITE_TODO_LIST_ROUTE}`}
      /> */}
      <Item
        icon={<UsersIcon />}
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

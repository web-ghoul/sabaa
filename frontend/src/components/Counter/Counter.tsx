import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { EntitiesType } from "../../types/app.types";
import CompaniesIcon from "../Icons/CompaniesIcon";
import CustomersIcon from "../Icons/CustomersIcon";
import EmployeesIcon from "../Icons/EmployeesIcon";
import JobsIcon from "../Icons/JobsIcon";
import NationalitiesIcon from "../Icons/NationalitiesIcon";
import OwnersIcon from "../Icons/OwnersIcon";
import ProsIcon from "../Icons/ProsIcon";
import TransactionsIcon from "../Icons/TransactionsIcon";
import UsersIcon from "../Icons/UsersIcon";

const Counter = ({ variant }: { variant: EntitiesType }) => {
  const iconsClasses = "!text-[25px] md:!text-[22px] sm:!text-[20px]";
  const ownersCounter = useSelector((state: RootState) => state.ownersCounter);
  const employeesCounter = useSelector(
    (state: RootState) => state.employeesCounter
  );
  const prosCounter = useSelector((state: RootState) => state.prosCounter);
  const companiesCounter = useSelector(
    (state: RootState) => state.companiesCounter
  );
  const usersCounter = useSelector((state: RootState) => state.usersCounter);
  const customersCounter = useSelector(
    (state: RootState) => state.customersCounter
  );
  const jobsCounter = useSelector((state: RootState) => state.jobsCounter);
  const nationalitiesCounter = useSelector(
    (state: RootState) => state.nationalitiesCounter
  );
  return (
    <Box className={`flex justify-between items-center gap-8`}>
      <Box className={`flex justify-start items-center gap-2`}>
        {variant === "owners" ? (
          <OwnersIcon classes={`!text-green-600 ${iconsClasses}`} />
        ) : variant === "users" ? (
          <UsersIcon classes={`!text-stone-600 ${iconsClasses}`} />
        ) : variant === "jobs" ? (
          <JobsIcon classes={`!text-teal-600 ${iconsClasses}`} />
        ) : variant === "officers" ? (
          <ProsIcon classes={`!text-blue-600 ${iconsClasses}`} />
        ) : variant === "nationalities" ? (
          <NationalitiesIcon classes={`!text-red-600 ${iconsClasses}`} />
        ) : variant === "employees" ? (
          <EmployeesIcon classes={`!text-orange-600 ${iconsClasses}`} />
        ) : variant === "customers" ? (
          <CustomersIcon classes={`!text-cyan-600 ${iconsClasses}`} />
        ) : variant === "companies" ? (
          <CompaniesIcon classes={`!text-yellow-600 ${iconsClasses}`} />
        ) : (
          variant === "transactions" && (
            <TransactionsIcon classes={`!text-purple-600`} />
          )
        )}
        <Typography variant="h6" className={`!font-[600] !capitalize`}>
          {variant}
        </Typography>
      </Box>
      <Typography variant="h5" className={`!font-[700]`}>
        {variant === "owners"
          ? ownersCounter.ownersCounter
          : variant === "users"
          ? usersCounter.usersCounter
          : variant === "customers"
          ? customersCounter.customersCounter
          : variant === "employees"
          ? employeesCounter.employeesCounter
          : variant === "companies"
          ? companiesCounter.companiesCounter
          : variant === "officers"
          ? prosCounter.prosCounter
          : variant === "transactions"
          ? prosCounter.prosCounter
          : variant === "jobs"
          ? jobsCounter.jobsCounter
          : variant === "nationalities" &&
            nationalitiesCounter.nationalitiesCounter}
      </Typography>
    </Box>
  );
};

export default Counter;

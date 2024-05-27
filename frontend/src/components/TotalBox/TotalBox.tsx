import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TotalBoxTypes } from "../../types/components.types";
import CompaniesIcon from "../Icons/CompaniesIcon";
import CustomersIcon from "../Icons/CustomersIcon";
import EmployeesIcon from "../Icons/EmployeesIcon";
import OwnersIcon from "../Icons/OwnersIcon";
import ProsIcon from "../Icons/ProsIcon";
import TransactionsIcon from "../Icons/TransactionsIcon";
import LoadingTotalBox from "./LoadingTotalBox";

const TotalBox = ({ count, variant, isLoading }: TotalBoxTypes) => {
  const iconClasses = "!text-[32px] md:!text-[28px] sm:!text-[26px]";
  const navigate = useNavigate();

  const handleViewAll = () => {
    if (variant === "owners") {
      navigate(`${import.meta.env.VITE_OWNERS_ROUTE}`);
    } else if (variant === "officers") {
      navigate(`${import.meta.env.VITE_PROS_ROUTE}`);
    } else if (variant === "employees") {
      navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}`);
    } else if (variant === "companies") {
      navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`);
    } else if (variant === "customers") {
      navigate(`${import.meta.env.VITE_CUSTOMERS_ROUTE}`);
    }
  };

  return isLoading ? (
    <LoadingTotalBox />
  ) : (
    <Box
      className={`px-4 py-6 rounded-lg md:rounded-md grid justify-stretch items-center gap-4  md:px-3 md:py-5 sm:!py-4 ${
        variant === "owners"
          ? "bg-green-600"
          : variant === "officers"
          ? "bg-blue-600"
          : variant === "employees"
          ? "bg-orange-600"
          : variant === "customers"
          ? "bg-teal-600"
          : variant === "companies"
          ? "bg-yellow-600"
          : variant === "transactions" && "bg-fuchsia-600"
      } text-white`}
    >
      <Box
        className={`flex justify-between items-start flex-wrap gap-4 md:gap-3 sm:!gap-2`}
      >
        <Box className={`grid justify-start items-center gap-4`}>
          <Typography variant="h6" className={`!capitalize !font-[650]`}>
            Total {variant.toLowerCase()}
          </Typography>
          <Typography variant="h1" className={`!font-[800]`}>
            {count}
          </Typography>
        </Box>
        <Box
          className={`${
            variant === "owners"
              ? "bg-green-500"
              : variant === "officers"
              ? "bg-blue-500"
              : variant === "employees"
              ? "bg-orange-500"
              : variant === "customers"
              ? "bg-teal-500"
              : variant === "companies"
              ? "bg-yellow-500"
              : variant === "transactions" && "bg-fuchsia-500"
          }
           !rounded-md p-1`}
        >
          {variant === "owners" ? (
            <OwnersIcon classes={`text-green-900 ${iconClasses}`} />
          ) : variant === "officers" ? (
            <ProsIcon classes={`text-blue-900 ${iconClasses}`} />
          ) : variant === "employees" ? (
            <EmployeesIcon classes={`text-orange-900 ${iconClasses}`} />
          ) : variant === "companies" ? (
            <CompaniesIcon classes={`text-yellow-900 ${iconClasses}`} />
          ) : variant === "customers" ? (
            <CustomersIcon classes={`text-teal-900 ${iconClasses}`} />
          ) : (
            variant === "transactions" && (
              <TransactionsIcon classes={`text-fuchsia-900 ${iconClasses}`} />
            )
          )}
        </Box>
      </Box>
      <Box className={`flex justify-end items-center`} onClick={handleViewAll}>
        <Button
          className={`!text-white !font-[700] ${
            variant === "owners"
              ? "!bg-green-500"
              : variant === "officers"
              ? "!bg-blue-500"
              : variant === "employees"
              ? "!bg-orange-500"
              : variant === "customers"
              ? "!bg-teal-500"
              : variant === "companies"
              ? "!bg-yellow-500"
              : variant === "transactions" && "!bg-fuchsia-500"
          }`}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
};

export default TotalBox;

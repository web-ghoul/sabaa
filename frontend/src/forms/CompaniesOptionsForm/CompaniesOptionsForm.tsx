import { FilterAltRounded } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { PrimaryIconButton } from "../../mui/buttons/PrimaryIconButton";
import { getCompanies } from "../../store/companiesSlice";
import { AppDispatch } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const CompaniesOptionsForm = ({ formik }: FormiksTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { setSearchForCompanies, searchForCompanies } =
    useContext(FormsContext);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (value: string) => {
    dispatch(getCompanies({ page: 0, search: value }));
    setSearchForCompanies(value);
  };

  const handleLimitPage = (value: string) => {
    dispatch(getCompanies({ page: +value, search: searchForCompanies }));
    setSearchForCompanies(value);
  };

  const handleFilterByState = (value: string) => {
    dispatch(getCompanies({ page: +value, search: searchForCompanies }));
  };

  const handleFilterByStatus = (value: string) => {
    dispatch(getCompanies({ page: +value, search: searchForCompanies }));
  };

  const handleFilterByMOLCategory = (value: string) => {
    dispatch(getCompanies({ page: +value, search: searchForCompanies }));
  };

  const handleFilterByEstablishmentType = (value: string) => {
    dispatch(getCompanies({ page: +value, search: searchForCompanies }));
  };

  const handleFilterByIMMGExpireDate = (value: string) => {
    dispatch(getCompanies({ page: +value, search: searchForCompanies }));
  };

  const handleFilterByLicenseExpireDate = (value: string) => {
    dispatch(getCompanies({ page: +value, search: searchForCompanies }));
  };

  const handleResetAll = () => {};

  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg`}
    >
      <Box className={`grid justify-stretch items-center gap-8 grid-cols-2`}>
        <Box className={`flex justify-start items-center gap-4`}>
          <Input
            label={"Search For Companies..."}
            name={"search"}
            type={"search"}
            formik={formik}
            change={handleSearch}
          />
          <Input
            label={"Entries per page"}
            name={"limit"}
            formik={formik}
            change={handleLimitPage}
            options={["5", "10", "20", "30"]}
            select
          />
        </Box>
        <Box className={`flex justify-end items-center gap-4`}>
          <PrimaryButton
            onClick={() =>
              navigate(`${import.meta.env.VITE_ADD_COMPANY_ROUTE}`)
            }
          >
            Add Company
          </PrimaryButton>
          <PrimaryButton
            className={`!bg-excel hover:!bg-green-950`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_UPLOAD_COMPANIES_ROUTE}`)
            }
          >
            <RiFileExcel2Fill />
            <Typography variant="button">Upload Excel</Typography>
          </PrimaryButton>
          <PrimaryButton
            className={`!bg-excel hover:!bg-green-950`}
            onClick={() => handleAlert({ msg: "Under Development" })}
          >
            <RiFileExcel2Fill />
            <Typography variant="button">Excel</Typography>
          </PrimaryButton>
          <PrimaryButton
            className={`!bg-excel hover:!bg-green-950`}
            onClick={() => handleAlert({ msg: "Under Development" })}
          >
            <RiFileExcel2Fill />
            <Typography variant="button">Excel All</Typography>
          </PrimaryButton>
        </Box>
      </Box>
      <Box className={`grid justify-stretch items-center gap-2`}>
        <Box className={`flex justify-end items-center gap-4`}>
          <PrimaryIconButton
            className={`!bg-green-500 hover:!bg-green-600`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FilterAltRounded />
          </PrimaryIconButton>
          <PrimaryButton
            onClick={handleResetAll}
            className="!bg-red-500 hover:!bg-red-600"
          >
            Reset All
          </PrimaryButton>
        </Box>
        <Box
          className={`grid justify-stretch items-center gap-4 transition-all ${
            showFilters ? "h-full" : "h-[0px]"
          } overflow-hidden`}
        >
          <Box className={`flex justify-stretch items-center gap-4`}>
            <Input
              label={"Filter By Status"}
              name={"filterByStatus"}
              formik={formik}
              change={handleFilterByStatus}
              options={[]}
              select
            />
            <Input
              label={"Filter By State"}
              name={"filterByState"}
              formik={formik}
              change={handleFilterByState}
              options={[]}
              select
            />
            <Input
              label={"Filter By MOL Category"}
              name={"filterByMOLCategory"}
              formik={formik}
              change={handleFilterByMOLCategory}
              options={[]}
              select
            />
            <Input
              label={"Filter By Establishment Type"}
              name={"filterByEstablishmentType"}
              formik={formik}
              change={handleFilterByEstablishmentType}
              options={[]}
              select
            />
          </Box>
          <Box className={`flex justify-stretch items-center gap-4`}>
            <Box className={`grid justify-stretch items-center gap-2 w-full`}>
              <Typography variant="h6">Filter By IMMG Expire Date</Typography>
              <Input
                name={"filterByIMMGExpireDate"}
                type={"date"}
                formik={formik}
                change={handleFilterByIMMGExpireDate}
              />
            </Box>
            <Box className={`grid justify-stretch items-center gap-2 w-full`}>
              <Typography variant="h6">
                Filter By License Expire Date
              </Typography>
              <Input
                name={"filterByLicenseExpireDate"}
                type={"date"}
                formik={formik}
                change={handleFilterByLicenseExpireDate}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CompaniesOptionsForm;

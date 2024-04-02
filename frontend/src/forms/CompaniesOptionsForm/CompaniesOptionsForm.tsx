import { FilterAltRounded } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Input from "../../components/Input/Input";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { PrimaryIconButton } from "../../mui/buttons/PrimaryIconButton";
import { getCompanies } from "../../store/companiesSlice";
import { AppDispatch } from "../../store/store";
import {
  CompaniesOptionsFormikTypes,
  FormiksTypes,
} from "../../types/forms.types";

const CompaniesOptionsForm = ({ formik }: FormiksTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { setSearchForCompanies, searchForCompanies } =
    useContext(FormsContext);
  const [showFilters, setShowFilters] = useState(false);
  const [params, setParams] = useState<{ [key: string]: string }>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const { setCompaniesPage } = useContext(AppContext);

  const getAllParams = () => {
    setCompaniesPage(1);
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    setParams(allParams);
    return allParams;
  };

  const setAllParams = () => {
    const allParams = getAllParams();
    (formik as unknown as CompaniesOptionsFormikTypes).values.limit =
      allParams.limit;
    (formik as unknown as CompaniesOptionsFormikTypes).values.filterByState =
      allParams.state;
    (formik as unknown as CompaniesOptionsFormikTypes).values.filterByStatus =
      allParams.status;
    (
      formik as unknown as CompaniesOptionsFormikTypes
    ).values.filterByMOLCategory = allParams.molCategory;
    (
      formik as unknown as CompaniesOptionsFormikTypes
    ).values.filterByEstablishmentType = allParams.establishmentType;

    dispatch(getCompanies(allParams));
  };

  const handleSearch = (value: string) => {
    dispatch(getCompanies({ ...params, page: 0, search: value }));
    setSearchForCompanies(value);
  };

  const handleLimitPage = (value: string) => {
    if (value) {
      dispatch(
        getCompanies({ ...params, limit: +value, search: searchForCompanies })
      );
      setSearchParams({ ...getAllParams(), limit: value });
    }
  };

  const handleFilterByState = (value: string) => {
    if (value) {
      dispatch(
        getCompanies({ ...params, state: value, search: searchForCompanies })
      );
      setSearchParams({ ...getAllParams(), state: value });
    }
  };

  const handleFilterByStatus = (value: string) => {
    if (value) {
      dispatch(
        getCompanies({ ...params, status: value, search: searchForCompanies })
      );
      setSearchParams({ ...getAllParams(), status: value });
    }
  };

  const handleFilterByMOLCategory = (value: string) => {
    if (value) {
      dispatch(
        getCompanies({
          ...params,
          molCategory: value,
          search: searchForCompanies,
        })
      );
      setSearchParams({ ...getAllParams(), molCategory: value });
    }
  };

  const handleFilterByEstablishmentType = (value: string) => {
    if (value) {
      dispatch(
        getCompanies({
          ...params,
          establishmentType: value,
          search: searchForCompanies,
        })
      );
      setSearchParams({ ...getAllParams(), establishmentType: value });
    }
  };

  const handleFilterByIMMGExpireDate = (value: string) => {
    // dispatch(
    //   getCompanies({ ...params, page: +value, search: searchForCompanies })
    // );
    console.log(value);
    handleAlert({ msg: "Under Development" });
  };

  const handleFilterByLicenseExpireDate = (value: string) => {
    // dispatch(
    //   getCompanies({ ...params, page: +value, search: searchForCompanies })
    // );
    console.log(value);
    handleAlert({ msg: "Under Development" });
  };

  const handleResetAll = () => {
    setSearchForCompanies("");
    setSearchParams({});
    dispatch(getCompanies({}));
    setParams({});
    (formik as unknown as CompaniesOptionsFormikTypes).values.limit = "";
    (formik as unknown as CompaniesOptionsFormikTypes).values.filterByState =
      "";
    (formik as unknown as CompaniesOptionsFormikTypes).values.filterByStatus =
      "";
    (
      formik as unknown as CompaniesOptionsFormikTypes
    ).values.filterByMOLCategory = "";
    (
      formik as unknown as CompaniesOptionsFormikTypes
    ).values.filterByEstablishmentType = "";
  };

  useEffect(() => {
    setAllParams();
  }, []);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg md-p-3 sm:!p-2 md:gap-3`}
    >
      <Box
        className={`grid justify-stretch items-center gap-8 grid-cols-2 lg:grid-cols-1 lg:gap-6 md:gap-4 sm:!gap-2`}
      >
        <Box
          className={`flex lg:order-1 justify-start items-center gap-4 md:gap-3 sm:!gap-2 xs:grid xs:justify-stretch`}
        >
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
        <Box
          className={`flex justify-end items-center gap-4  md:gap-3 sm:!gap-2 flex-wrap`}
        >
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
        <Box
          className={`flex justify-end items-center gap-4  md:gap-3 sm:!gap-2 lg:order-1`}
        >
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
          className={`grid justify-stretch items-center gap-4 transition-all  md:gap-3 sm:!gap-2 ${
            showFilters ? "h-full" : "h-[0px]"
          } overflow-hidden`}
        >
          <Box
            className={`flex justify-stretch items-center gap-4  md:gap-3 sm:!gap-2 md:grid-cols-2 md:grid xs:grid-cols-1`}
          >
            <Input
              label={"Filter By Status"}
              name={"filterByStatus"}
              formik={formik}
              change={handleFilterByStatus}
              options={["Active", "Inactive"]}
              select
            />
            <Input
              label={"Filter By State"}
              name={"filterByState"}
              formik={formik}
              change={handleFilterByState}
              options={["dubai"]}
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
          <Box
            className={`flex justify-stretch items-center gap-4  md:gap-3 sm:!gap-2 xs:grid`}
          >
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

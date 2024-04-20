import {
  AddRounded,
  FilterAltRounded,
  FilterListRounded,
} from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { getCompanies } from "../../store/companiesSlice";
import { AppDispatch } from "../../store/store";
import {
  CompaniesOptionsFormikTypes,
  FormiksTypes,
} from "../../types/forms.types";

const CompaniesOptionsForm = ({ formik }: FormiksTypes) => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const { queries, setQueries, handleAddQuery } = useContext(AppContext);
  const { searchForCompanies, setSearchForCompanies } =
    useContext(FormsContext);

  const handleSearch = (value: string) => {
    setSearchForCompanies(value);
    dispatch(getCompanies({ ...queries, search: value }));
  };

  const handleFilterByState = (value: string) => {
    handleAddQuery({ state: value });
  };

  const handleFilterByStatus = (value: string) => {
    handleAddQuery({ status: value });
  };

  const handleFilterByMOLCategory = (value: string) => {
    handleAddQuery({ molCategory: value });
  };

  const handleFilterByEstablishmentType = (value: string) => {
    handleAddQuery({ establishmentType: value });
  };

  const handleFilterByIMMGExpireDateFrom = (value: string) => {
    handleAddQuery({ IMMGFrom: value });
  };

  const handleFilterByIMMGExpireDateTo = (value: string) => {
    handleAddQuery({ IMMGTo: value });
  };

  const handleFilterByLicenseExpireDateFrom = (value: string) => {
    handleAddQuery({ licenseFrom: value });
  };

  const handleFilterByLicenseExpireDateTo = (value: string) => {
    handleAddQuery({ licenseTo: value });
  };

  const handleFilter = () => {
    setSearchParams(queries);
    dispatch(getCompanies({ ...queries, search: searchForCompanies }));
  };

  const handleResetAll = () => {
    navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`);
    dispatch(getCompanies({}));
    setQueries({});
  };

  (formik as unknown as CompaniesOptionsFormikTypes).values.state =
    queries?.state || "";
  (formik as unknown as CompaniesOptionsFormikTypes).values.status =
    queries?.status || "";
  (formik as unknown as CompaniesOptionsFormikTypes).values.IMMGFrom =
    queries?.IMMGFrom || "";
  (formik as unknown as CompaniesOptionsFormikTypes).values.IMMGTo =
    queries?.IMMGTo || "";
  (formik as unknown as CompaniesOptionsFormikTypes).values.licenseFrom =
    queries?.licenseFrom || "";
  (formik as unknown as CompaniesOptionsFormikTypes).values.licenseTo =
    queries?.licenseTo || "";
  (formik as unknown as CompaniesOptionsFormikTypes).values.molCategory =
    queries?.molCategory || "";
  (formik as unknown as CompaniesOptionsFormikTypes).values.establishmentType =
    queries?.establishmentType || "";

  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg md-p-3 sm:!p-2 md:gap-3`}
    >
      <Box
        className={`grid justify-stretch items-end gap-8 grid-cols-2 lg:grid-cols-1 lg:gap-6 md:gap-4 sm:!gap-2`}
      >
        <Box className={`w-[50%] md:w-[75%] sm:w-full`}>
          <Input
            label={"Search Name, MOL, Trade, IMMG ..."}
            name={"search"}
            type={"search"}
            formik={formik}
            change={handleSearch}
          />
        </Box>
        <Box
          className={`flex justify-end items-center gap-4  md:gap-3 sm:!gap-2 flex-wrap`}
        >
          <Button icon={<AddRounded />} title={"Add Company"} />
          <Button
            handling={() =>
              navigate(`${import.meta.env.VITE_UPLOAD_COMPANIES_ROUTE}`)
            }
            icon={<RiFileExcel2Fill />}
            bg={"excel"}
            title={"Upload Excel"}
          />
          <Button
            icon={<RiFileExcel2Fill />}
            variant={"under development"}
            bg={"excel"}
            title={"Excel"}
          />
          <Button
            icon={<RiFileExcel2Fill />}
            variant={"under development"}
            bg={"excel"}
            title={"Excel All"}
          />
        </Box>
      </Box>
      <Box className={`grid justify-stretch items-center gap-2`}>
        <Box
          className={`flex justify-end items-center gap-4  md:gap-3 sm:!gap-2 lg:order-1`}
        >
          <Button
            handling={() => setShowFilters(!showFilters)}
            icon={<FilterAltRounded />}
            bg={"!bg-green-500"}
          />
          <Button
            handling={handleResetAll}
            title={"Reset All"}
            bg={"!bg-red-500"}
          />
        </Box>
        <Box
          className={`grid justify-stretch items-center gap-4 transition-all  md:gap-3 sm:!gap-2 ${
            showFilters ? "h-full" : "h-[0px]"
          } overflow-hidden`}
        >
          <Box
            className={`flex justify-stretch items-center gap-3  md:gap-3 sm:!gap-2 md:grid-cols-2 md:grid xs:grid-cols-1 md:flex-wrap`}
          >
            <Input
              label={"Filter By Status"}
              name={"status"}
              formik={formik}
              change={handleFilterByStatus}
              options={["Active", "Inactive"]}
              select
            />
            <Input
              label={"Filter By State"}
              name={"state"}
              formik={formik}
              change={handleFilterByState}
              options={["dubai"]}
              select
            />
            <Input
              label={"Filter By MOL Category"}
              name={"molCategory"}
              formik={formik}
              change={handleFilterByMOLCategory}
              options={[]}
              select
            />
            <Input
              label={"Filter By Establishment Type"}
              name={"establishmentType"}
              formik={formik}
              change={handleFilterByEstablishmentType}
              options={[]}
              select
            />
          </Box>
          <Box
            className={`grid grid-cols-[1fr,1fr,auto] justify-stretch items-end gap-3 md:gap-3 sm:!gap-2 xs:grid flex-wrap`}
          >
            <Box className={`grid  gap-3`}>
              <Typography variant="h6">Filter By IMMG Expire Date</Typography>
              <Box className={`flex gap-3   md:flex-wrap`}>
                <Input
                  name={"IMMGFrom"}
                  type={"date"}
                  label={"From"}
                  formik={formik}
                  change={handleFilterByIMMGExpireDateFrom}
                />
                <Input
                  name={"IMMGTo"}
                  type={"date"}
                  label={"to"}
                  formik={formik}
                  change={handleFilterByIMMGExpireDateTo}
                />
              </Box>
            </Box>

            <Box className={`grid gap-3`}>
              <Typography variant="h6">
                Filter By License Expire Date
              </Typography>
              <Box className={`flex gap-3 md:flex-wrap`}>
                <Input
                  name={"licenseFrom"}
                  label={"From"}
                  type={"date"}
                  formik={formik}
                  change={handleFilterByLicenseExpireDateFrom}
                />
                <Input
                  name={"licenseTo"}
                  label={"To"}
                  type={"date"}
                  formik={formik}
                  change={handleFilterByLicenseExpireDateTo}
                />
              </Box>
            </Box>
            <Button
              handling={handleFilter}
              title={"Filter"}
              icon={<FilterListRounded />}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CompaniesOptionsForm;

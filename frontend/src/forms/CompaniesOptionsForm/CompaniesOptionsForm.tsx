import { FilterAltRounded, FilterListRounded } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import ExcelButtons from "../../components/ExcelButtons/ExcelButtons";
import Input from "../../components/Input/Input";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { getCompanies } from "../../store/companiesSlice";
import { getSelectors } from "../../store/selectorsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";
import { selectorsKeysTypes } from "../../types/store.types";

const CompaniesOptionsForm = ({ register, errors, setValue }: FormiksTypes) => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const { queries, setQueries, handleAddQuery } = useContext(AppContext);
  const { searchForCompanies, setSearchForCompanies } =
    useContext(FormsContext);
  const { selectors } = useSelector((state: RootState) => state.selectors);
  const [states, setStates] = useState<string[]>(["loading..."]);
  const [molCategories, setMolCategories] = useState<string[]>(["loading..."]);
  const [establishmentTypes, setEstablishmentTypes] = useState<string[]>([
    "loading...",
  ]);

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
    setValue("search", "");
    setValue("state", "");
    setValue("status", "");
    setValue("molCategory", "");
    setValue("establishmentType", "");
    setValue("IMMGFrom", "");
    setValue("IMMGTo", "");
    setValue("licenseFrom", "");
    setValue("licenseTo", "");
  };

  useEffect(() => {
    dispatch(getSelectors());
  });

  useEffect(() => {
    if (selectors) {
      selectors.map((selector) => {
        const sKeys = Object.keys(selector);
        if (sKeys.length > 0) {
          if (sKeys[0] === "state") {
            setStates(selector[sKeys[0] as selectorsKeysTypes].data);
          }
          if (sKeys[0] === "establishmentType") {
            setEstablishmentTypes(
              selector[sKeys[0] as selectorsKeysTypes].data
            );
          }
          if (sKeys[0] === "molCategory") {
            setMolCategories(selector[sKeys[0] as selectorsKeysTypes].data);
          }
        }
      });
    }
  }, [selectors]);

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
            register={register}
            errors={errors}
            change={handleSearch}
          />
        </Box>
        <ExcelButtons addBtn={"Add Company"} variant="companies" />
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
              register={register}
              errors={errors}
              change={handleFilterByStatus}
              options={["Active", "Inactive"]}
              select
            />
            <Input
              label={"Filter By State"}
              name={"state"}
              register={register}
              errors={errors}
              change={handleFilterByState}
              options={states}
              select
            />
            <Input
              label={"Filter By MOL Category"}
              name={"molCategory"}
              register={register}
              errors={errors}
              change={handleFilterByMOLCategory}
              options={molCategories}
              select
            />
            <Input
              label={"Filter By Establishment Type"}
              name={"establishmentType"}
              register={register}
              errors={errors}
              change={handleFilterByEstablishmentType}
              options={establishmentTypes}
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
                  register={register}
                  errors={errors}
                  change={handleFilterByIMMGExpireDateFrom}
                />
                <Input
                  name={"IMMGTo"}
                  type={"date"}
                  label={"to"}
                  register={register}
                  errors={errors}
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
                  register={register}
                  errors={errors}
                  change={handleFilterByLicenseExpireDateFrom}
                />
                <Input
                  name={"licenseTo"}
                  label={"To"}
                  type={"date"}
                  register={register}
                  errors={errors}
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

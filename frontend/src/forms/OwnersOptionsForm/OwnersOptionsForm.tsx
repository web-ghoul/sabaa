import {
  AddRounded,
  FilterAltRounded,
  FilterListRounded,
} from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { getNationalities } from "../../store/nationalitiesSlice";
import { getOwners } from "../../store/ownersSlice";
import { AppDispatch, RootState } from "../../store/store";
import {
  FormiksTypes,
  OwnersOptionsFormikTypes,
} from "../../types/forms.types";
import { NationalityTypes } from "../../types/store.types";

const OwnersOptionsForm = ({ formik }: FormiksTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { setSearchForOwners, searchForOwners, handleOpenOwnerModal } =
    useContext(FormsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setOwnersPage } = useContext(AppContext);
  const [showFilters, setShowFilters] = useState(false);
  const [params, setParams] = useState<{ [key: string]: string }>({});
  const [handledNationalities, sethandledNationalities] = useState<string[]>(
    []
  );

  const getAllParams = () => {
    setOwnersPage(1);
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    setParams(allParams);
    return allParams;
  };

  const setAllParams = () => {
    const allParams = getAllParams();
    (formik as unknown as OwnersOptionsFormikTypes).values.filterByDateOfBirth =
      allParams.date;
    (formik as unknown as OwnersOptionsFormikTypes).values.filterByNationality =
      allParams.nationality;
    (formik as unknown as OwnersOptionsFormikTypes).values.limit =
      allParams.limit;
    dispatch(getOwners(allParams));
  };

  const handleSearch = (value: string) => {
    dispatch(getOwners({ ...params, search: value }));
    setSearchForOwners(value);
  };

  const handleLimitPage = (value: string) => {
    if (value) {
      dispatch(
        getOwners({ ...params, limit: +value, search: searchForOwners })
      );
      setSearchParams({ ...getAllParams(), limit: value });
    }
  };

  const handleFilterByNationality = (value: string) => {
    if (value) {
      dispatch(
        getOwners({ ...params, nationality: value, search: searchForOwners })
      );
      setSearchParams({ ...getAllParams(), nationality: value });
    }
  };

  const handleFilterByState = (value: string) => {
    if (value) {
      dispatch(getOwners({ ...params, state: value, search: searchForOwners }));
      setSearchParams({ ...getAllParams(), state: value });
    }
  };

  const handleFilterByDateOfBirth = (value: string) => {
    if (value) {
      dispatch(getOwners({ ...params, date: value, search: searchForOwners }));
      setSearchParams({ ...getAllParams(), date: value });
    }
  };

  const handleFilter = () => {};

  const handleResetAll = () => {
    setSearchForOwners("");
    setSearchParams({});
    dispatch(getOwners({}));
    setParams({});
    (formik as unknown as OwnersOptionsFormikTypes).values.filterByDateOfBirth =
      "";
    (formik as unknown as OwnersOptionsFormikTypes).values.filterByNationality =
      "";
    (formik as unknown as OwnersOptionsFormikTypes).values.limit = "";
  };

  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );

  useEffect(() => {
    if (nationalities) {
      const nats: string[] = nationalities.map(
        (nat: NationalityTypes) => nat.nationality
      );
      sethandledNationalities(nats);
    } else {
      dispatch(getNationalities({}));
    }
  }, [dispatch, nationalities]);

  useEffect(() => {
    setAllParams();
  }, []);

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(getOwners({}));
    }
  }, [dispatch, searchParams]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg md:gap-3 sm:!gap-2 md:p-3 sm:!p-2`}
    >
      <Box
        className={`grid justify-stretch items-center gap-8 grid-cols-2 lg:gap-4 md:!gap-3 sm:gap-2 lg:!grid-cols-1`}
      >
        <Box
          className={`flex justify-start items-center gap-4 lg:order-1 xs:grid xs:justify-stretch md:gap-3 sm:!gap-2`}
        >
          <Input
            label={"Search For Owners..."}
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
          className={`flex justify-end items-center gap-4 flex-wrap md:gap-3 sm:!gap-2`}
        >
          <PrimaryButton onClick={() => handleOpenOwnerModal("addOwner")}>
            <AddRounded />
            <Typography variant="button">Add Owner</Typography>
          </PrimaryButton>
          <PrimaryButton
            className={`!bg-excel hover:!bg-green-950`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_UPLOAD_OWNERS_ROUTE}`)
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
          className={`flex justify-end items-center gap-4 md:gap-3 sm:!gap-2 md:order-1`}
        >
          <Button
            bg={"!bg-green-500"}
            icon={<FilterAltRounded />}
            handling={() => setShowFilters(!showFilters)}
          />
          <Button
            icon={<FilterListRounded />}
            title={"Filter"}
            handling={handleFilter}
          />
          <Button
            bg={"!bg-red-500"}
            title={"Reset All"}
            handling={handleResetAll}
          />
        </Box>
        <Box
          className={`flex justify-start items-end gap-4 transition-all md:gap-3 sm:!gap-2 md:flex-wrap  ${
            showFilters ? "h-full" : "h-[0px]"
          } overflow-hidden`}
        >
          <Input
            label={"Filter By Nationality"}
            name={"filterByNationality"}
            formik={formik}
            change={handleFilterByNationality}
            options={handledNationalities}
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
          <Box className={`grid justify-stretch items-center gap-2 w-full`}>
            <Typography variant="h6">Filter By Date of Birth</Typography>
            <Input
              name={"filterByDateOfBirth"}
              type={"date"}
              formik={formik}
              change={handleFilterByDateOfBirth}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default OwnersOptionsForm;

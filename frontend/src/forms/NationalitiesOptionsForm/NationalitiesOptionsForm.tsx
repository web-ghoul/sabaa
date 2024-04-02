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
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch } from "../../store/store";
import {
  FormiksTypes,
  NationalitiesOptionsFormikTypes,
} from "../../types/forms.types";

const NationalitiesOptionsForm = ({ formik }: FormiksTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    setSearchForNationalities,
    handleOpenAddNationalityModal,
    searchForNationalities,
  } = useContext(FormsContext);
  const [params, setParams] = useState<{ [key: string]: string }>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const { setNationalitiesPage } = useContext(AppContext);

  const getAllParams = () => {
    setNationalitiesPage(1);
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    setParams(allParams);
    return allParams;
  };

  const setAllParams = () => {
    const allParams = getAllParams();
    (formik as unknown as NationalitiesOptionsFormikTypes).values.limit =
      allParams.limit;
    dispatch(getNationalities(allParams));
  };

  const handleSearch = (value: string) => {
    if (value) {
      dispatch(getNationalities({ ...params, page: 0, search: value }));
      setSearchForNationalities(value);
    }
  };
  const handleLimitPage = (value: string) => {
    if (value) {
      dispatch(
        getNationalities({
          ...params,
          limit: +value,
          search: searchForNationalities,
        })
      );
      setSearchParams({ ...getAllParams(), limit: value });
    }
  };

  const handleResetAll = () => {
    setSearchForNationalities("");
    setSearchParams({});
    dispatch(getNationalities({}));
    setParams({});
  };

  useEffect(() => {
    setAllParams();
  }, []);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg  md:gap-3 sm:!gap-2  md:p-3 sm:!p-2`}
    >
      <Box
        className={`grid justify-stretch items-center gap-8 grid-cols-2 lg:grid-cols-1  md:gap-4 sm:!gap-2`}
      >
        <Box
          className={`flex justify-start items-center gap-4  md:gap-3 sm:!gap-2 lg:order-1 xs:grid xs:justify-stretch`}
        >
          <Input
            label={"Search For Nationalities..."}
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
          <PrimaryButton onClick={handleOpenAddNationalityModal}>
            Add Nationality
          </PrimaryButton>
          <PrimaryButton
            className={`!bg-excel hover:!bg-green-950`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_UPLOAD_NATIONALITIES_ROUTE}`)
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
        <Box className={`flex justify-end items-center`}>
          <PrimaryButton
            onClick={handleResetAll}
            className="!bg-red-500 hover:!bg-red-600"
          >
            Reset All
          </PrimaryButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default NationalitiesOptionsForm;

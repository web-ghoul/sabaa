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
import { getNationalities } from "../../store/nationalitiesSlice";
import { getPros } from "../../store/prosSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes, ProsOptionsFormikTypes } from "../../types/forms.types";
import { NationalityTypes } from "../../types/store.types";

const ProsOptionsForm = ({ formik }: FormiksTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    handleOpenProModal,
    searchForPros,
    handleOpenDownloadExcelModal,
    setSearchForPros,
  } = useContext(FormsContext);
  const [, setSearchParams] = useSearchParams();
  const { queries, setQueries, handleAddQuery } = useContext(AppContext);
  const [showFilters, setShowFilters] = useState(false);
  const [handledNationalities, sethandledNationalities] = useState<string[]>(
    []
  );

  const handleSearch = (value: string) => {
    setSearchForPros(value);
    dispatch(getPros({ ...queries, search: value }));
  };

  const handleFilterByNationality = (value: string) => {
    handleAddQuery({ nationality: value });
  };

  const handleFilterByState = (value: string) => {
    handleAddQuery({ state: value });
  };

  const handleFilterByDateOfBirthFrom = (value: string) => {
    handleAddQuery({ dobFrom: value });
  };

  const handleFilterByDateOfBirthTo = (value: string) => {
    handleAddQuery({ dobTo: value });
  };

  const handleFilter = () => {
    setSearchParams(queries);
    dispatch(getPros({ ...queries, search: searchForPros }));
  };

  const handleDownloadExcel = () => {
    handleOpenDownloadExcelModal("excel", "officers");
  };

  const handleResetAll = () => {
    navigate(`${import.meta.env.VITE_PROS_ROUTE}`);
    dispatch(getPros({}));
    setQueries({});
  };

  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );

  (formik as unknown as ProsOptionsFormikTypes).values.dobFrom =
    queries.dobFrom || "";
  (formik as unknown as ProsOptionsFormikTypes).values.dobTo =
    queries.dobTo || "";
  (formik as unknown as ProsOptionsFormikTypes).values.state =
    queries.state || "";
  (formik as unknown as ProsOptionsFormikTypes).values.nationality =
    queries.nationality || "";

  useEffect(() => {
    if (nationalities) {
      const nats: string[] = nationalities.map(
        (nat: NationalityTypes) => nat.nationality
      );
      sethandledNationalities(nats);
    }
  }, [nationalities]);

  useEffect(() => {
    dispatch(getNationalities({ limit: -1 }));
  }, [dispatch]);
  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg md:gap-3 sm:!gap-2 md:p-3 sm:!p-2`}
    >
      <Box
        className={`grid justify-stretch items-end gap-8 grid-cols-2 lg:gap-4 md:!gap-3 sm:gap-2 lg:!grid-cols-1`}
      >
        <Box className={`w-[50%] md:w-[75%] sm:w-full`}>
          <Input
            label={"Search Name, Person Code..."}
            name={"search"}
            type={"search"}
            formik={formik}
            change={handleSearch}
          />
        </Box>
        <Box
          className={`flex justify-end items-center gap-4 flex-wrap md:gap-3 sm:!gap-2 lg:!order-first`}
        >
          <Button
            title={"Add Officer"}
            icon={<AddRounded />}
            handling={() => handleOpenProModal("addPro")}
          />
          <Button
            title={"Upload Excel"}
            icon={<RiFileExcel2Fill />}
            bg={"excel"}
            handling={() =>
              navigate(`${import.meta.env.VITE_UPLOAD_PROS_ROUTE}`)
            }
          />
          <Button
            title={"Excel"}
            icon={<RiFileExcel2Fill />}
            bg={"excel"}
            handling={handleDownloadExcel}
          />
          <Button
            title={"Excel All"}
            icon={<RiFileExcel2Fill />}
            bg={"excel"}
            variant={"under development"}
          />
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
            bg={"!bg-red-500"}
            title={"Reset All"}
            handling={handleResetAll}
          />
        </Box>
        <Box
          className={`grid grid-cols-[1fr,1fr,2fr,auto] justify-stretch items-end gap-4 transition-all md:gap-3 sm:!gap-2 md:flex md:flex-wrap  ${
            showFilters ? "h-full" : "h-[0px]"
          } overflow-hidden`}
        >
          <Input
            label={"Filter By Nationality"}
            name={"nationality"}
            formik={formik}
            change={handleFilterByNationality}
            options={handledNationalities}
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
          <Box className={`grid justify-stretch gap-4 md:gap-3 sm:!gap-2`}>
            <Typography variant="h6">Filter By Date Of Birth</Typography>
            <Box
              className={`flex justify-stretch gap-4 md:gap-3 sm:!gap-2 md:flex-wrap`}
            >
              <Input
                name={"dobFrom"}
                label={"From"}
                type={"date"}
                formik={formik}
                change={handleFilterByDateOfBirthFrom}
              />
              <Input
                name={"dobTo"}
                label={"To"}
                type={"date"}
                formik={formik}
                change={handleFilterByDateOfBirthTo}
              />
            </Box>
          </Box>
          <Button
            icon={<FilterListRounded />}
            title={"Filter"}
            handling={handleFilter}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default ProsOptionsForm;

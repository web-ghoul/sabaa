import {
  AddRounded,
  FilterAltRounded,
  FilterListRounded,
} from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { getEmployees } from "../../store/employeesSlice";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import {
  EmployeesOptionsFormikTypes,
  FormiksTypes,
} from "../../types/forms.types";
import { NationalityTypes } from "../../types/store.types";

const EmployeesOptionsForm = ({ formik }: FormiksTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    searchForEmployees,
    setSearchForEmployees,
    handleOpenDownloadExcelModal,
  } = useContext(FormsContext);
  const [, setSearchParams] = useSearchParams();
  const { queries, setQueries, handleAddQuery } = useContext(AppContext);
  const [showFilters, setShowFilters] = useState(false);
  const [handledNationalities, sethandledNationalities] = useState<string[]>(
    []
  );

  const handleSearch = (value: string) => {
    setSearchForEmployees(value);
    dispatch(getEmployees({ ...queries, search: value }));
  };

  const handleFilterByNationality = (value: string) => {
    handleAddQuery({ nationality: value });
  };

  const handleFilterByStatus = (value: string) => {
    handleAddQuery({ status: value });
  };

  const handleFilterByCardType = (value: string) => {
    handleAddQuery({ cardType: value });
  };

  const handleFilterByGender = (value: string) => {
    handleAddQuery({ gender: value });
  };

  const handleFilter = () => {
    setSearchParams(queries);
    dispatch(getEmployees({ ...queries, search: searchForEmployees }));
  };

  const handleDownloadExcel = () => {
    handleOpenDownloadExcelModal("excel", "employees");
  };

  const handleDownloadExcelAll = () => {
    handleOpenDownloadExcelModal("all", "employees");
  };

  const handleResetAll = () => {
    navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}`);
    dispatch(getEmployees({}));
    setQueries({});
  };

  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );

  (formik as unknown as EmployeesOptionsFormikTypes).values.cardType =
    queries.cardType || "";
  (formik as unknown as EmployeesOptionsFormikTypes).values.gender =
    queries.gender || "";
  (formik as unknown as EmployeesOptionsFormikTypes).values.status =
    queries.status || "";
  (formik as unknown as EmployeesOptionsFormikTypes).values.nationality =
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
          <Button title={"Add Employee"} icon={<AddRounded />} />
          <Button
            title={"Upload Excel"}
            icon={<RiFileExcel2Fill />}
            bg={"excel"}
            handling={() =>
              navigate(`${import.meta.env.VITE_UPLOAD_EMPLOYEES_ROUTE}`)
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
            handling={handleDownloadExcelAll}
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
          className={`grid grid-cols-[1fr,1fr,1fr,1fr,auto] justify-stretch items-end gap-4 transition-all md:gap-3 sm:!gap-2 md:flex md:flex-wrap  ${
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
            label={"Filter By Status"}
            name={"status"}
            formik={formik}
            change={handleFilterByStatus}
            options={["active", "cancel", "complaint", "abscond"]}
            select
          />
          <Input
            label={"Filter By Gender"}
            name={"gender"}
            formik={formik}
            change={handleFilterByGender}
            options={["male", "female"]}
            select
          />
          <Input
            label={"Filter By Card Type"}
            name={"cardType"}
            formik={formik}
            change={handleFilterByCardType}
            options={[
              "PRE APPROVAL FOR WORK PERMIT",
              "NEW ELECTRONIC WORK PERMIT",
              "RENEW ELECTRONIC WORK PERMIT",
              "RELATIVE PRE APPROVAL FOR WORK PERMIT",
              "NEW ON HUSBAND/FATHER SPONSORSHIP",
              "NATIONAL AND GCC ELECTRONIC WORK PERMIT",
              "RENEWAL NATIONAL AND GCC ELECTRONIC WORK PERMIT",
              "PART TIME PRE APPROVAL FOR WORK PERMIT",
              "ELECTRONIC WORK PERMIT FOR PART TIME",
            ]}
            select
          />
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

export default EmployeesOptionsForm;

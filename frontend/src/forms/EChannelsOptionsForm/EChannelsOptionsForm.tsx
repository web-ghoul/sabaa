import {
  AddRounded,
  FilterAltRounded,
  FilterListRounded,
} from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { useContext, useState } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { getEChannels } from "../../store/eChannelsSlice";
import { AppDispatch } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const EChannelsOptionsForm = ({ register, errors, setValue }: FormiksTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    searchForEChannels,
    setSearchForEChannels,
    handleOpenDownloadExcelModal,
  } = useContext(FormsContext);
  const [, setSearchParams] = useSearchParams();
  const { queries, setQueries, handleAddQuery } = useContext(AppContext);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (value: string) => {
    setSearchForEChannels(value);
    dispatch(getEChannels({ ...queries, search: value }));
  };

  const handleFilterByType = (value: string) => {
    handleAddQuery({ type: value });
  };

  const handleFilterByStatus = (value: string) => {
    handleAddQuery({ status: value });
  };

  const handleFilterByGender = (value: string) => {
    handleAddQuery({ gender: value });
  };

  const handleFilter = () => {
    setSearchParams(queries);
    dispatch(getEChannels({ ...queries, search: searchForEChannels }));
  };

  const handleDownloadExcel = () => {
    handleOpenDownloadExcelModal("excel", "eChannels");
  };

  const handleDownloadExcelAll = () => {
    handleOpenDownloadExcelModal("all", "eChannels");
  };

  const handleResetAll = () => {
    navigate(`${import.meta.env.VITE_ECHANNELS_ROUTE}`);
    dispatch(getEChannels({}));
    setQueries({});
    setValue("search", "");
    setValue("type", "");
    setValue("status", "");
    setValue("gender", "");
  };

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
            register={register}
            errors={errors}
            change={handleSearch}
          />
        </Box>
        <Box
          className={`flex justify-end items-center gap-4 flex-wrap md:gap-3 sm:!gap-2 lg:!order-first`}
        >
          <Button title={"Add E-Channel"} icon={<AddRounded />} />
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
            label={"Filter By Status"}
            name={"status"}
            register={register}
            errors={errors}
            change={handleFilterByStatus}
            options={["Active", "Inactive"]}
            select
          />
          <Input
            label={"Filter By Gender"}
            name={"gender"}
            register={register}
            errors={errors}
            change={handleFilterByGender}
            options={["Male", "Female"]}
            select
          />
          <Input
            label={"Filter By User Type"}
            name={"type"}
            register={register}
            errors={errors}
            change={handleFilterByType}
            options={["owner", "officer", "customer", "employee"]}
            select
          />
          <Box className={`flex justify-end items-center`}>
            <Button
              icon={<FilterListRounded />}
              title={"Filter"}
              handling={handleFilter}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default EChannelsOptionsForm;

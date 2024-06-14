import { FilterAltRounded, FilterListRounded } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { useContext, useState } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { getActivities } from "../../store/activitiesSlice";
import { AppDispatch } from "../../store/store";
import {
  ActivitiesOptionsFormikTypes,
  FormiksTypes,
} from "../../types/forms.types";

const ActivitiesOptionsForm = ({ formik }: FormiksTypes) => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const { queries, setQueries, handleAddQuery } = useContext(AppContext);
  const { searchForActivities, setSearchForActivities } =
    useContext(FormsContext);

  const handleSearch = (value: string) => {
    setSearchForActivities(value);
    dispatch(getActivities({ ...queries, search: value }));
  };

  const handleFilterByType = (value: string) => {
    handleAddQuery({ type: value });
  };

  const handleFilterByOperation = (value: string) => {
    handleAddQuery({ operation: value });
  };

  const handleFilterByDateFrom = (value: string) => {
    handleAddQuery({ from: value });
  };

  const handleFilterByDateTo = (value: string) => {
    handleAddQuery({ to: value });
  };

  const handleFilter = () => {
    setSearchParams(queries);
    dispatch(getActivities({ ...queries, search: searchForActivities }));
  };

  const handleResetAll = () => {
    navigate(`${import.meta.env.VITE_ACTIVITIES_ROUTE}`);
    dispatch(getActivities({}));
    setQueries({});
  };

  (formik as unknown as ActivitiesOptionsFormikTypes).values.type =
    queries?.type || "";
  (formik as unknown as ActivitiesOptionsFormikTypes).values.operation =
    queries?.operation || "";
  (formik as unknown as ActivitiesOptionsFormikTypes).values.from =
    queries?.from || "";
  (formik as unknown as ActivitiesOptionsFormikTypes).values.to =
    queries?.to || "";

  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg md-p-3 sm:!p-2 md:gap-3`}
    >
      <Box
        className={`grid justify-stretch items-end gap-8 grid-cols-2 lg:grid-cols-1 lg:gap-6 md:gap-4 sm:!gap-2`}
      >
        <Box className={`w-[50%] md:w-[75%] sm:w-full`}>
          <Input
            label={"Search Username..."}
            name={"search"}
            type={"search"}
            formik={formik}
            change={handleSearch}
          />
        </Box>
        <Box
          className={`flex justify-end items-center gap-4  md:gap-3 sm:!gap-2 flex-wrap`}
        >
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
              label={"Filter By Type"}
              name={"type"}
              formik={formik}
              change={handleFilterByType}
              options={[
                "owner",
                "officer",
                "customer",
                "company",
                "employee",
                "job",
                "nationality",
              ]}
              select
            />
            <Input
              label={"Filter By Operation"}
              name={"operation"}
              formik={formik}
              change={handleFilterByOperation}
              options={["create", "update", "delete"]}
              select
            />
          </Box>
          <Box
            className={`grid grid-cols-[1fr,1fr,auto] justify-stretch items-end gap-3 md:gap-3 sm:!gap-2 xs:grid flex-wrap`}
          >
            <Box className={`flex gap-3 md:flex-wrap`}>
              <Input
                name={"from"}
                label={"From"}
                type={"date"}
                formik={formik}
                change={handleFilterByDateFrom}
              />
              <Input
                name={"to"}
                label={"To"}
                type={"date"}
                formik={formik}
                change={handleFilterByDateTo}
              />
            </Box>
            <Box className={`flex justify-end items-center md:justify-start`}>
              <Button
                handling={handleFilter}
                title={"Filter"}
                icon={<FilterListRounded />}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ActivitiesOptionsForm;

import { FilterAltRounded, FilterListRounded } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import ExcelButtons from "../../components/ExcelButtons/ExcelButtons";
import Input from "../../components/Input/Input";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { getActivities } from "../../store/activitiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { getUsers } from "../../store/usersSlice";
import { FormiksTypes } from "../../types/forms.types";

const ActivitiesOptionsForm = ({
  register,
  errors,
  setValue,
}: FormiksTypes) => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.users);
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

  const handleFilterByUser = (value: string) => {
    handleAddQuery({ userId: value });
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
    setValue("search", "");
    setValue("type", "");
    setValue("operation", "");
    setValue("from", "");
    setValue("to", "");
  };

  useEffect(() => {
    dispatch(getUsers({ limit: -1 }));
  }, [dispatch]);

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
            register={register}
            errors={errors}
            change={handleSearch}
          />
        </Box>
        <ExcelButtons variant="activities" upload={false} />
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
              register={register}
              errors={errors}
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
              label={"Filter By User"}
              name={"userId"}
              register={register}
              errors={errors}
              change={handleFilterByUser}
              options={users ? users.map((user) => user.name) : ["loading..."]}
              values={users ? users.map((user) => user._id) : ["loading..."]}
              select
            />
            <Input
              label={"Filter By Operation"}
              name={"operation"}
              register={register}
              errors={errors}
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
                register={register}
                errors={errors}
                change={handleFilterByDateFrom}
              />
              <Input
                name={"to"}
                label={"To"}
                type={"date"}
                register={register}
                errors={errors}
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

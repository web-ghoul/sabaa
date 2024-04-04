import { FilterAltRounded, FilterListRounded } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { AppDispatch } from "../../store/store";
import { getUsers } from "../../store/usersSlice";
import { FormiksTypes, UsersOptionsFormikTypes } from "../../types/forms.types";

const UsersOptionsForm = ({ formik }: FormiksTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  const [showFilters, setShowFilters] = useState(false);
  const { setSearchForUsers, searchForUsers, handleOpenUserModal } =
    useContext(FormsContext);
  const [params, setParams] = useState<{ [key: string]: string }>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const { setUsersPage } = useContext(AppContext);

  const getAllParams = () => {
    setUsersPage(1);
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    setParams(allParams);
    return allParams;
  };

  const setAllParams = () => {
    const allParams = getAllParams();
    (formik as unknown as UsersOptionsFormikTypes).values.filterByRole =
      allParams.role;
    (formik as unknown as UsersOptionsFormikTypes).values.filterByStatus =
      allParams.status;
    (formik as unknown as UsersOptionsFormikTypes).values.limit =
      allParams.limit;
    dispatch(getUsers(allParams));
  };

  const handleSearch = (value: string) => {
    dispatch(getUsers({ ...params, search: value }));
    setSearchForUsers(value);
  };

  const handleFilterByRole = (value: string) => {
    if (value) {
      dispatch(getUsers({ ...params, role: value, search: searchForUsers }));
      setSearchParams({ ...getAllParams(), role: value });
    }
  };

  const handleFilterByStatus = (value: string) => {
    if (value) {
      dispatch(getUsers({ ...params, status: value, search: searchForUsers }));
      setSearchParams({ ...getAllParams(), status: value });
    }
  };

  const handleFilter = () => {};

  const handleResetAll = () => {
    setSearchForUsers("");
    setSearchParams({});
    dispatch(getUsers({}));
    setParams({});
    (formik as unknown as UsersOptionsFormikTypes).values.filterByRole = "";
    (formik as unknown as UsersOptionsFormikTypes).values.filterByStatus = "";
    (formik as unknown as UsersOptionsFormikTypes).values.limit = "";
  };

  useEffect(() => {
    setAllParams();
  }, []);

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(getUsers({}));
    }
  }, [dispatch, searchParams]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg md:gap-3 sm:!gap-2 md:p-3 sm:!p-2`}
    >
      <Box
        className={`grid justify-stretch items-end gap-8 grid-cols-2 md:grid-cols-1 md:gap-4 sm:!gap-2`}
      >
        <Input
          label={"Search Name, Person Code..."}
          name={"search"}
          type={"search"}
          formik={formik}
          change={handleSearch}
        />
        <Box
          className={`flex justify-end items-center gap-4  md:gap-3 sm:!gap-2`}
        >
          <Button
            handling={() => handleOpenUserModal("addUser")}
            icon={<RiFileExcel2Fill />}
            title={"Add User"}
          />
          <Button
            variant={"under development"}
            icon={<RiFileExcel2Fill />}
            title={"Excel"}
            bg={"excel"}
          />
          <Button
            variant={"under development"}
            icon={<RiFileExcel2Fill />}
            title={"Excel All"}
            bg={"excel"}
          />
        </Box>
      </Box>
      <Box className={`grid justify-stretch items-center gap-2`}>
        <Box
          className={`flex justify-end items-center gap-4  md:gap-3 sm:!gap-2 md:order-1`}
        >
          <Button
            icon={<FilterAltRounded />}
            bg={"!bg-green-500"}
            handling={() => setShowFilters(!showFilters)}
          />
          <Button
            icon={<FilterListRounded />}
            title={"Filter"}
            handling={handleFilter}
          />
          <Button
            title={"Reset All"}
            handling={handleResetAll}
            bg={"!bg-red-500"}
          />
        </Box>
        <Box
          className={`flex justify-start items-end gap-4 transition-all  md:gap-3 sm:!gap-2 ${
            showFilters ? "h-full" : "h-[0px]"
          } overflow-hidden xs:grid xs:justify-stretch`}
        >
          <Input
            label={"Filter By Status"}
            name={"filterByStatus"}
            formik={formik}
            change={handleFilterByStatus}
            options={["Active", "Pending", "Blocked"]}
            select
          />
          <Input
            label={"Filter By Role"}
            name={"filterByRole"}
            options={["Admin", "User"]}
            select
            formik={formik}
            change={handleFilterByRole}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default UsersOptionsForm;

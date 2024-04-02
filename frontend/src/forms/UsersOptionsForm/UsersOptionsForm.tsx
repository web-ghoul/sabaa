import { FilterAltRounded } from "@mui/icons-material";
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
import { PrimaryIconButton } from "../../mui/buttons/PrimaryIconButton";
import { AppDispatch } from "../../store/store";
import { getUsers } from "../../store/usersSlice";
import { FormiksTypes, UsersOptionsFormikTypes } from "../../types/forms.types";

const UsersOptionsForm = ({ formik }: FormiksTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [showFilters, setShowFilters] = useState(false);
  const { setSearchForUsers, searchForUsers } = useContext(FormsContext);
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
    (formik as unknown as UsersOptionsFormikTypes).values.role = allParams.role;
    (formik as unknown as UsersOptionsFormikTypes).values.status =
      allParams.status;
    (formik as unknown as UsersOptionsFormikTypes).values.limit =
      allParams.limit;
    dispatch(getUsers(allParams));
  };

  const handleSearch = (value: string) => {
    if (value) {
      dispatch(getUsers({ ...params, search: value }));
      setSearchForUsers(value);
    }
  };

  const handleLimitPage = (value: string) => {
    if (value) {
      dispatch(getUsers({ ...params, limit: +value, search: searchForUsers }));
      setSearchParams({ ...getAllParams(), limit: value });
    }
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

  const handleResetAll = () => {
    setSearchForUsers("");
    setSearchParams({});
    dispatch(getUsers({}));
    setParams({});
  };

  useEffect(() => {
    setAllParams();
  }, []);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg md:gap-3 sm:!gap-2 md:p-3 sm:!p-2`}
    >
      <Box
        className={`grid justify-stretch items-center gap-8 grid-cols-2 md:grid-cols-1 md:gap-4 sm:!gap-2`}
      >
        <Box
          className={`flex justify-start items-center gap-4 md:order-1 md:gap-3 sm:!gap-2 xs:grid xs:justify-stretch`}
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
          className={`flex justify-end items-center gap-4  md:gap-3 sm:!gap-2`}
        >
          <PrimaryButton
            onClick={() => navigate(`${import.meta.env.VITE_ADD_USER_ROUTE}`)}
          >
            Add User
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
          className={`flex justify-end items-center gap-4  md:gap-3 sm:!gap-2 md:order-1`}
        >
          <PrimaryIconButton
            className={`!bg-green-500 hover:!bg-green-600`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FilterAltRounded />
          </PrimaryIconButton>
          <PrimaryButton
            onClick={handleResetAll}
            className="!bg-red-500 hover:!bg-red-600"
          >
            Reset All
          </PrimaryButton>
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

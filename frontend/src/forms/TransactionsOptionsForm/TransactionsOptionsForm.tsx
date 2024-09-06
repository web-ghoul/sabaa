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
import { AppDispatch, RootState } from "../../store/store";
import { getTransactions } from "../../store/transactionsSlice";
import { getUsers } from "../../store/usersSlice";
import { FormiksTypes } from "../../types/forms.types";

const TransactionsOptionsForm = ({
  register,
  errors,
  setValue,
  tType,
}: FormiksTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  const [showFilters, setShowFilters] = useState(false);
  const { searchForTransactions, setSearchForTransactions } =
    useContext(FormsContext);
  const { queries, setQueries, handleAddQuery } = useContext(AppContext);
  const { users } = useSelector((state: RootState) => state.users);
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    setSearchForTransactions(value);
    dispatch(getTransactions({ ...queries, search: value }));
  };

  const handleFilterByWorkPermitExpiryFrom = (value: string) => {
    handleAddQuery({ expireWorkPermitFrom: value });
  };

  const handleFilterByWorkPermitExpiryTo = (value: string) => {
    handleAddQuery({ expireWorkPermitTo: value });
  };

  const handleFilterByResidenceDateFrom = (value: string) => {
    handleAddQuery({ residenceFrom: value });
  };

  const handleFilterByResidenceDateTo = (value: string) => {
    handleAddQuery({ residenceTo: value });
  };

  const handleFilterByChangeStatusDateFrom = (value: string) => {
    handleAddQuery({ changeStatusDateFrom: value });
  };

  const handleFilterByChangeStatusDateTo = (value: string) => {
    handleAddQuery({ changeStatusDateTo: value });
  };

  const handleFilterByStatus = (value: string) => {
    handleAddQuery({ status: value });
  };

  const handleFilterByUser = (value: string) => {
    handleAddQuery({ userId: value });
  };

  const handleFilter = () => {
    setSearchParams(queries);
    dispatch(
      getTransactions({
        ...queries,
        search: searchForTransactions,
        type: tType,
      })
    );
  };

  const handleResetAll = () => {
    if (tType === "all") {
      navigate(`${import.meta.env.VITE_TRANSACTIONS_ALL_ROUTE}`);
    } else if (tType === "pre") {
      navigate(`${import.meta.env.VITE_TRANSACTIONS_PRE_ROUTE}`);
    } else if (tType === "new") {
      navigate(`${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`);
    } else if (tType === "renew") {
      navigate(`${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`);
    }
    dispatch(getTransactions({ type: tType }));
    setQueries({});
    setValue("search", "");
    setValue("status", "");
    setValue("role", "");
    setValue("sort", "");
    setValue("expireWorkPermitFrom", "");
    setValue("expireWorkPermitTo", "");
    setValue("residenceFrom", "");
    setValue("residenceTo", "");
    setValue("changeStatusDateFrom", "");
    setValue("changeStatusDateTo", "");
    setValue("type", "");
    setValue("userId", "");
  };

  useEffect(() => {
    dispatch(getUsers({ limit: -1 }));
  }, [dispatch]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-4  p-4 !rounded-lg md:gap-3 sm:!gap-2 md:p-3 sm:!p-2`}
    >
      <Box
        className={`grid justify-stretch items-end gap-8 grid-cols-2 md:grid-cols-1 md:gap-4 sm:!gap-2`}
      >
        <Box className={`w-[50%] md:w-[75%] sm:w-full`}>
          <Input
            label={"Search transaction number , employee , company..."}
            name={"search"}
            type={"search"}
            register={register}
            errors={errors}
            change={handleSearch}
          />
        </Box>
        <ExcelButtons
          addBtn={tType === "all" ? "" : "Add Transaction"}
          variant="transactions"
        />
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
            title={"Reset All"}
            handling={handleResetAll}
            bg={"!bg-red-500"}
          />
        </Box>
        <Box
          className={`grid grid-cols-2 justify-start items-end gap-4 transition-all md:!flex md:gap-3 sm:!gap-2 sm:flex-wrap ${
            showFilters ? "h-full" : "h-[0px]"
          } overflow-hidden xs:grid xs:justify-stretch`}
        >
          <Input
            label={"Filter By Transaction Status"}
            name={"status"}
            register={register}
            errors={errors}
            change={handleFilterByStatus}
            options={["InProcess", "Approved", "Rejected", "Nawakes"]}
            select
          />
          <Input
            label={"Filter By User"}
            name={"userId"}
            register={register}
            errors={errors}
            change={handleFilterByUser}
            options={users ? users.map((user) => user.name) : ["Loading..."]}
            values={users ? users.map((user) => user._id) : ["Loading..."]}
            select
          />
          <Box className={`grid justify-stretch gap-4 md:gap-3 sm:!gap-2`}>
            <Typography variant="h6">Filter By Work Permit Expiry</Typography>
            <Box
              className={`flex justify-stretch gap-4 md:gap-3 sm:!gap-2 md:flex-wrap`}
            >
              <Input
                name={"expireWorkPermitFrom"}
                label={"From"}
                type={"date"}
                register={register}
                errors={errors}
                change={handleFilterByWorkPermitExpiryFrom}
              />
              <Input
                name={"expireWorkPermitTo"}
                label={"To"}
                type={"date"}
                register={register}
                errors={errors}
                change={handleFilterByWorkPermitExpiryTo}
              />
            </Box>
          </Box>
          {(tType === "all" || tType === "new" || tType === "renew") && (
            <Box className={`grid justify-stretch gap-4 md:gap-3 sm:!gap-2`}>
              <Typography variant="h6">
                Filter By Residence Expire Date
              </Typography>
              <Box
                className={`flex justify-stretch gap-4 md:gap-3 sm:!gap-2 md:flex-wrap`}
              >
                <Input
                  name={"residenceFrom"}
                  label={"From"}
                  type={"date"}
                  register={register}
                  errors={errors}
                  change={handleFilterByResidenceDateFrom}
                />
                <Input
                  name={"residenceTo"}
                  label={"To"}
                  type={"date"}
                  register={register}
                  errors={errors}
                  change={handleFilterByResidenceDateTo}
                />
              </Box>
            </Box>
          )}
          {tType === "all" && (
            <Box className={`grid justify-stretch gap-4 md:gap-3 sm:!gap-2`}>
              <Typography variant="h6">Filter By Change Status Date</Typography>
              <Box
                className={`flex justify-stretch gap-4 md:gap-3 sm:!gap-2 md:flex-wrap`}
              >
                <Input
                  name={"changeStatusDateFrom"}
                  label={"From"}
                  type={"date"}
                  register={register}
                  errors={errors}
                  change={handleFilterByChangeStatusDateFrom}
                />
                <Input
                  name={"changeStatusDateTo"}
                  label={"To"}
                  type={"date"}
                  register={register}
                  errors={errors}
                  change={handleFilterByChangeStatusDateTo}
                />
              </Box>
            </Box>
          )}
          <Box className={`flex justify-start items-center`}>
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

export default TransactionsOptionsForm;

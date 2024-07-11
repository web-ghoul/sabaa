import { Box, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { getJobs } from "../../store/jobsSlice";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const TransactionForm = ({
  register,
  errors,
  type,
  setValue,
  getValues,
}: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const { handleCloseTransactionModal } = useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { jobs } = useSelector((state: RootState) => state.jobs);

  useEffect(() => {
    dispatch(getNationalities({ limit: -1 }));
    dispatch(getJobs({ limit: -1 }));
  }, [dispatch]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type?.startsWith("add") ? (
        <Title head={"h4"} align={"left"} title={"Add New Work Permit"} />
      ) : (
        <Title head={"h4"} align={"left"} title={"Edit Work Permit"} />
      )}

      <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
        <Input
          register={register}
          errors={errors}
          label={"Transaction Number"}
          name={"transactionNo"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Gender"}
          select
          options={["Male", "Female"]}
          name={"gender"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Gender"}
          select
          options={["Male", "Female"]}
          name={"gender"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Employee Name"}
          name={"employeeName"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Date of Birth"}
          name={"dob"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Date of Birth"}
          name={"dob"}
          type={"date"}
        />
        {nationalities && nationalities.length > 0 && (
          <AutoCompleteSearch
            label={"Nationality"}
            options={nationalities}
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
            name={"nationality"}
          />
        )}
        <Input
          register={register}
          errors={errors}
          label={"Passport Number"}
          name={"passportNumber"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Passport Expire Date"}
          name={"passportExpiry"}
          type={"date"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Passport Expire Date"}
          name={"passportExpiry"}
          type={"date"}
        />
        {jobs && jobs.length > 0 && (
          <AutoCompleteSearch
            label={"Job"}
            options={jobs}
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
            name={"job"}
          />
        )}
        <Input
          register={register}
          errors={errors}
          label={"UID Number"}
          name={"uid"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Emirates Id Number"}
          name={"emiratesNo"}
        />
      </Box>
      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseTransactionModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default TransactionForm;

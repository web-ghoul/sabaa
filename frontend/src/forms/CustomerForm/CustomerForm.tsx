import { Box, Paper } from "@mui/material";
import { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { getJobs } from "../../store/jobsSlice";
import { getNationalities } from "../../store/nationalitiesSlice";
import { getSelector } from "../../store/selectorSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const CustomerForm = ({
  register,
  errors,
  setValue,
  getValues,
  type,
}: FormiksTypes) => {
  const { formsLoading, setCustomerImage } = useContext(FormsContext);
  const { handleCloseCustomerModal } = useContext(ModalsContext);
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const { selector } = useSelector((state: RootState) => state.selector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNationalities({ limit: -1 }));
    dispatch(getJobs({ limit: -1 }));
    dispatch(getSelector({ selector: "state" }));
  }, [dispatch]);

  useEffect(() => {
    if (type?.startsWith("add")) {
      setCustomerImage("");
    }
  }, [setCustomerImage, type]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addCustomer" ? (
        <Title head={"h4"} align={"left"} title={"Add New Customer"} />
      ) : (
        type === "editCustomer" && (
          <Title head={"h4"} align={"left"} title={"Edit Customer"} />
        )
      )}

      {useMemo(
        () => type && <UploadImage title={"Customer Avatar"} variant={type} />,
        [type]
      )}

      <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
        <Input
          errors={errors}
          register={register}
          label={"English Name"}
          name={"name"}
        />
        <Input
          errors={errors}
          register={register}
          label={"Arabic Name"}
          name={"nameAr"}
        />
        <Input
          errors={errors}
          register={register}
          label={"Person Code"}
          name={"personCode"}
          type={"text"}
        />
        <Input
          errors={errors}
          register={register}
          label={"Email"}
          name={"email"}
          type={"email"}
        />
        <Input
          errors={errors}
          register={register}
          label={"Phone"}
          type={"text"}
          name={"phone"}
        />
        <Input
          errors={errors}
          register={register}
          label={"Address"}
          name={"address"}
        />
        <Input
          errors={errors}
          register={register}
          type={"date"}
          name={"dob"}
          label={"Date of Birth"}
        />
        <Input
          errors={errors}
          register={register}
          label={"State"}
          name={"state"}
          select
          options={selector ? selector.data : ["Loading..."]}
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
        {jobs && jobs.length > 0 && (
          <AutoCompleteSearch
            label={"Jobs"}
            options={jobs}
            setValue={setValue}
            getValues={getValues}
            errors={errors}
            register={register}
            name={"job"}
          />
        )}
        <Input
          errors={errors}
          register={register}
          label={"Gender"}
          name={"gender"}
          select
          options={["Male", "Female"]}
        />
        <Input
          errors={errors}
          register={register}
          label={"Emirates ID"}
          name={"emiratesId"}
          type={"text"}
        />
        <Input
          errors={errors}
          register={register}
          label={"UID Number"}
          name={"uid"}
          type={"text"}
        />
        <Input
          errors={errors}
          register={register}
          label={"File Immgiration Number"}
          name={"fileImmgNo"}
        />
        <Input
          errors={errors}
          register={register}
          type={"date"}
          name={"residenceExpiryDate"}
          label={"Residence Expire Date"}
        />
        <Input
          errors={errors}
          register={register}
          label={"Status"}
          name={"status"}
          select
          options={["active", "inactive"]}
        />
        <Input
          errors={errors}
          register={register}
          label={"Sponsor"}
          name={"sponsor"}
        />
        <Input
          errors={errors}
          register={register}
          label={"Remarks"}
          name={"remarks"}
          textarea
        />
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseCustomerModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default CustomerForm;

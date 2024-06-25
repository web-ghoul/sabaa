import { Box, Checkbox, FormControlLabel, Paper } from "@mui/material";
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
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
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const ProForm = ({
  register,
  errors,
  setValue,
  getValues,
  type,
}: FormiksTypes) => {
  const { formsLoading, setProImage } = useContext(FormsContext);
  const { handleCloseProModal } = useContext(ModalsContext);
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const [checked, setChecked] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setChecked(checked);
    if (checked) {
      setValue("type", "owner&pro");
    } else {
      setValue("type", "pro");
    }
  };
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNationalities({ limit: -1 }));
    dispatch(getJobs({ limit: -1 }));
  }, [dispatch]);

  useEffect(() => {
    if (type?.startsWith("add")) {
      setProImage("");
    }
  }, [setProImage, type]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addPro" ? (
        <Title
          head={"h4"}
          align={"left"}
          title={"Add New Public Relation Officer"}
        />
      ) : (
        type === "editPro" && (
          <Title
            head={"h4"}
            align={"left"}
            title={"Edit Public Relation Officer"}
          />
        )
      )}

      {useMemo(
        () => type && <UploadImage title={"Officer Avatar"} variant={type} />,
        [type]
      )}

      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={"Owner & Officer"}
      />

      <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
        <Input
          register={register}
          errors={errors}
          label={"English Name"}
          name={"name"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Arabic Name"}
          name={"nameAr"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Person Code"}
          name={"personCode"}
          type={"text"}
        />

        <Input
          register={register}
          errors={errors}
          label={"Email"}
          name={"email"}
          type={"email"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Phone"}
          type={"text"}
          name={"phone"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Address"}
          name={"address"}
        />
        <Input
          register={register}
          errors={errors}
          type={"date"}
          name={"dob"}
          label={"Date of Birth"}
        />
        <Input
          register={register}
          errors={errors}
          label={"State"}
          name={"state"}
          select
          options={["dubai"]}
        />
        {nationalities && nationalities.length > 0 && (
          <AutoCompleteSearch
            label={"Nationality"}
            options={nationalities}
            setValue={setValue}
            getValues={getValues}
            register={register}
            errors={errors}
            name={"nationality"}
          />
        )}
        {jobs && jobs.length > 0 && (
          <AutoCompleteSearch
            label={"Job"}
            options={jobs}
            setValue={setValue}
            getValues={getValues}
            register={register}
            errors={errors}
            name={"job"}
          />
        )}
        <Input
          register={register}
          errors={errors}
          label={"Gender"}
          name={"gender"}
          select
          options={["Male", "Female"]}
        />
        <Input
          register={register}
          errors={errors}
          label={"Emirates ID"}
          name={"emiratesId"}
          type={"text"}
        />
        <Input
          register={register}
          errors={errors}
          label={"UID Number"}
          name={"uid"}
          type={"text"}
        />
        <Input
          register={register}
          errors={errors}
          type={"date"}
          name={"residenceExpiryDate"}
          label={"Residence Expire Date"}
        />
        <Input
          register={register}
          errors={errors}
          label={"File Immgiration Number"}
          name={"fileImmgNo"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Status"}
          name={"status"}
          select
          options={["Active", "Inactive"]}
        />
        <Input
          register={register}
          errors={errors}
          label={"Sponsor"}
          name={"sponsor"}
        />
        <Input
          register={register}
          errors={errors}
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
          handling={handleCloseProModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default ProForm;

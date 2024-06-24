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
import { getJobs } from "../../store/jobsSlice";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const SponsorForm = ({
  register,
  errors,
  setValue,
  getValues,
  type,
}: FormiksTypes) => {
  const { formsLoading, handleCloseSponsorModal, setSponsorImage } =
    useContext(FormsContext);
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNationalities({ limit: -1 }));
    dispatch(getJobs({ limit: -1 }));
  }, [dispatch]);

  useEffect(() => {
    if (type?.startsWith("add")) {
      setSponsorImage("");
    }
  }, [setSponsorImage, type]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addSponsor" ? (
        <Title head={"h4"} align={"left"} title={"Add New Sponsor"} />
      ) : (
        type === "editSponsor" && (
          <Title head={"h4"} align={"left"} title={"Edit Sponsor"} />
        )
      )}

      {useMemo(
        () => type && <UploadImage title={"Sponsor Avatar"} variant={type} />,
        [type]
      )}

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
            label={"Jobs"}
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
          label={"Relative Relation"}
          name={"relativeRelation"}
          select
          options={[
            "Husband",
            "Wife",
            "Son",
            "Daughter",
            "Father",
            "Mother",
            "GrandPa",
            "GrandMa",
            "Uncle",
            "Maid",
          ]}
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
          type={"date"}
          name={"residenceExpiryDate"}
          label={"Residence Expire Date"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Status"}
          name={"status"}
          select
          options={["active", "inactive"]}
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
          handling={handleCloseSponsorModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default SponsorForm;

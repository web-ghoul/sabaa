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
import { getJobs } from "../../store/jobsSlice";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes, ProFormikTypes } from "../../types/forms.types";

const ProForm = ({ formik, type }: FormiksTypes) => {
  const { formsLoading, handleCloseProModal, setProImage } =
    useContext(FormsContext);
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const [checked, setChecked] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setChecked(checked);
    if (checked) {
      (formik as unknown as ProFormikTypes).values.type = "owner&pro";
    } else {
      (formik as unknown as ProFormikTypes).values.type = "pro";
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
        <Input formik={formik} label={"English Name"} name={"name"} />
        <Input formik={formik} label={"Arabic Name"} name={"nameAr"} />
        <Input
          formik={formik}
          label={"Person Code"}
          name={"personCode"}
          type={"text"}
          variant={"numeric"}
        />

        <Input formik={formik} label={"Email"} name={"email"} type={"email"} />
        <Input
          formik={formik}
          label={"Phone"}
          type={"text"}
          variant={"numeric"}
          name={"phone"}
        />
        <Input formik={formik} label={"Address"} name={"address"} />
        <Input
          formik={formik}
          type={"date"}
          name={"dob"}
          label={"Date of Birth"}
        />
        <Input
          formik={formik}
          label={"State"}
          name={"state"}
          select
          options={["dubai"]}
        />
        {nationalities && nationalities.length > 0 && (
          <AutoCompleteSearch
            label={"Nationality"}
            options={nationalities}
            formik={formik}
            name={"nationality"}
          />
        )}
        {jobs && jobs.length > 0 && (
          <AutoCompleteSearch
            label={"Job"}
            options={jobs}
            formik={formik}
            name={"job"}
          />
        )}
        <Input
          formik={formik}
          label={"Gender"}
          name={"gender"}
          select
          options={["Male", "Female"]}
        />
        <Input
          formik={formik}
          label={"Emirates ID"}
          name={"emiratesId"}
          type={"text"}
          variant={"numeric"}
        />
        <Input
          formik={formik}
          label={"UID Number"}
          name={"uid"}
          type={"text"}
          variant={"numeric"}
        />
        <Input
          formik={formik}
          type={"date"}
          name={"residenceExpiryDate"}
          label={"Residence Expire Date"}
        />
        <Input
          formik={formik}
          label={"File Immgiration Number"}
          name={"fileImmgNo"}
        />
        <Input
          formik={formik}
          label={"Status"}
          name={"status"}
          select
          options={["Active", "Inactive"]}
        />
        <Input formik={formik} label={"Sponsor"} name={"sponsor"} />
        <Input formik={formik} label={"Remarks"} name={"remarks"} textarea />
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

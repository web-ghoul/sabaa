import { Box, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../contexts/FormsContext";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const AddOwnerForm = ({ formik }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const navigate = useNavigate();
  const { nationalities, isLoading } = useSelector(
    (state: RootState) => state.nationalities
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNationalities({}));
  }, [dispatch]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      <Title head={"h4"} align={"left"} title={"Add New Owner"} />

      {useMemo(
        () => (
          <UploadImage title={"Owner Avatar"} variant="addOwner" />
        ),
        []
      )}

      <Box className={`grid grid-cols-3 justify-stretch items-end gap-6`}>
        <Input formik={formik} label={"English Name"} name={"name"} />
        <Input formik={formik} label={"Arabic Name"} name={"nameAr"} />
        <Input formik={formik} label={"Phone"} type={"tel"} name={"phone"} />
        <AutoCompleteSearch
          label={"Nationality"}
          options={nationalities}
          loading={isLoading}
          formik={formik}
          name={"nationality"}
        />
        <Input formik={formik} label={"Emirates ID"} name={"emiratesId"} />
        <Input formik={formik} label={"UID Number"} name={"_id"} />
        <Input formik={formik} label={"Person Code"} name={"personCode"} />
        <Input formik={formik} label={"Email"} name={"email"} />
        <Input formik={formik} label={"State"} name={"state"} />
        <Input formik={formik} label={"Address"} name={"address"} />
        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant="h6">Date of Birth</Typography>
          <Input formik={formik} type={"date"} name={"dob"} />
        </Box>
        <Input formik={formik} label={"Remarks"} name={"remarks"} />
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>Add</SubmitButton>
        <PrimaryButton
          onClick={() => navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`)}
          className={`!bg-error`}
        >
          Cancel
        </PrimaryButton>
      </Box>
    </Paper>
  );
};

export default AddOwnerForm;

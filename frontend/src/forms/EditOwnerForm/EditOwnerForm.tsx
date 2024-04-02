import { Box, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const EditOwnerForm = ({ formik }: FormiksTypes) => {
  const { formsLoading, handleCloseEditOwnerModal } = useContext(FormsContext);
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
      <Title head={"h4"} align={"left"} title={"Edit Owner"} />

      {useMemo(
        () => (
          <UploadImage title={"Owner Avatar"} variant="editOwner" />
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
        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant="h6">Date of Birth</Typography>
          <Input formik={formik} type={"date"} name={"dob"} />
        </Box>
        <Input formik={formik} label={"Email"} name={"email"} />
        <Input
          formik={formik}
          label={"State"}
          name={"state"}
          select
          options={["dubai"]}
        />
        <Input formik={formik} label={"Address"} name={"address"} />
        <Input formik={formik} label={"Remarks"} name={"remarks"} />
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>Edit</SubmitButton>
        <PrimaryButton
          onClick={handleCloseEditOwnerModal}
          className={`!bg-error`}
        >
          Cancel
        </PrimaryButton>
      </Box>
    </Paper>
  );
};

export default EditOwnerForm;

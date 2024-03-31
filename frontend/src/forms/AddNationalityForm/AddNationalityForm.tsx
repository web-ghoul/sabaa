import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { FormiksTypes } from "../../types/forms.types";

const AddNationalityForm = ({ formik }: FormiksTypes) => {
  const { formsLoading, handleCloseAddNationalityModal } =
    useContext(FormsContext);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      <Title head={"h4"} align={"center"} title={"Add New Nationality"} />

      <Box className={`grid grid-cols-2 justify-stretch items-center gap-6`}>
        <Input formik={formik} label={"Nationality Id"} name={"_id"} />
        <Input formik={formik} name={"nationality"} label={"Nationality"} />
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>Add</SubmitButton>
        <PrimaryButton
          onClick={handleCloseAddNationalityModal}
          className={`!bg-error`}
        >
          Cancel
        </PrimaryButton>
      </Box>
    </Paper>
  );
};

export default AddNationalityForm;

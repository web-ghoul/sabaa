import { Box } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { FormiksTypes } from "../../types/forms.types";

const EditJobForm = ({ formik }: FormiksTypes) => {
  const { formsLoading, handleCloseEditJobModal } = useContext(FormsContext);

  return (
    <Box
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4`}
    >
      <Title align={"center"} head={"h3"} title={"Edit Job"} />
      <Box className={`grid justify-stretch items-center gap-6 grid-cols-3`}>
        <Input formik={formik} label={"Job Title"} name={"jobTitle"} />
        <Input formik={formik} label={"ENSCO Code"} name={"ENSCOCode"} />
        <Input formik={formik} label={"MOHRE Code"} name={"_id"} />
      </Box>
      <Box className={`flex justify-center items-center gap-4`}>
        <SubmitButton loading={formsLoading}>Edit</SubmitButton>
        <PrimaryButton
          className={`!bg-error`}
          onClick={handleCloseEditJobModal}
        >
          Cancel
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default EditJobForm;

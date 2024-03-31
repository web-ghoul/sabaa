import { Box } from "@mui/material";
import { useContext } from "react";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";

const DeleteForm = () => {
  const { formsLoading, handleCloseDeleteModal } = useContext(FormsContext);
  return (
    <Box className={`grid justify-stretch items-center gap-16`}>
      <Title head={"h4"} align={"center"} title={"Are you sure ?"} />
      <Box className={`flex justify-center items-center gap-8`}>
        <SubmitButton loading={formsLoading}>Delete</SubmitButton>
        <PrimaryButton
          onClick={handleCloseDeleteModal}
          className={`!bg-error hover:!bg-red-600`}
        >
          Cancel
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default DeleteForm;

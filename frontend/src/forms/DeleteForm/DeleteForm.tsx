import { Box } from "@mui/material";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";

const DeleteForm = () => {
  const { formsLoading, handleCloseDeleteModal } = useContext(FormsContext);
  return (
    <Box className={`grid justify-stretch items-center gap-16`}>
      <Title head={"h4"} align={"center"} title={"Are you sure ?"} />
      <Box className={`flex justify-center items-center gap-8`}>
        <SubmitButton loading={formsLoading}>Delete</SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseDeleteModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Box>
  );
};

export default DeleteForm;

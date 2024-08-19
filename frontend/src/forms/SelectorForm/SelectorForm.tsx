import { Box } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { FormiksTypes } from "../../types/forms.types";

const SelectorForm = ({ register, errors }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);

  return (
    <Box
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 sm:justify-center`}
    >
      <Title title={"Add New Option"} />
      <Input
        register={register}
        errors={errors}
        label={"Option"}
        name={"option"}
      />
      <Box className={`m-auto`}>
        <SubmitButton loading={formsLoading}>Save</SubmitButton>
      </Box>
    </Box>
  );
};

export default SelectorForm;

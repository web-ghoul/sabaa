import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { FormiksTypes } from "../../types/forms.types";

const CompanyInfoForm = ({ register, errors }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);

  return (
    <Paper className={`paper`}>
      <Title title={"Company Info"} align="left" />
      <Box
        className={`grid flex-wrap justify-stretch items-start grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-center`}
      >
        <Input
          register={register}
          errors={errors}
          label={"Email"}
          name={"email"}
          type={"email"}
        />
      </Box>
      <SubmitButton loading={formsLoading}>Edit</SubmitButton>
    </Paper>
  );
};

export default CompanyInfoForm;

import { Box } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { FormiksTypes } from "../../types/forms.types";

const ForgotPasswordForm = ({ formik }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);

  return (
    <Box
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4`}
    >
      <Title title={"Forgot Password"} />

      <Box className={`grid justify-stretch items-center gap-6`}>
        <Input formik={formik} label={"Email"} name={"email"} />
      </Box>

      <Box className={`m-auto`}>
        <SubmitButton loading={formsLoading}>Send</SubmitButton>
      </Box>
    </Box>
  );
};

export default ForgotPasswordForm;

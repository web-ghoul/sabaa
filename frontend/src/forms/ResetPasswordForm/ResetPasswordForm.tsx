import { Box } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { FormiksTypes } from "../../types/forms.types";

const ResetPasswordForm = ({ register, errors }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  return (
    <Box className={`grid justify-stretch items-center gap-8`}>
      <Title title={"Reset Password"} />
      <Box
        className={`grid justify-stretch items-center gap-6 grid-cols-2 xs:grid-cols-1`}
      >
        <Input
          register={register}
          errors={errors}
          label={"Password"}
          type={"password"}
          name={"password"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Confirm Password"}
          type={"password"}
          name={"confirmPassword"}
        />
      </Box>
      <Box className={`m-auto`}>
        <SubmitButton loading={formsLoading}>Reset</SubmitButton>
      </Box>
    </Box>
  );
};

export default ResetPasswordForm;

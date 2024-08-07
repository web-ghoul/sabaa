import { Box, Button } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { FormiksTypes } from "../../types/forms.types";

const LoginForm = ({ register, errors }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const { handleOpenForgotPasswordModal } = useContext(ModalsContext);

  return (
    <Box
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 sm:justify-center`}
    >
      <Title title={"Login to Dashboard"} />
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
        <Input
          register={register}
          errors={errors}
          label={"Password"}
          type={"password"}
          name={"password"}
          ac={"current-pasword"}
        />
      </Box>
      <Box
        className={`grid justify-stretch items-center gap-2 sm:justify-center`}
      >
        <Button
          className={`!underline !font-[600] hover:!cursor-pointer !p-0 !text-black !lowercase !w-fit`}
          onClick={handleOpenForgotPasswordModal}
        >
          Forgot Password ?
        </Button>
        <Box className={`m-auto`}>
          <SubmitButton loading={formsLoading}>Login</SubmitButton>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;

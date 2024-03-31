import { Box, Button } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { FormiksTypes } from "../../types/forms.types";

const LoginForm = ({ formik }: FormiksTypes) => {
  const { formsLoading, handleOpenForgotPasswordModal } =
    useContext(FormsContext);
  return (
    <Box
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4`}
    >
      <Title title={"Login to Dasboard"} />
      <Box className={`grid justify-stretch items-center gap-6`}>
<<<<<<< HEAD
        <Input formik={formik} label={"Email"} name={"email"} />
=======
        <Input formik={formik} label={"Username"} name={"username"} />
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        <Input
          formik={formik}
          label={"Password"}
          type={"password"}
          name={"password"}
<<<<<<< HEAD
          ac={"current-pasword"}
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        />
      </Box>
      <Box className={`grid justify-stretch items-center gap-2`}>
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

import { Box } from "@mui/material";
import { useContext } from "react";
import OTPInput from "react-otp-input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { FormiksTypes, OTPFormTypes } from "../../types/forms.types";

const OTPForm = ({ formik }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  return (
    <Box
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 sm:justify-center`}
    >
      <Title title={"Enter OTP"} />
      <Box
        className={`grid flex-wrap justify-stretch items-start grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-center`}
      >
        <OTPInput
          value={(formik.values as unknown as OTPFormTypes).otp}
          onChange={formik.handleChange}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </Box>

      <Box className={`m-auto`}>
        <SubmitButton loading={formsLoading}>Send</SubmitButton>
      </Box>
    </Box>
  );
};

export default OTPForm;

import * as yup from "yup";

const useOTPSchema = () => {
  const OTPSchema = yup.object({
    otp: yup.string().required("OTP is required"),
  });

  const OTPInitialValues = {
    otp: "",
  };

  return { OTPSchema, OTPInitialValues };
};

export default useOTPSchema;

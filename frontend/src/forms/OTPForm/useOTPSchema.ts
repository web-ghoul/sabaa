import * as yup from "yup";

const useOTPSchema = () => {
  const OTPSchema = yup.object({
    otp: yup.string().required("OTP is required"),
  });

  const OTPInitailValues = {
    otp: "",
  };

  return { OTPSchema, OTPInitailValues };
};

export default useOTPSchema;

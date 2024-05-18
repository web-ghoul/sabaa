import * as yup from "yup";

export const OTPSchema = yup.object({
  otp: yup.string().required("OTP is required"),
});

export const OTPInitailValues = {
  otp: "",
};

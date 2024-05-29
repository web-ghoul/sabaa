import * as yup from "yup";

export const ConvertCustomerSchema = yup.object({
  type: yup.string().required("Person type is required"),
});

export const ConvertCustomerInitailValues = {
  type: "",
};

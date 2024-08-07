import * as yup from "yup";

const useConvertCustomerSchema = () => {
  const ConvertCustomerSchema = yup.object({
    type: yup.string().required("Person type is required"),
  });

  const ConvertCustomerInitialValues = {
    type: "",
  };

  return { ConvertCustomerSchema, ConvertCustomerInitialValues };
};

export default useConvertCustomerSchema;

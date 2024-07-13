import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";

const useNationalitySchema = () => {
  const { editableNationalityData } = useContext(FormsContext);

  const NationalitySchema = yup.object({
    id: yup.string().required("Nationality Id is required"),
    nationality: yup.string().required("Nationality is required"),
  });

  const NationalityInitialValues = {
    id: editableNationalityData?.id || "",
    nationality: editableNationalityData?.nationality || "",
  };

  return { NationalitySchema, NationalityInitialValues };
};

export default useNationalitySchema;

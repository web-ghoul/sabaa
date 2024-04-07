import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";

const useNationalitySchema = () => {
  const { editableNationalityData } = useContext(FormsContext);

  const NationalitySchema = yup.object({
    _id: yup.string().required("Nationality Id is required"),
    nationality: yup.string().required("Nationality is required"),
  });

  const NationalityInitailValues = {
    _id: editableNationalityData?._id || "",
    nationality: editableNationalityData?.nationality || "",
  };

  return { NationalitySchema, NationalityInitailValues };
};

export default useNationalitySchema;

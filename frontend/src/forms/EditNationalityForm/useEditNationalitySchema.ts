import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";

const useEditNationalitySchema = () => {
  const { editableNationalityData } = useContext(FormsContext);

  const EditNationalitySchema = yup.object({
    _id: yup.string().required("Nationality Id is required"),
    nationality: yup.string().required("Nationality is required"),
  });

  const EditNationalityInitailValues = {
    _id: editableNationalityData?._id,
    nationality: editableNationalityData?.nationality,
  };

  return { EditNationalitySchema, EditNationalityInitailValues };
};

export default useEditNationalitySchema;

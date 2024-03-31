import * as yup from "yup";

import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useEditJobSchema = () => {
  const { editableJobData } = useContext(FormsContext);

  const EditJobSchema = yup.object({
    jobTitle: yup.string().required("Job Title is required"),
    ENSCOCode: yup.string().required("ENSCO Code is required"),
    _id: yup.string().required("MOHRE Code is required"),
  });

  const EditJobInitailValues = {
    jobTitle: editableJobData?.jobTitle,
    ENSCOCode: editableJobData?.ENSCOCode,
    _id: editableJobData?._id,
  };
  return { EditJobSchema, EditJobInitailValues };
};

export default useEditJobSchema;

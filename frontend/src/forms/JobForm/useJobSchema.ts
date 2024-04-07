import * as yup from "yup";

import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useJobSchema = () => {
  const { editableJobData } = useContext(FormsContext);

  const JobSchema = yup.object({
    jobTitle: yup.string().required("Job Title is required"),
    ENSCOCode: yup.string().required("ENSCO Code is required"),
    _id: yup.string().required("MOHRE Code is required"),
  });

  const JobInitailValues = {
    jobTitle: editableJobData?.jobTitle || "",
    ENSCOCode: editableJobData?.ENSCOCode || "",
    _id: editableJobData?._id || "",
  };
  return { JobSchema, JobInitailValues };
};

export default useJobSchema;

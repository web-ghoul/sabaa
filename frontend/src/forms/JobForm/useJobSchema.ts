import * as yup from "yup";

import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useJobSchema = () => {
  const { editableJobData } = useContext(FormsContext);

  const JobSchema = yup.object({
    jobTitle: yup.string().required("Job Title is required"),
    ENSCOCode: yup.string().required("ENSCO Code is required"),
    MOHRE: yup.string().required("MOHRE Code is required"),
  });

  const JobInitialValues = {
    jobTitle: editableJobData?.jobTitle || "",
    ENSCOCode: editableJobData?.ENSCOCode || "",
    MOHRE: editableJobData?.MOHRE || "",
  };
  return { JobSchema, JobInitialValues };
};

export default useJobSchema;

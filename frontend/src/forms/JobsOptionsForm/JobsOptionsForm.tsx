import { useContext } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import { FormsContext } from "../../contexts/FormsContext";
import { getJobs } from "../../store/jobsSlice";
import { AppDispatch } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const JobsOptionsForm = ({ formik }: FormiksTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  const { setSearchForJobs } = useContext(FormsContext);

  const handleChange = (value: string) => {
    dispatch(getJobs({ page: 0, search: value }));
    setSearchForJobs(value);
  };
  return (
    <Input
      label={"Search For Owner..."}
      name={"search"}
      type={"search"}
      formik={formik}
      change={handleChange}
    />
  );
};

export default JobsOptionsForm;

import Input from "../../components/Input/Input";
import { FormiksTypes } from "../../types/forms.types";

const UsersOptionsForm = ({ formik }: FormiksTypes) => {
  return (
    <Input
      label={"Search For User..."}
      name={"search"}
      type={"search"}
      formik={formik}
    />
  );
};

export default UsersOptionsForm;

import Input from "../../components/Input/Input";
import { FormiksTypes } from "../../types/forms.types";

const OwnersOptionsForm = ({ formik }: FormiksTypes) => {
  return (
    <Input
      label={"Search For Owner..."}
      name={"search"}
      type={"search"}
      formik={formik}
    />
  );
};

export default OwnersOptionsForm;

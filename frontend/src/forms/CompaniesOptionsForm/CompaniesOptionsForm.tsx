import Input from "../../components/Input/Input";
import { FormiksTypes } from "../../types/forms.types";

const CompaniesOptionsForm = ({ formik }: FormiksTypes) => {
  return (
    <Input
      label={"Search For Company..."}
      name={"search"}
      type={"search"}
      formik={formik}
    />
  );
};

export default CompaniesOptionsForm;

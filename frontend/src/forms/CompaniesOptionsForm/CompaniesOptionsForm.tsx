import { useContext } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import { FormsContext } from "../../contexts/FormsContext";
import { getCompanies } from "../../store/companiesSlice";
import { AppDispatch } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const CompaniesOptionsForm = ({ formik }: FormiksTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  const { setSearchForCompanies } = useContext(FormsContext);

  const handleChange = (value: string) => {
    dispatch(getCompanies({ page: 0, search: value }));
    setSearchForCompanies(value);
  };
  return (
    <Input
      label={"Search For Company..."}
      name={"search"}
      type={"search"}
      formik={formik}
      change={handleChange}
    />
  );
};

export default CompaniesOptionsForm;

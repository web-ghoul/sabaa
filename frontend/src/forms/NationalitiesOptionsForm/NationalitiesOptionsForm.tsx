import { useContext } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import { FormsContext } from "../../contexts/FormsContext";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const NationalitiesOptionsForm = ({ formik }: FormiksTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  const { setSearchForNationalities } = useContext(FormsContext);

  const handleChange = (value: string) => {
    dispatch(getNationalities({ page: 0, search: value }));
    setSearchForNationalities(value);
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

export default NationalitiesOptionsForm;

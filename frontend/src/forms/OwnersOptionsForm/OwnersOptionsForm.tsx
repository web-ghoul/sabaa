import { useContext } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import { FormsContext } from "../../contexts/FormsContext";
import { getOwners } from "../../store/ownersSlice";
import { AppDispatch } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const OwnersOptionsForm = ({ formik }: FormiksTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  const { setSearchForOwners } = useContext(FormsContext);

  const handleChange = (value: string) => {
    dispatch(getOwners({ page: 0, search: value }));
    setSearchForOwners(value);
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

export default OwnersOptionsForm;

import { useContext } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import { FormsContext } from "../../contexts/FormsContext";
import { AppDispatch } from "../../store/store";
import { getUsers } from "../../store/usersSlice";
import { FormiksTypes } from "../../types/forms.types";

const UsersOptionsForm = ({ formik }: FormiksTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  const { setSearchForUsers } = useContext(FormsContext);

  const handleChange = (value: string) => {
    dispatch(getUsers({ page: 0, search: value }));
    setSearchForUsers(value);
  };
  return (
    <Input
      label={"Search For User..."}
      name={"search"}
      type={"search"}
      formik={formik}
      change={handleChange}
    />
  );
};

export default UsersOptionsForm;

import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";

const useOptionSchema = () => {
  const { editableSelectorData } = useContext(FormsContext);
  console.log(editableSelectorData);

  const OptionSchema = yup.object({
    option: yup.string().required("Option is required"),
  });

  const OptionInitialValues = {
    option: editableSelectorData.option,
  };

  return { OptionSchema, OptionInitialValues };
};

export default useOptionSchema;

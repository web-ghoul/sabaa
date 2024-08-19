import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";

const useSelectorSchema = () => {
  const {editableSelectorData} = useContext(FormsContext)
  const SelectorSchema = yup.object({
    option: yup.array().required("Option is required"),
  });

  const SelectorInitialValues = {
    option: editableSelectorData.options,
  };

  return { SelectorSchema, SelectorInitialValues };
};

export default useSelectorSchema;

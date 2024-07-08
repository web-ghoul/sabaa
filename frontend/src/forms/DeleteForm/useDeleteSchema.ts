import * as yup from "yup";

import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useDeleteSchema = () => {
  const { formType } = useContext(FormsContext);

  const DeleteSchema = yup.object({
    type: yup.string(),
  });

  const DeleteInitialValues = {
    type: formType,
  };

  return { DeleteSchema, DeleteInitialValues };
};

export default useDeleteSchema;

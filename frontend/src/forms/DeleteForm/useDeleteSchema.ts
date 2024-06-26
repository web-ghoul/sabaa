import * as yup from "yup";

import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useDeleteSchema = () => {
  const { formType } = useContext(FormsContext);

  const DeleteSchema = yup.object({
    type: yup.string(),
  });

  const DeleteInitailValues = {
    type: formType,
  };

  return { DeleteSchema, DeleteInitailValues };
};

export default useDeleteSchema;

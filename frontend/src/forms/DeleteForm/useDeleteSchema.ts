import * as yup from "yup";

import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useDeleteSchema = () => {
  const { deleteType } = useContext(FormsContext);

  const DeleteSchema = yup.object({
    type: yup.string(),
  });

  const DeleteInitailValues = {
    string: deleteType,
  };

  return { DeleteSchema, DeleteInitailValues };
};

export default useDeleteSchema;

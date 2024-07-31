import * as yup from "yup";
import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useRoleSchema = () => {
  const { editableRoleData } = useContext(FormsContext);

  const RoleSchema = yup.object({
    name: yup.string().required("Role Name is required"),
    permissions: yup.object(),
  });

  const RoleInitialValues = {
    name: editableRoleData?.name || "",
    permissions: {},
  };

  return { RoleSchema, RoleInitialValues };
};

export default useRoleSchema;

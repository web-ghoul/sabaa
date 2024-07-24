import { useContext } from "react";
import { useSelector } from "react-redux";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { RootState } from "../../store/store";
import { RoleFormTypes } from "../../types/forms.types";

const useRoleSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const { handleOpenFormsLoading, handleCloseFormsLoading, editableRoleData } =
    useContext(FormsContext);
  const { handleCloseRoleModal } = useContext(ModalsContext);

  const addRole = async (values: RoleFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/permission`, values)
      .then(() => {
        handleAlert({
          msg: "Role is Created Successfully",
          status: "success",
        });
        handleCloseRoleModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editRole = async (values: RoleFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(`/permission/${editableRoleData && editableRoleData._id}`, values)
      .then(() => {
        handleAlert({
          msg: "Role is Updated Successfully",
          status: "success",
        });
        handleCloseRoleModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { addRole, editRole };
};

export default useRoleSubmit;

import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getProfile } from "../../store/auth";
import { AppDispatch, RootState } from "../../store/store";
import { getUser } from "../../store/userSlice";
import { getUsersCounter } from "../../store/usersCounterSlice";
import { getUsers } from "../../store/usersSlice";
import { UserFormTypes } from "../../types/forms.types";

const useUserSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    userImage,
    formType,
    setUserImage,
    editableUserData,
  } = useContext(FormsContext);
  const { handleCloseUserModal } = useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const { id } = useParams();

  const handleUserFormData = (values: UserFormTypes) => {
    const formData = new FormData();
    formData.append("avatar", userImage);
    formData.append("name", values.name.trim());
    formData.append("phone", values.phone.trim());
    formData.append("status", values.status.trim());
    formData.append("role", values.role.trim());
    formData.append("email", values.email.trim());
    if (formType === "addUser") {
      formData.append("password", values.password.trim());
    }
    return formData;
  };

  const addUser = async (values: UserFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/users`, handleUserFormData(values))
      .then(() => {
        handleAlert({ msg: "User is Created Successfully", status: "success" });
        dispatch(getUsers({}));
        dispatch(getUsersCounter());
        handleCloseUserModal();
        setUserImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editUser = async (values: UserFormTypes) => {
    handleOpenFormsLoading();
    await server
      .put(
        `/users/${editableUserData && editableUserData._id}`,
        handleUserFormData(values)
      )
      .then(() => {
        handleAlert({
          msg: "User is Updated Successfully",
          status: "success",
        });
        if (id && pathname === `${import.meta.env.VITE_USERS_ROUTE}/${id}`) {
          dispatch(getUser({ id }));
        } else {
          dispatch(getUsers({}));
        }
        dispatch(getProfile());
        handleCloseUserModal();
        setUserImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { addUser, editUser };
};

export default useUserSubmit;

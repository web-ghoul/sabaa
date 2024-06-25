import { useContext } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { RootState } from "../../store/store";
import { ConvertCustomerFormTypes } from "../../types/forms.types";

const useConvertCustomerSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    editableCustomerData,
  } = useContext(FormsContext);
  const { handleCloseConvertCustomerModal } = useContext(ModalsContext);

  const convertCustomer = async (values: ConvertCustomerFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(
        `/owner/${editableCustomerData && editableCustomerData._id}`,
        { type: values.type === "Owner" ? "owner" : "pro" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        handleAlert({
          msg: "Customer is Converted Successfully",
          status: "success",
        });
        if (
          id &&
          pathname === `${import.meta.env.VITE_CUSTOMERS_ROUTE}/${id}`
        ) {
          if (values.type === "Owner") {
            navigate(`${import.meta.env.VITE_OWNERS_ROUTE}/${id}`);
          } else {
            navigate(`${import.meta.env.VITE_PROS_ROUTE}/${id}`);
          }
        } else {
          if (values.type === "Owner") {
            navigate(`${import.meta.env.VITE_OWNERS_ROUTE}`);
          } else {
            navigate(`${import.meta.env.VITE_PROS_ROUTE}`);
          }
        }
        handleCloseConvertCustomerModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { convertCustomer };
};

export default useConvertCustomerSubmit;

import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getCustomer } from "../../store/customerSlice";
import { getCustomersCounter } from "../../store/customersCounterSlice";
import { getCustomers } from "../../store/customersSlice";
import { AppDispatch, RootState } from "../../store/store";
import { CustomerFormTypes } from "../../types/forms.types";
import { CustomerTypes } from "../../types/store.types";

const useCustomerSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    setCustomerImage,
    customerImage,
    handleCloseCustomerModal,
    editableCustomerData,
  } = useContext(FormsContext);
  const { handleEditCustomerInSheet } = useContext(ExcelsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const { id } = useParams();

  const handlePersonFormData = (values: CustomerTypes) => {
    const type = values.type;
    const avatar = customerImage;
    const formData = new FormData();
    formData.append("uid", values?.uid);
    if (values.personCode) {
      formData.append("personCode", values.personCode.trim());
    }
    formData.append("avatar", avatar);
    formData.append("name", values.name.trim());
    formData.append("nameAr", values.nameAr.trim());
    formData.append("phone", values.phone.trim());
    formData.append("address", values.address.trim());
    formData.append("nationality", values.nationality);
    formData.append("idNationality", values.idNationality);
    if (values.gender) {
      formData.append("gender", values.gender.trim());
    }
    if (values.job) {
      formData.append("job", values.job.trim());
    }
    formData.append("email", values.email.trim());
    formData.append("remarks", values.remarks.trim());
    if (values.emiratesId) {
      formData.append("emiratesId", values.emiratesId.trim());
    }
    formData.append("state", values.state.trim());
    formData.append("status", values.status.trim());
    formData.append("sponsor", values.sponsor.trim());
    formData.append("fileImmgNo", values.fileImmgNo.toString().trim());
    if (values.residenceExpiryDate) {
      formData.append(
        "residenceExpiryDate",
        values.residenceExpiryDate?.toString().trim()
      );
    }
    if (values.dob) {
      formData.append("dob", values.dob.toString().trim());
    }
    if (type) {
      formData.append("type", type);
    }
    return formData;
  };

  const addCustomer = async (values: CustomerFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/owner`, handlePersonFormData(values))
      .then(() => {
        handleAlert({
          msg: "Customer is Created Successfully",
          status: "success",
        });
        dispatch(getCustomers({}));
        dispatch(getCustomersCounter());
        handleCloseCustomerModal();
        setCustomerImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editCustomer = async (values: CustomerFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_CUSTOMERS_ROUTE}`) {
      handleEditCustomerInSheet(values);
      handleCloseCustomerModal();
      handleAlert({
        msg: "Customer is Updated Successfully",
        status: "success",
      });
    } else {
      await server
        .patch(
          `/owner/${editableCustomerData && editableCustomerData._id}`,
          handlePersonFormData(values)
        )
        .then(() => {
          handleAlert({
            msg: "Customer is Updated Successfully",
            status: "success",
          });
          if (
            id &&
            pathname === `${import.meta.env.VITE_CUSTOMERS_ROUTE}/${id}`
          ) {
            dispatch(getCustomer({ id }));
          } else {
            dispatch(getCustomers({}));
          }
          handleCloseCustomerModal();
          setCustomerImage("");
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }
    handleCloseFormsLoading();
  };

  return { addCustomer, editCustomer };
};

export default useCustomerSubmit;

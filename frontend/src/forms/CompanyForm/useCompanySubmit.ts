import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getCompaniesCounter } from "../../store/companiesCounterSlice";
import { getCompanies } from "../../store/companiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { CompanyFormTypes } from "../../types/forms.types";
const useCompanySubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    setCompanyImage,
    companyImage,
    handleCloseCompanyModal,
    editableCompanyData,
  } = useContext(FormsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { handleEditCompanyInSheet } = useContext(ExcelsContext);

  const handleCompanyFormData = (values: CompanyFormTypes) => {
    const formData = new FormData();
    formData.append("logo", companyImage);
    formData.append("name", values.name.trim());
    formData.append("nameAr", values.nameAr.trim());
    formData.append("phone", values.phone.trim());
    formData.append("address", values.address.trim());
    formData.append("email", values.email.trim());
    formData.append("status", values.status.trim());
    if (values.ownerId.length > 0) {
      values.ownerId.map((owner) => {
        formData.append("ownerId[]", owner as string);
      });
    }
    if (values.proCode.length > 0) {
      values.proCode.map((pro) => {
        formData.append("proCode[]", pro as string);
      });
    }
    if (values.customerId.length > 0) {
      values.customerId.map((customer) => {
        formData.append("customerId[]", customer as string);
      });
    }
    formData.append("country", values.country.trim());
    formData.append("state", values.state.trim());
    formData.append("licenseNo", values.licenseNo.trim());
    formData.append("immgCardNo", values.immgCardNo.trim());
    formData.append("immgCardExpiry", values.immgCardExpiry.toString().trim());
    formData.append(
      "licenseIssueDate",
      values.licenseIssueDate.toString().trim()
    );
    formData.append("licenseIssuePlace", values.licenseIssuePlace.trim());
    formData.append(
      "licenseExpiryDate",
      values.licenseExpiryDate.toString().trim()
    );
    formData.append("establishmentType", values.establishmentType.trim());
    if (values.molCode) {
      formData.append("molCode", values.molCode.trim());
    }
    formData.append("molCategory", values.molCategory.trim());
    formData.append("whatsAppNo", values.whatsAppNo.trim());
    formData.append("mobileNo", values.mobileNo.trim());
    formData.append("website", values.website.trim());
    formData.append("zipCode", values.zipCode.trim());
    formData.append("trn", values.trn.trim());
    formData.append("userName", values.userName.trim());
    formData.append("password", values.password.trim());
    formData.append("noqodiWalet", values.noqodiWalet.trim());
    formData.append("noqodiPass", values.noqodiPass.trim());
    formData.append("pinToken", values.pinToken.trim());
    formData.append("noqodiNew", values.noqodiNew.trim());
    formData.append("noqodiReg", values.noqodiReg.trim());
    formData.append("noqodiNPass", values.noqodiNPass.trim());
    formData.append("echannelRemarks", values.echannelRemarks.trim());
    formData.append(
      "echannelExpiryDate",
      values.echannelExpiryDate.toString().trim()
    );
    formData.append("tenancyContractValue", values.tenancyContractValue.trim());
    formData.append(
      "tenancyContractExp",
      values.tenancyContractExp.toString().trim()
    );
    formData.append("remarks", values.remarks.trim());
    return formData;
  };

  const addCompany = async (values: CompanyFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/company`, handleCompanyFormData(values))
      .then(() => {
        handleAlert({
          msg: "Company is Created Successfully",
          status: "success",
        });
        dispatch(getCompanies({}));
        dispatch(getCompaniesCounter());
        navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`);
        setCompanyImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editCompany = async (values: CompanyFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_COMPANIES_ROUTE}`) {
      handleEditCompanyInSheet(values);
      handleCloseCompanyModal();
      handleAlert({
        msg: "Company is Updated Successfully",
        status: "success",
      });
    } else {
      await server
        .patch(
          `/company/${editableCompanyData && editableCompanyData._id}`,
          handleCompanyFormData(values)
        )
        .then(() => {
          handleAlert({
            msg: "Company is Updated Successfully",
            status: "success",
          });
          dispatch(getCompanies({}));
          navigate(
            `${import.meta.env.VITE_COMPANIES_ROUTE}/${
              editableCompanyData && editableCompanyData._id
            }`
          );
          setCompanyImage("");
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }
    handleCloseFormsLoading();
  };

  return { addCompany, editCompany };
};

export default useCompanySubmit;

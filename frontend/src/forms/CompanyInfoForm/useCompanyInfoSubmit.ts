import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { CompanyInfoFormTypes } from "../../types/forms.types";
import { getCustomizes } from "../../store/customizesSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

const useCompanyInfoSubmit = () => {
  const { server } = useAxios();
  const dispatch = useDispatch<AppDispatch>();
  const { handleOpenFormsLoading, handleCloseFormsLoading, companyInfoLogo } =
    useContext(FormsContext);

  const editCompanyInfo = async (values: CompanyInfoFormTypes) => {
    handleOpenFormsLoading();
    const formData = new FormData();
    formData.append("logo", companyInfoLogo);
    formData.append("company Name", values.companyName);
    formData.append("mobile", values.mobile);
    formData.append("officialEmail", values.officialEmail);
    formData.append("websiteLink", values.websiteLink);
    await server
      .post(
        `/customize`,
        typeof companyInfoLogo === "object" ? formData : values
      )
      .then(() => {
        handleAlert({
          msg: "Company Info is Updated Successfully",
          status: "success",
        });
        dispatch(getCustomizes());
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { editCompanyInfo };
};

export default useCompanyInfoSubmit;

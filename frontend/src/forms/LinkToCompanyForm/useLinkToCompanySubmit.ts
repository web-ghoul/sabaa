import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getOwner } from "../../store/ownerSlice";
import { getOwners } from "../../store/ownersSlice";
import { getPro } from "../../store/proSlice";
import { getPros } from "../../store/prosSlice";
import { AppDispatch, RootState } from "../../store/store";
import { LinkToCompanyFormTypes } from "../../types/forms.types";

const useLinkToCompanySubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const {
    formType,
    editableProData,
    editableOwnerData,
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    handleCloseLinkToCompanyModal,
  } = useContext(FormsContext);

  const linkToCompany = async (values: LinkToCompanyFormTypes) => {
    handleOpenFormsLoading();
    await server
      .get(
        `/company/ManageOwnersAndPro?id=${
          formType === "linkOwner"
            ? editableOwnerData && editableOwnerData._id
            : formType === "linkPro" && editableProData && editableProData._id
        }${values.companyId
          .map((id, i) => `&companyId[${i}]=${id}`)
          .join("")}&operation=adding&typeOfPerson=${
          formType === "linkOwner" ? "owner" : formType === "linkPro" && "pro"
        }`
      )
      .then(() => {
        if (formType === "linkOwner") {
          handleAlert({
            msg: "Owner is Linked to Company Successfully",
            status: "success",
          });
          if (id) {
            dispatch(getOwner({ id }));
          } else {
            dispatch(getOwners({}));
          }
        } else {
          handleAlert({
            msg: "Officer is Linked to Company Successfully",
            status: "success",
          });
          if (id) {
            dispatch(getPro({ id }));
          } else {
            dispatch(getPros({}));
          }
        }
        handleCloseLinkToCompanyModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { linkToCompany };
};

export default useLinkToCompanySubmit;

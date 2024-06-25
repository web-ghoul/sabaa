import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getCustomer } from "../../store/customerSlice";
import { getEmployee } from "../../store/employeeSlice";
import { getOwner } from "../../store/ownerSlice";
import { getPro } from "../../store/proSlice";
import { AppDispatch, RootState } from "../../store/store";
import { SponsorFormTypes } from "../../types/forms.types";
import { SponsorTypes } from "../../types/store.types";

const useSponsorSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    sponsorImage,
    setSponsorImage,
    editableSponsorData,
  } = useContext(FormsContext);
  const { handleCloseViewSponsorModal, handleCloseSponsorModal } =
    useContext(ModalsContext);

  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const { id } = useParams();

  const handleSponsorFormData = (values: SponsorTypes) => {
    const type = pathname.split("/")[1];
    const formData = new FormData();
    formData.append("uid", values?.uid);
    formData.append("avatar", sponsorImage);
    formData.append("name", values.name.trim());
    formData.append("nameAr", values.nameAr.trim());
    formData.append("phone", values.phone.trim());
    formData.append("address", values.address.trim());
    formData.append("nationality", values.nationality);
    formData.append("idNationality", values.idNationality);
    formData.append("email", values.email.trim());
    if (values.gender) {
      formData.append("gender", values.gender.trim());
    }
    if (values.job) {
      formData.append("job", values.job.trim());
    }
    formData.append("remarks", values.remarks.trim());
    if (values.emiratesId) {
      formData.append("emiratesId", values.emiratesId.trim());
    }
    formData.append("state", values.state.trim());
    formData.append("status", values.status.trim());
    formData.append("relativeRelation", values.relativeRelation.trim());
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
    if (id) {
      if (type === "employees") {
        formData.append("employee", id);
      } else {
        formData.append("owner", id);
      }
    }
    return formData;
  };

  const addSponsor = async (values: SponsorFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/sponsor`, handleSponsorFormData(values))
      .then(() => {
        handleAlert({
          msg: "Sponsor is Created Successfully",
          status: "success",
        });
        const type = pathname.split("/")[1];
        if (id) {
          if (type === "employees") {
            dispatch(getEmployee({ id }));
          } else if (type === "owners") {
            dispatch(getOwner({ id }));
          } else if (type === "customers") {
            dispatch(getCustomer({ id }));
          } else if (type === "pros") {
            dispatch(getPro({ id }));
          }
        }

        handleCloseSponsorModal();
        setSponsorImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editSponsor = async (values: SponsorFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(
        `/sponsor/${editableSponsorData && editableSponsorData._id}`,
        handleSponsorFormData(values)
      )
      .then(() => {
        handleAlert({
          msg: "Sponsor is Updated Successfully",
          status: "success",
        });
        const type = pathname.split("/")[1];
        if (id) {
          if (type === "employees") {
            dispatch(getEmployee({ id }));
          } else if (type === "owners") {
            dispatch(getOwner({ id }));
          } else if (type === "customers") {
            dispatch(getCustomer({ id }));
          } else if (type === "pros") {
            dispatch(getPro({ id }));
          }
        }
        handleCloseSponsorModal();
        handleCloseViewSponsorModal();
        setSponsorImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return { addSponsor, editSponsor };
};

export default useSponsorSubmit;

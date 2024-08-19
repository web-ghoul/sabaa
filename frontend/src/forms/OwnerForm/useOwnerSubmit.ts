import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { TabsContext } from "../../contexts/TabsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getCompany } from "../../store/companySlice";
import { getOwner } from "../../store/ownerSlice";
import { getOwnersCounter } from "../../store/ownersCounterSlice";
import { getOwners } from "../../store/ownersSlice";
import { AppDispatch, RootState } from "../../store/store";
import { OwnerFormTypes } from "../../types/forms.types";

const useOwnerSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    setOwnerImage,
    ownerImage,
    editableOwnerData,
  } = useContext(FormsContext);
  const { handleCloseOwnerModal } = useContext(ModalsContext);
  const { handleEditOwnerInSheet } = useContext(ExcelsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { setCompanyTabsValue } = useContext(TabsContext);

  const handlePersonFormData = (values: OwnerFormTypes) => {
    const type = values.type;
    const avatar = ownerImage;
    const formData = new FormData();
    formData.append("uid", values?.uid);
    if (values.personCode) {
      formData.append("personCode", values.personCode.trim());
    } else {
      formData.append("emiratesId", "");
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
    } else {
      formData.append("emiratesId", "");
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

  const addOwner = async (values: OwnerFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/owners`, handlePersonFormData(values), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (res) => {
        handleAlert({
          msg: "Owner is Created Successfully",
          status: "success",
        });
        handleCloseOwnerModal();
        setOwnerImage("");
        if (pathname === `${import.meta.env.VITE_COMPANIES_ROUTE}/${id}`) {
          await server
            .get(
              `/company/ManageOwnersAndPro?id=${
                res.data._id
              }${`&companyId[0]=${id}`}&operation=adding&typeOfPerson=owner`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then(() => {
              handleAlert({
                msg: "Owner is Linked to Company Successfully",
                status: "success",
              });
              if (id) {
                dispatch(getCompany({ id }));
              }
              setCompanyTabsValue(1);
            })
            .catch((err) => {
              handleCatchError(err);
            });
        } else {
          dispatch(getOwners({}));
          dispatch(getOwnersCounter());
        }
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editOwner = async (values: OwnerFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_OWNERS_ROUTE}`) {
      handleEditOwnerInSheet(values);
      handleCloseOwnerModal();
      handleAlert({
        msg: "Owner is Updated Successfully",
        status: "success",
      });
    } else {
      await server
        .patch(
          `/owners/${editableOwnerData && editableOwnerData._id}`,
          handlePersonFormData(values),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          handleAlert({
            msg: "Owner is Updated Successfully",
            status: "success",
          });
          if (id && pathname === `${import.meta.env.VITE_OWNERS_ROUTE}/${id}`) {
            dispatch(getOwner({ id }));
          } else {
            dispatch(getOwners({}));
          }
          handleCloseOwnerModal();
          setOwnerImage("");
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }
    handleCloseFormsLoading();
  };

  return { addOwner, editOwner };
};

export default useOwnerSubmit;

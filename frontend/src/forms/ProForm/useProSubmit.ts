import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { TabsContext } from "../../contexts/TabsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getCompany } from "../../store/companySlice";
import { getPro } from "../../store/proSlice";
import { getProsCounter } from "../../store/prosCounterSlice";
import { getPros } from "../../store/prosSlice";
import { AppDispatch, RootState } from "../../store/store";
import { ProFormTypes } from "../../types/forms.types";
import { ProTypes } from "../../types/store.types";

const useProSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    setProImage,
    proImage,
    handleCloseProModal,
    editableProData,
  } = useContext(FormsContext);
  const { handleEditProInSheet } = useContext(ExcelsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { setCompanyTabsValue } = useContext(TabsContext);

  const handlePersonFormData = (values: ProTypes) => {
    const type = values.type;
    const avatar = proImage;
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

  const addPro = async (values: ProFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/owner`, handlePersonFormData(values))
      .then(async (res) => {
        handleAlert({
          msg: "Officer is Created Successfully",
          status: "success",
        });
        handleCloseProModal();
        setProImage("");
        if (pathname === `${import.meta.env.VITE_COMPANIES_ROUTE}/${id}`) {
          await server
            .get(
              `/company/ManageOwnersAndPro?id=${
                res.data._id
              }${`&companyId[0]=${id}`}&operation=adding&typeOfPerson=pro`
            )
            .then(() => {
              handleAlert({
                msg: "Officer is Linked to Company Successfully",
                status: "success",
              });
              if (id) {
                dispatch(getCompany({ id }));
              }
              setCompanyTabsValue(2);
            })
            .catch((err) => {
              handleCatchError(err);
            });
        } else {
          dispatch(getPros({}));
          dispatch(getProsCounter());
        }
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editPro = async (values: ProFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_PROS_ROUTE}`) {
      handleEditProInSheet(values);
      handleCloseProModal();
      handleAlert({
        msg: "Officer is Updated Successfully",
        status: "success",
      });
    } else {
      await server
        .patch(
          `/owner/${editableProData && editableProData._id}`,
          handlePersonFormData(values)
        )
        .then(() => {
          handleAlert({
            msg: "Officer is Updated Successfully",
            status: "success",
          });
          if (id && pathname === `${import.meta.env.VITE_PROS_ROUTE}/${id}`) {
            dispatch(getPro({ id }));
          } else {
            dispatch(getPros({}));
          }
          handleCloseProModal();
          setProImage("");
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }
    handleCloseFormsLoading();
  };

  return { addPro, editPro };
};

export default useProSubmit;

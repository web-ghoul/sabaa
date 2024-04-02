import axios from "axios";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ExcelsContext } from "../contexts/ExcelsContext";
import { FormsContext } from "../contexts/FormsContext";
import { handleAlert } from "../functions/handleAlert";
import { handleCatchError } from "../functions/handleCatchError";
import { handleDate } from "../functions/handleDate";
import { login as loginAction } from "../store/auth";
import { getCompanies } from "../store/companiesSlice";
import { getJobs } from "../store/jobsSlice";
import { getNationalities } from "../store/nationalitiesSlice";
import { getOwners } from "../store/ownersSlice";
import { AppDispatch, RootState } from "../store/store";
import { getUsers } from "../store/usersSlice";
import {
  AddCompanyFormTypes,
  AddJobFormTypes,
  AddNationalityFormTypes,
  AddOwnerFormTypes,
  AddUserFormTypes,
  AllFormsTypes,
  EditCompanyFormTypes,
  EditJobFormTypes,
  EditNationalityFormTypes,
  EditOwnerFormTypes,
  EditUserFormTypes,
  ForgotPasswordFormTypes,
  LoginFormTypes,
  ResetPasswordFormTypes,
} from "../types/forms.types";

const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const useSubmitFunction = (type: string) => {
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    handleCloseAddJobModal,
    handleCloseEditJobModal,
    handleCloseAddNationalityModal,
    handleCloseEditNationalityModal,
    handleCloseDeleteModal,
    editableNationalityData,
    editableJobData,
    addUserImage,
    editableUserData,
    addOwnerImage,
    editUserImage,
    editableOwnerData,
    editOwnerImage,
    deleteType,
    editableCompanyData,
    editCompanyImage,
    addCompanyImage,
    setAddOwnerImage,
    setEditOwnerImage,
    setAddCompanyImage,
    setEditCompanyImage,
    setAddUserImage,
    setEditUserImage,
    handleCloseEditOwnerModal,
    handleCloseEditCompanyModal,
  } = useContext(FormsContext);
  const {
    handleEditNationalityInSheet,
    handleEditJobInSheet,
    handleEditOwnerInSheet,
    handleEditCompanyInSheet,
    jobsSheets,
    nationalitiesSheets,
    ownersSheets,
    companiesSheets,
    jobIndex,
    ownerIndex,
    companyIndex,
    nationalityIndex,
  } = useContext(ExcelsContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.auth);

  const login = async (values: LoginFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/login`, values)
      .then((res) => {
        handleAlert({ msg: "Login Successfully", status: "success" });
        navigate(`${import.meta.env.VITE_DASHBOARD_ROUTE}`);
        dispatch(
          loginAction({ token: res.data.token, userId: res.data.userId })
        );
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const resetPassword = (values: ResetPasswordFormTypes) => {
    handleOpenFormsLoading();
    console.log(values);
    handleAlert({ msg: "Under Development...", status: "error" });
    handleCloseFormsLoading();
  };

  const forgotPassword = (values: ForgotPasswordFormTypes) => {
    handleOpenFormsLoading();
    console.log(values);
    handleAlert({ msg: "Under Development...", status: "error" });
    handleCloseFormsLoading();
  };

  const addJob = async (values: AddJobFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/job-title`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({ msg: "Job is Created Successfully", status: "success" });
        handleCloseAddJobModal();
        dispatch(getJobs({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editJob = async (values: EditJobFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_JOBS_ROUTE}`) {
      handleEditJobInSheet(values);
      handleCloseEditJobModal();
      handleAlert({
        msg: "Job is Updated Successfully",
        status: "success",
      });
    } else {
      await server
        .patch(`/job-title/${editableJobData && editableJobData._id}`, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          handleAlert({
            msg: "Job is Updated Successfully",
            status: "success",
          });
          handleCloseEditJobModal();
          dispatch(getJobs({}));
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }

    handleCloseFormsLoading();
  };

  const createJobsSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = jobsSheets[jobIndex.fileIndex].data;
    await server
      .post(`/job-title`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Jobs are Created Successfully",
          status: "success",
        });
        navigate(`${import.meta.env.VITE_JOBS_ROUTE}`);
        dispatch(getJobs({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const addNationality = async (values: AddNationalityFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/nationality`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Nationality is Created Successfully",
          status: "success",
        });
        handleCloseAddNationalityModal();
        dispatch(getNationalities({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editNationality = async (values: EditNationalityFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_NATIONALITIES_ROUTE}`) {
      handleEditNationalityInSheet(values);
      handleCloseEditNationalityModal();
      handleAlert({
        msg: "Nationality is Updated Successfully",
        status: "success",
      });
    } else {
      await server
        .patch(
          `/nationality/${
            editableNationalityData && editableNationalityData._id
          }`,
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          handleAlert({
            msg: "Nationality is Updated Successfully",
            status: "success",
          });
          handleCloseEditNationalityModal();
          dispatch(getNationalities({}));
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }

    handleCloseFormsLoading();
  };

  const createNationalitiesSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = nationalitiesSheets[nationalityIndex.fileIndex].data;
    await server
      .post(`/nationality`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Nationalities are Created Successfully",
          status: "success",
        });
        navigate(`${import.meta.env.VITE_NATIONALITIES_ROUTE}`);
        dispatch(getNationalities({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const addUser = async (values: AddUserFormTypes) => {
    handleOpenFormsLoading();
    const formData = new FormData();
    formData.append("avatar", addUserImage);
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("status", values.status);
    formData.append("role", values.role);
    formData.append("email", values.email);
    formData.append("password", values.password);
    await server
      .post(`/user`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({ msg: "User is Created Successfully", status: "success" });
        dispatch(getUsers({}));
        navigate(`${import.meta.env.VITE_USERS_ROUTE}`);
        setAddUserImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editUser = async (values: EditUserFormTypes) => {
    handleOpenFormsLoading();
    const formData = new FormData();
    formData.append("avatar", editUserImage);
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("status", values.status);
    formData.append("role", values.role);
    formData.append("email", values.email);
    await server
      .put(`/user/${editableUserData && editableUserData._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "User is Updated Successfully",
          status: "success",
        });
        dispatch(getUsers({}));
        navigate(`${import.meta.env.VITE_USERS_ROUTE}`);
        setEditUserImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const addOwner = async (values: AddOwnerFormTypes) => {
    handleOpenFormsLoading();
    const formData = new FormData();
    formData.append("_id", values._id);
    formData.append("personCode", values.personCode);
    formData.append("avatar", addOwnerImage);
    formData.append("name", values.name);
    formData.append("nameAr", values.nameAr);
    formData.append("phone", values.phone);
    formData.append("address", values.address);
    formData.append("nationality", values.nationality);
    formData.append("idNationality", values.idNationality);
    formData.append("email", values.email);
    formData.append("remarks", values.remarks);
    formData.append("emiratesId", values.emiratesId);
    formData.append("state", values.state);
    formData.append("dob", values.dob.toString());
    formData.append("proCode", values.proCode.toString());
    await server
      .post(`/owner`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Owner is Created Successfully",
          status: "success",
        });
        dispatch(getOwners({}));
        navigate(`${import.meta.env.VITE_OWNERS_ROUTE}`);
        setAddOwnerImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editOwner = async (values: EditOwnerFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_OWNERS_ROUTE}`) {
      handleEditOwnerInSheet(values);
      handleCloseEditOwnerModal();
      handleAlert({
        msg: "Owner is Updated Successfully",
        status: "success",
      });
    } else {
      const formData = new FormData();
      formData.append("avatar", editOwnerImage);
      formData.append("name", values.name);
      formData.append("nameAr", values.nameAr);
      formData.append("phone", values.phone);
      formData.append("address", values.address);
      formData.append("nationality", values.nationality);
      formData.append("idNationality", values.idNationality);
      formData.append("email", values.email);
      formData.append("remarks", values.remarks);
      formData.append("emiratesId", values.emiratesId);
      formData.append("state", values.state);
      formData.append("dob", values.dob.toString());
      await server
        .patch(
          `/owner/${editableOwnerData && editableOwnerData._id}`,
          formData,
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
          dispatch(getOwners({}));
          navigate(`${import.meta.env.VITE_OWNERS_ROUTE}`);
          setEditOwnerImage("");
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }
    handleCloseFormsLoading();
  };

  const createOwnersSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = ownersSheets[ownerIndex.fileIndex].data;
    await server
      .post(`/owner`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Owners are Created Successfully",
          status: "success",
        });
        navigate(`${import.meta.env.VITE_OWNERS_ROUTE}`);
        dispatch(getOwners({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const addCompany = async (values: AddCompanyFormTypes) => {
    handleOpenFormsLoading();
    const formData = new FormData();
    formData.append("logo", addCompanyImage);
    formData.append("name", values.name);
    formData.append("nameAr", values.nameAr);
    formData.append("phone", values.phone);
    formData.append("address", values.address);
    formData.append("email", values.email);
    formData.append("status", values.status);
    formData.append("state", values.state);
    formData.append("licenseNo", values.licenseNo);
    formData.append("immgCardNo", values.immgCardNo);
    formData.append("immgCardExpiry", values.immgCardExpiry.toString());
    formData.append("licenseIssueDate", values.licenseIssueDate.toString());
    formData.append("licenseExpiryDate", values.licenseExpiryDate.toString());
    formData.append("establishmentType", values.establishmentType);
    formData.append("molCode", values.molCode);
    formData.append("molCategory", values.molCategory);
    formData.append("whatsAppNo", values.whatsAppNo);
    formData.append("mobileNo", values.mobileNo);
    formData.append("website", values.website);
    formData.append("trn", values.trn);
    formData.append("tenancyContractValue", values.tenancyContractValue);
    formData.append(
      "tenancyContractExp",
      handleDate(values.tenancyContractExp)
    );
    formData.append("remarks", values.remarks);
    await server
      .post(`/company`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Company is Created Successfully",
          status: "success",
        });
        dispatch(getCompanies({}));
        navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`);
        setAddCompanyImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editCompany = async (values: EditCompanyFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_COMPANIES_ROUTE}`) {
      handleEditCompanyInSheet(values);
      handleCloseEditCompanyModal();
      handleAlert({
        msg: "Company is Updated Successfully",
        status: "success",
      });
    } else {
      const formData = new FormData();
      formData.append("logo", editCompanyImage);
      formData.append("name", values.name);
      formData.append("nameAr", values.nameAr);
      formData.append("phone", values.phone);
      formData.append("address", values.address);
      formData.append("status", values.status);
      formData.append("state", values.state);
      formData.append("licenseNo", values.licenseNo);
      formData.append("immgCardNo", values.immgCardNo);
      formData.append("immgCardExpiry", values.immgCardExpiry.toString());
      formData.append("licenseIssueDate", values.licenseIssueDate.toString());
      formData.append("licenseExpiryDate", values.licenseExpiryDate.toString());
      formData.append("establishmentType", values.establishmentType);
      formData.append("molCode", values.molCode);
      formData.append("molCategory", values.molCategory);
      formData.append("whatsAppNo", values.whatsAppNo);
      formData.append("mobileNo", values.mobileNo);
      formData.append("website", values.website);
      formData.append("trn", values.trn);
      formData.append("email", values.email);
      formData.append("tenancyContractValue", values.tenancyContractValue);
      formData.append(
        "tenancyContractExp",
        handleDate(values.tenancyContractExp)
      );
      formData.append("remarks", values.remarks);
      await server
        .patch(
          `/company/${editableCompanyData && editableCompanyData._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          handleAlert({
            msg: "Company is Updated Successfully",
            status: "success",
          });
          dispatch(getCompanies({}));
          navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`);
          setEditCompanyImage("");
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }
    handleCloseFormsLoading();
  };

  const createCompaniesSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = companiesSheets[companyIndex.fileIndex].data;
    await server
      .post(`/company`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Companies Sheet are Created Successfully",
          status: "success",
        });
        navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`);
        dispatch(getCompanies({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const handleDelete = async () => {
    handleOpenFormsLoading();
    if (deleteType === "owner") {
      await server
        .delete(`/owner/${editableOwnerData && editableOwnerData._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          handleAlert({
            msg: "Owner is Deleted Successfully",
            status: "success",
          });
          dispatch(getOwners({}));
          navigate(`${import.meta.env.VITE_OWNERS_ROUTE}`);
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (deleteType === "job") {
      await server
        .delete(`/job-title/${editableJobData && editableJobData._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          handleAlert({
            msg: "Job is Deleted Successfully",
            status: "success",
          });
          dispatch(getJobs({}));
          navigate(`${import.meta.env.VITE_JOBS_ROUTE}`);
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (deleteType === "nationality") {
      await server
        .delete(
          `/nationality/${
            editableNationalityData && editableNationalityData._id
          }`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          handleAlert({
            msg: "Nationality is Deleted Successfully",
            status: "success",
          });
          dispatch(getNationalities({}));
          navigate(`${import.meta.env.VITE_NATIONALITIES_ROUTE}`);
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (deleteType === "user") {
      await server
        .delete(`/user/${editableUserData && editableUserData._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          handleAlert({
            msg: "User is Deleted Successfully",
            status: "success",
          });
          dispatch(getUsers({}));
          navigate(`${import.meta.env.VITE_USERS_ROUTE}`);
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (deleteType === "company") {
      await server
        .delete(`/company/${editableCompanyData && editableCompanyData._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          handleAlert({
            msg: "Company is Deleted Successfully",
            status: "success",
          });
          dispatch(getCompanies({}));
          navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`);
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }
    handleCloseFormsLoading();
  };

  const handleSubmit = (values: AllFormsTypes | unknown) => {
    switch (type) {
      case "forgotPassword":
        forgotPassword(values as ForgotPasswordFormTypes);
        break;
      case "resetPassword":
        resetPassword(values as ResetPasswordFormTypes);
        break;
      case "login":
        login(values as LoginFormTypes);
        break;
      case "addJob":
        addJob(values as AddJobFormTypes);
        break;
      case "editJob":
        editJob(values as EditJobFormTypes);
        break;
      case "createJobsSheet":
        createJobsSheet(values as unknown);
        break;
      case "addNationality":
        addNationality(values as AddNationalityFormTypes);
        break;
      case "editNationality":
        editNationality(values as EditNationalityFormTypes);
        break;
      case "createNationalitiesSheet":
        createNationalitiesSheet(values as unknown);
        break;
      case "addUser":
        addUser(values as AddUserFormTypes);
        break;
      case "editUser":
        editUser(values as EditUserFormTypes);
        break;
      case "addOwner":
        addOwner(values as AddOwnerFormTypes);
        break;
      case "editOwner":
        editOwner(values as EditOwnerFormTypes);
        break;
      case "createOwnersSheet":
        createOwnersSheet(values as unknown);
        break;
      case "addCompany":
        addCompany(values as AddCompanyFormTypes);
        break;
      case "editCompany":
        editCompany(values as EditCompanyFormTypes);
        break;
      case "createCompaniesSheet":
        createCompaniesSheet(values as unknown);
        break;
      case "delete":
        handleDelete();
        break;
      default:
        return () => {};
    }
  };

  return { handleSubmit };
};

export default useSubmitFunction;

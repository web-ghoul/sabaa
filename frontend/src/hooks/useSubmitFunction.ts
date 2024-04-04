import axios from "axios";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ExcelsContext } from "../contexts/ExcelsContext";
import { FormsContext } from "../contexts/FormsContext";
import { handleAlert } from "../functions/handleAlert";
import { handleCatchError } from "../functions/handleCatchError";
import { login as loginAction } from "../store/auth";
import { getCompanies } from "../store/companiesSlice";
import { getJobs } from "../store/jobsSlice";
import { getNationalities } from "../store/nationalitiesSlice";
import { getOwners } from "../store/ownersSlice";
import { AppDispatch, RootState } from "../store/store";
import { getUsers } from "../store/usersSlice";
import {
  AllFormsTypes,
  CompanyFormTypes,
  ForgotPasswordFormTypes,
  JobFormTypes,
  LoginFormTypes,
  NationalityFormTypes,
  OwnerFormTypes,
  ResetPasswordFormTypes,
  UserFormTypes,
} from "../types/forms.types";
import { handleDate } from "./../functions/handleDate";

const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const useSubmitFunction = (type: string) => {
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    handleCloseJobModal,
    handleCloseNationalityModal,
    handleCloseDeleteModal,
    editableNationalityData,
    editableJobData,
    ownerImage,
    userImage,
    editableUserData,
    editableOwnerData,
    formType,
    editableCompanyData,
    companyImage,
    setOwnerImage,
    setCompanyImage,
    setUserImage,
    handleCloseOwnerModal,
    handleCloseCompanyModal,
    handleCloseUserModal,
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

  const handleUserFormData = (values: UserFormTypes) => {
    const formData = new FormData();
    formData.append("avatar", userImage);
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("status", values.status);
    formData.append("role", values.role);
    formData.append("email", values.email);
    formData.append("password", values.password);
    return formData;
  };

  const handleOwnerFormData = (values: OwnerFormTypes) => {
    const formData = new FormData();
    formData.append("_id", values._id);
    formData.append("personCode", values.personCode);
    formData.append("avatar", ownerImage);
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
    formData.append("dob", values?.dob.toString());
    formData.append("proCode", values.proCode ? "true" : "false");
    return formData;
  };

  const handleCompanyFormData = (values: CompanyFormTypes) => {
    const formData = new FormData();
    formData.append("logo", companyImage);
    formData.append("name", values.name);
    formData.append("nameAr", values.nameAr);
    formData.append("phone", values.phone);
    formData.append("address", values.address);
    formData.append("email", values.email);
    formData.append("status", values.status);
    values.ownerId.map((owner) => {
      formData.append("ownerId", owner);
    });
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
    return formData;
  };

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

  const addJob = async (values: JobFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/job-title`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({ msg: "Job is Created Successfully", status: "success" });
        handleCloseJobModal();
        dispatch(getJobs({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editJob = async (values: JobFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_JOBS_ROUTE}`) {
      handleEditJobInSheet(values);
      handleCloseJobModal();
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
          handleCloseJobModal();
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

  const addNationality = async (values: NationalityFormTypes) => {
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
        handleCloseNationalityModal();
        dispatch(getNationalities({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editNationality = async (values: NationalityFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_NATIONALITIES_ROUTE}`) {
      handleEditNationalityInSheet(values);
      handleCloseNationalityModal();
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
          handleCloseNationalityModal();
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

  const addUser = async (values: UserFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/user`, handleUserFormData(values), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({ msg: "User is Created Successfully", status: "success" });
        dispatch(getUsers({}));
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
        `/user/${editableUserData && editableUserData._id}`,
        handleUserFormData(values),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        handleAlert({
          msg: "User is Updated Successfully",
          status: "success",
        });
        dispatch(getUsers({}));
        handleCloseUserModal();
        setUserImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const addOwner = async (values: OwnerFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/owner`, handleOwnerFormData(values), {
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
        handleCloseOwnerModal();
        setOwnerImage("");
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
          `/owner/${editableOwnerData && editableOwnerData._id}`,
          handleOwnerFormData(values),
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
          handleCloseOwnerModal();
          setOwnerImage("");
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

  const addCompany = async (values: CompanyFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/company`, handleCompanyFormData(values), {
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
          handleCompanyFormData(values),
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
    if (formType === "owner") {
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
    } else if (formType === "job") {
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
    } else if (formType === "nationality") {
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
    } else if (formType === "user") {
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
    } else if (formType === "company") {
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
        addJob(values as JobFormTypes);
        break;
      case "editJob":
        editJob(values as JobFormTypes);
        break;
      case "createJobsSheet":
        createJobsSheet(values as unknown);
        break;
      case "addNationality":
        addNationality(values as NationalityFormTypes);
        break;
      case "editNationality":
        editNationality(values as NationalityFormTypes);
        break;
      case "createNationalitiesSheet":
        createNationalitiesSheet(values as unknown);
        break;
      case "addUser":
        addUser(values as UserFormTypes);
        break;
      case "editUser":
        editUser(values as UserFormTypes);
        break;
      case "addOwner":
        addOwner(values as OwnerFormTypes);
        break;
      case "editOwner":
        editOwner(values as OwnerFormTypes);
        break;
      case "createOwnersSheet":
        createOwnersSheet(values as unknown);
        break;
      case "addCompany":
        addCompany(values as CompanyFormTypes);
        break;
      case "editCompany":
        editCompany(values as CompanyFormTypes);
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

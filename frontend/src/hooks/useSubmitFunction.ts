import axios from "axios";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ExcelsContext } from "../contexts/ExcelsContext";
import { FormsContext } from "../contexts/FormsContext";
import { handleAlert } from "../functions/handleAlert";
import { handleCatchError } from "../functions/handleCatchError";
import { getProfile, login as loginAction } from "../store/auth";
import { getCompaniesCounter } from "../store/companiesCounterSlice";
import { getCompanies } from "../store/companiesSlice";
import { getJobsCounter } from "../store/jobsCounterSlice";
import { getJobs } from "../store/jobsSlice";
import { getNationalitiesCounter } from "../store/nationalitiesCounterSlice";
import { getNationalities } from "../store/nationalitiesSlice";
import { getOwnersCounter } from "../store/ownersCounterSlice";
import { getOwner } from "../store/ownerSlice";
import { getOwners } from "../store/ownersSlice";
import { AppDispatch, RootState } from "../store/store";
import { getUsersCounter } from "../store/usersCounterSlice";
import { getUser } from "../store/userSlice";
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
  const { id } = useParams();

  const handleUserFormData = (values: UserFormTypes) => {
    const formData = new FormData();
    formData.append("avatar", userImage);
    formData.append("name", values.name.trim());
    formData.append("phone", values.phone.trim());
    formData.append("status", values.status.trim());
    formData.append("role", values.role.trim());
    formData.append("email", values.email.trim());
    if (type === "addUser") {
      formData.append("password", values.password.trim());
    }
    return formData;
  };

  const handleOwnerFormData = (values: OwnerFormTypes) => {
    const formData = new FormData();
    formData.append("uid", values?.uid);
    formData.append("personCode", values.personCode.trim());
    formData.append("avatar", ownerImage);
    formData.append("name", values.name.trim());
    formData.append("nameAr", values.nameAr.trim());
    formData.append("phone", values.phone.trim());
    formData.append("address", values.address.trim());
    formData.append("nationality", values.nationality);
    formData.append("idNationality", values.idNationality);
    formData.append("email", values.email.trim());
    formData.append("remarks", values.remarks.trim());
    formData.append("emiratesId", values.emiratesId.trim());
    formData.append("state", values.state.trim());
    formData.append("dob", values?.dob.toString().trim());
    formData.append("proCode", values.proCode ? "true" : "false");
    return formData;
  };

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
        formData.append("ownerId[]", owner);
      });
    }
    if (values.proCode.length > 0) {
      values.proCode.map((pro) => {
        formData.append("proCode[]", pro);
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
    formData.append("molCode", values.molCode.trim());
    formData.append("molCategory", values.molCategory.trim());
    formData.append("whatsAppNo", values.whatsAppNo.trim());
    formData.append("mobileNo", values.mobileNo.trim());
    formData.append("website", values.website.trim());
    formData.append("zipCode", values.zipCode.trim());
    formData.append("trn", values.trn.trim());
    formData.append("tenancyContractValue", values.tenancyContractValue.trim());
    formData.append(
      "tenancyContractExp",
      values.tenancyContractExp.toString().trim()
    );
    formData.append("remarks", values.remarks.trim());
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
        dispatch(getJobsCounter());
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
        dispatch(getNationalitiesCounter());
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
        dispatch(getUsersCounter());
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
        if (id && pathname === `${import.meta.env.VITE_USERS_ROUTE}/${id}`) {
          dispatch(getUser({ id }));
        } else {
          dispatch(getUsers({}));
        }
        dispatch(getProfile());
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
        dispatch(getOwnersCounter());
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

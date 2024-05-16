import axios from "axios";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ExcelsContext } from "../contexts/ExcelsContext";
import { FormsContext } from "../contexts/FormsContext";
import { handleAlert } from "../functions/handleAlert";
import { handleCatchError } from "../functions/handleCatchError";
import { handleDownloadExcel } from "../functions/handleDownloadExcel";
import { getProfile, login as loginAction } from "../store/auth";
import { getCompaniesCounter } from "../store/companiesCounterSlice";
import { getCompanies } from "../store/companiesSlice";
import { getCompany } from "../store/companySlice";
import { getCustomersCounter } from "../store/customersCounterSlice";
import { getCustomer } from "../store/customerSlice";
import { getCustomers } from "../store/customersSlice";
import { getEmployeesCounter } from "../store/employeesCounterSlice";
import { getEmployees } from "../store/employeesSlice";
import { getJobsCounter } from "../store/jobsCounterSlice";
import { getJobs } from "../store/jobsSlice";
import { getNationalitiesCounter } from "../store/nationalitiesCounterSlice";
import { getNationalities } from "../store/nationalitiesSlice";
import { getOwnersCounter } from "../store/ownersCounterSlice";
import { getOwner } from "../store/ownerSlice";
import { getOwners } from "../store/ownersSlice";
import { getProsCounter } from "../store/prosCounterSlice";
import { getPro } from "../store/proSlice";
import { getPros } from "../store/prosSlice";
import { AppDispatch, RootState } from "../store/store";
import { getUsersCounter } from "../store/usersCounterSlice";
import { getUser } from "../store/userSlice";
import { getUsers } from "../store/usersSlice";
import {
  AllFormsTypes,
  CompanyFormTypes,
  CustomerFormTypes,
  DownloadExcelFormTypes,
  EmployeeFormTypes,
  ForgotPasswordFormTypes,
  JobFormTypes,
  LinkToCompanyFormTypes,
  LoginFormTypes,
  NationalityFormTypes,
  OwnerFormTypes,
  ProFormTypes,
  ResetPasswordFormTypes,
  UserFormTypes,
} from "../types/forms.types";
import { CustomerTypes } from "../types/store.types";

const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const useSubmitFunction = (type: string) => {
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    handleCloseEmployeeModal,
    handleCloseCustomerModal,
    handleCloseJobModal,
    handleCloseNationalityModal,
    handleCloseDeleteModal,
    editableNationalityData,
    editableJobData,
    ownerImage,
    employeeImage,
    customerImage,
    userImage,
    proImage,
    editableUserData,
    editableOwnerData,
    formType,
    excelType,
    editableCompanyData,
    editableCustomerData,
    editableProData,
    editableEmployeeData,
    companyImage,
    setOwnerImage,
    setEmployeeImage,
    setCustomerImage,
    setCompanyImage,
    setUserImage,
    handleCloseOwnerModal,
    handleCloseCompanyModal,
    handleCloseUserModal,
    handleCloseLinkToCompanyModal,
    handleCloseProModal,
    setProImage,
    handleCloseUploadEmployeesModal,
  } = useContext(FormsContext);
  const {
    handleEditNationalityInSheet,
    handleEditJobInSheet,
    handleEditOwnerInSheet,
    handleEditCompanyInSheet,
    handleEditProInSheet,
    jobsSheets,
    nationalitiesSheets,
    prosSheets,
    ownersSheets,
    companiesSheets,
    jobIndex,
    proIndex,
    ownerIndex,
    companyIndex,
    nationalityIndex,
    handleEditEmployeeInSheet,
    customersSheets,
    customerIndex,
    employeesSheets,
    employeeIndex,
    handleEditCustomerInSheet,
  } = useContext(ExcelsContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.auth);
  const { owners } = useSelector((state: RootState) => state.owners);
  const { companies } = useSelector((state: RootState) => state.companies);
  const { employees } = useSelector((state: RootState) => state.employees);
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { users } = useSelector((state: RootState) => state.users);
  const { customers } = useSelector((state: RootState) => state.customers);
  const { pros } = useSelector((state: RootState) => state.pros);
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

  const handleOwnerFormData = (
    values: OwnerFormTypes | ProFormTypes | CustomerTypes,
    type: "pro" | "customer" | "owner"
  ) => {
    const avatar = type
      ? type === "pro"
        ? proImage
        : type === "customer"
        ? customerImage
        : ownerImage
      : ownerImage;
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
    formData.append("email", values.email.trim());
    formData.append("remarks", values.remarks.trim());
    if (values.emiratesId) {
      formData.append("emiratesId", values.emiratesId.trim());
    }
    formData.append("state", values.state.trim());
    if (type !== "customer") {
      formData.append("status", values.status.trim());
      formData.append("fileImmgNo", values.fileImmgNo.toString().trim());
      if (values.residenceExpiryDate) {
        formData.append(
          "residenceExpiryDate",
          values.residenceExpiryDate?.toString().trim()
        );
      }
    }
    if (values.dob) {
      formData.append("dob", values.dob.toString().trim());
    }
    formData.append("proCode", values.proCode ? "true" : "false");
    formData.append("type", type);
    return formData;
  };

  const handleEmployeeFormData = (values: EmployeeFormTypes) => {
    const formData = new FormData();
    formData.append("avatar", employeeImage);
    formData.append("name", values.name.trim());
    formData.append("nameAr", values.nameAr.trim());
    formData.append("uid", values.uid.trim());
    formData.append("personCode", values.personCode.trim());
    formData.append("companyId", values.companyId.trim());
    formData.append("companyName", values.companyName.trim());
    formData.append("nationality", values.nationality.trim());
    formData.append("idNationality", values.idNationality.trim());
    formData.append("emiratesId", values.emiratesId.trim());
    formData.append("email", values.email.trim());
    formData.append("status", values.status.trim());
    formData.append("salary", values.salary.trim());
    formData.append("gender", values.gender.trim());
    formData.append("cardType", values.cardType.trim());
    formData.append("mobileNumber", values.mobileNumber.trim());
    if (values.dob) {
      formData.append("dob", values.dob.toString().trim());
    }
    formData.append("passportNumber", values.passportNumber.trim());
    if (values.passportExpiry) {
      formData.append(
        "passportExpiry",
        values.passportExpiry.toString().trim()
      );
    }
    if (values.residenceExpireDate) {
      formData.append(
        "residenceExpireDate",
        values.residenceExpireDate.toString().trim()
      );
    }
    if (values.lcExpireDate) {
      formData.append("lcExpireDate", values.lcExpireDate.toString().trim());
    }
    formData.append("job", values.job.trim());
    formData.append("visaFileNumber", values.visaFileNumber.trim());
    formData.append("medical.insurance", values.medicalInsuranceCompany.trim());
    formData.append("medical.policy", values.medicalPolicy.trim());
    if (values.medicalExpireDate) {
      formData.append(
        "medical.expireDate",
        values.medicalExpireDate.toString().trim()
      );
    }
    formData.append("iLOE.insurance", values.iLOEInsuranceCompany.trim());
    formData.append("iLOE.policy", values.iLOEPolicy.trim());
    if (values.iLOEExpireDate) {
      formData.append(
        "iLOE.expireDate",
        values.iLOEExpireDate.toString().trim()
      );
    }
    formData.append("remarks", values.remarks.trim());
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
    formData.append("molCode", values.molCode.trim());
    formData.append("molCategory", values.molCategory.trim());
    formData.append("whatsAppNo", values.whatsAppNo.trim());
    formData.append("mobileNo", values.mobileNo.trim());
    formData.append("website", values.website.trim());
    formData.append("zipCode", values.zipCode.trim());
    formData.append("trn", values.trn.trim());
    formData.append("userName", values.userName.trim());
    formData.append("password", values.password.trim());
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

  //Job

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

  //Nationality
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

  //Users
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

  //Owners
  const addOwner = async (values: OwnerFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/owner`, handleOwnerFormData(values, "owner"), {
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
          handleOwnerFormData(values, "owner"),
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

  //Pros
  const addPro = async (values: ProFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/owner`, handleOwnerFormData(values, "pro"), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Officer is Created Successfully",
          status: "success",
        });
        dispatch(getPros({}));
        dispatch(getProsCounter());
        handleCloseProModal();
        setProImage("");
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
          handleOwnerFormData(values, "pro"),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
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

  const createProsSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = prosSheets[proIndex.fileIndex].data;
    await server
      .post(`/owner`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Officers are Created Successfully",
          status: "success",
        });
        navigate(`${import.meta.env.VITE_PROS_ROUTE}`);
        dispatch(getPros({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  //Customer
  const addCustomer = async (values: CustomerFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/owner`, handleOwnerFormData(values, "customer"), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
          handleOwnerFormData(values, "customer"),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
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

  const createCustomersSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = customersSheets[customerIndex.fileIndex].data;
    await server
      .post(`/owner`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Customers are Created Successfully",
          status: "success",
        });
        navigate(`${import.meta.env.VITE_CUSTOMERS_ROUTE}`);
        dispatch(getCustomers({}));
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  //Employees
  const addEmployee = async (values: EmployeeFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/Employee`, handleEmployeeFormData(values), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Employee is Created Successfully",
          status: "success",
        });
        dispatch(getEmployees({}));
        dispatch(getEmployeesCounter());
        navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}`);
        setEmployeeImage("");
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editEmployee = async (values: EmployeeFormTypes) => {
    handleOpenFormsLoading();
    if (pathname === `${import.meta.env.VITE_UPLOAD_EMPLOYEES_ROUTE}`) {
      handleEditEmployeeInSheet(values);
      handleCloseEmployeeModal();
      handleAlert({
        msg: "Employee is Updated Successfully",
        status: "success",
      });
    } else {
      await server
        .patch(
          `/Employee/${editableEmployeeData && editableEmployeeData._id}`,
          handleEmployeeFormData(values),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          handleAlert({
            msg: "Employee is Updated Successfully",
            status: "success",
          });
          dispatch(getEmployees({}));
          navigate(
            `${import.meta.env.VITE_EMPLOYEES_ROUTE}/${
              editableEmployeeData && editableEmployeeData._id
            }`
          );
          setEmployeeImage("");
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }
    handleCloseFormsLoading();
  };

  const createEmployeesSheet = async (values: unknown) => {
    handleOpenFormsLoading();
    values = employeesSheets[employeeIndex.fileIndex].data;
    await server
      .post(`/Employee`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        handleAlert({
          msg: "Employees are Created Successfully",
          status: "success",
        });
        if (id) {
          dispatch(getCompany({ id }));
        } else {
          navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}`);
          dispatch(getEmployees({}));
        }
        handleCloseUploadEmployeesModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  //Company
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

  const linkToCompany = async (values: LinkToCompanyFormTypes) => {
    handleOpenFormsLoading();
    await server
      .get(
        `/company/ManageOwnersAndPro?companyId=${values.companyId}&id=${
          formType === "linkOwner"
            ? editableOwnerData && editableOwnerData._id
            : formType === "linkPro"
            ? editableProData && editableProData._id
            : editableCustomerData && editableCustomerData._id
        }&operation=adding&typeOfPerson=${
          formType === "linkOwner"
            ? "owner"
            : formType === "linkPro"
            ? "pro"
            : "customer"
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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

  //Download Excel
  const handleDownloadExcelSubmit = async (values: DownloadExcelFormTypes) => {
    handleOpenFormsLoading();
    const fileName = values.fileName;
    if (excelType.entity === "owners") {
      if (excelType.type === "excel") {
        handleDownloadExcel(owners, excelType.entity, fileName);
      }
    } else if (excelType.entity === "officers") {
      if (excelType.type === "excel") {
        handleDownloadExcel(pros, excelType.entity, fileName);
      }
    } else if (excelType.entity === "customers") {
      if (excelType.type === "excel") {
        handleDownloadExcel(customers, excelType.entity, fileName);
      }
    } else if (excelType.entity === "employees") {
      if (excelType.type === "excel") {
        handleDownloadExcel(employees, excelType.entity, fileName);
      }
    } else if (excelType.entity === "jobs") {
      if (excelType.type === "excel") {
        handleDownloadExcel(jobs, excelType.entity, fileName);
      }
    } else if (excelType.entity === "nationalities") {
      if (excelType.type === "excel") {
        handleDownloadExcel(nationalities, excelType.entity, fileName);
      }
    } else if (excelType.entity === "users") {
      if (excelType.type === "excel") {
        handleDownloadExcel(users, excelType.entity, fileName);
      }
    } else if (excelType.entity === "companies") {
      if (excelType.type === "excel") {
        handleDownloadExcel(companies, excelType.entity, fileName);
      }
    }
    handleCloseFormsLoading();
  };

  //Delete
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
          dispatch(getOwnersCounter());
          navigate(`${import.meta.env.VITE_OWNERS_ROUTE}`);
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (formType === "pro") {
      await server
        .delete(`/owner/${editableProData && editableProData._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          handleAlert({
            msg: "Officer is Deleted Successfully",
            status: "success",
          });
          dispatch(getPros({}));
          dispatch(getProsCounter());
          navigate(`${import.meta.env.VITE_PROS_ROUTE}`);
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (formType === "customer") {
      await server
        .delete(`/owner/${editableCustomerData && editableCustomerData._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          handleAlert({
            msg: "Customer is Deleted Successfully",
            status: "success",
          });
          dispatch(getCustomers({}));
          dispatch(getCustomersCounter());
          navigate(`${import.meta.env.VITE_CUSTOMERS_ROUTE}`);
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (formType === "employee") {
      await server
        .delete(
          `/Employee/${editableEmployeeData && editableEmployeeData._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          handleAlert({
            msg: "Employee is Deleted Successfully",
            status: "success",
          });
          dispatch(getEmployees({}));
          dispatch(getEmployeesCounter());
          navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}`);
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
          dispatch(getJobsCounter());
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
          dispatch(getNationalitiesCounter());
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
          dispatch(getUsersCounter());
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
          dispatch(getCompaniesCounter());
          navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`);
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (formType === "unLinkOwner") {
      await server
        .get(
          `/company/ManageOwnersAndPro?companyId=${
            editableCompanyData && editableCompanyData._id
          }&id=${id}&operation=deleting&typeOfPerson=owner`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          handleAlert({
            msg: "Owner is unLinked with Company Successfully",
            status: "success",
          });
          if (id) {
            dispatch(getOwner({ id }));
          }
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (formType === "unLinkPro") {
      await server
        .get(
          `/company/ManageOwnersAndPro?companyId=${
            editableCompanyData && editableCompanyData._id
          }&id=${id}&operation=deleting&typeOfPerson=pro`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          handleAlert({
            msg: "Officer is unLinked with Company Successfully",
            status: "success",
          });
          if (id) {
            dispatch(getPro({ id }));
          }
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (formType === "unLinkCustomer") {
      await server
        .get(
          `/company/ManageOwnersAndPro?companyId=${
            editableCompanyData && editableCompanyData._id
          }&id=${id}&operation=deleting&typeOfPerson=customer`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          handleAlert({
            msg: "Customer is unLinked with Company Successfully",
            status: "success",
          });
          if (id) {
            dispatch(getCustomer({ id }));
          }
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
      case "addPro":
        addPro(values as ProFormTypes);
        break;
      case "editPro":
        editPro(values as ProFormTypes);
        break;
      case "createProsSheet":
        createProsSheet(values as unknown);
        break;
      case "addEmployee":
        addEmployee(values as EmployeeFormTypes);
        break;
      case "editEmployee":
        editEmployee(values as EmployeeFormTypes);
        break;
      case "createEmployeesSheet":
        createEmployeesSheet(values as unknown);
        break;
      case "addCustomer":
        addCustomer(values as CustomerFormTypes);
        break;
      case "editCustomer":
        editCustomer(values as CustomerFormTypes);
        break;
      case "createCustomersSheet":
        createCustomersSheet(values as unknown);
        break;
      case "addCompany":
        addCompany(values as CompanyFormTypes);
        break;
      case "editCompany":
        editCompany(values as CompanyFormTypes);
        break;
      case "linkPro":
      case "linkOwner":
        linkToCompany(values as LinkToCompanyFormTypes);
        break;
      case "createCompaniesSheet":
        createCompaniesSheet(values as unknown);
        break;
      case "downloadExcel":
        handleDownloadExcelSubmit(values as DownloadExcelFormTypes);
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

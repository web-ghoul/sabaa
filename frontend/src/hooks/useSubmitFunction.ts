import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ExcelsContext } from "../contexts/ExcelsContext";
import { FormsContext } from "../contexts/FormsContext";
import useCompanySubmit from "../forms/CompanyForm/useCompanySubmit";
import useCustomerSubmit from "../forms/CustomerForm/useCustomerSubmit";
import useDeleteSubmit from "../forms/DeleteForm/useDeleteSubmit";
import useEChannelSubmit from "../forms/EChannelForm/useEChannelSubmit";
import useEmployeeSubmit from "../forms/EmployeeForm/useEmployeeSubmit";
import useForgotPasswordSubmit from "../forms/ForgotPasswordForm/useForgotPasswordSubmit";
import useJobSubmit from "../forms/JobForm/useJobSubmit";
import useLinkToCompanySubmit from "../forms/LinkToCompanyForm/useLinkToCompanySubmit";
import useLoginSubmit from "../forms/LoginForm/useLoginSubmit";
import useNationalitySubmit from "../forms/NationalityForm/useNationalitySubmit";
import useNatwasalSubmit from "../forms/NatwasalForm/useNatwasalSubmit";
import useOTPSubmit from "../forms/OTPForm/useOTPSubmit";
import useOwnerSubmit from "../forms/OwnerForm/useOwnerSubmit";
import useProSubmit from "../forms/ProForm/useProSubmit";
import useResetPasswordSubmit from "../forms/ResetPasswordForm/useResetPasswordSubmit";
import useSponsorSubmit from "../forms/SponsorForm/useSponsorSubmit";
import useTasheelSubmit from "../forms/TasheelForm/useTasheelSubmit";
import useUserSubmit from "../forms/UserForm/useUserSubmit";
import { handleAlert } from "../functions/handleAlert";
import { handleCatchError } from "../functions/handleCatchError";
import { handleDownloadExcel } from "../functions/handleDownloadExcel";
import { getCompanies } from "../store/companiesSlice";
import { getCompany } from "../store/companySlice";
import { getCustomers } from "../store/customersSlice";
import { getEmployees } from "../store/employeesSlice";
import { getJobs } from "../store/jobsSlice";
import { getNationalities } from "../store/nationalitiesSlice";
import { getOwners } from "../store/ownersSlice";
import { getPros } from "../store/prosSlice";
import { AppDispatch, RootState } from "../store/store";
import {
  AllFormsTypes,
  CompanyFormTypes,
  ConvertCustomerFormTypes,
  CustomerFormTypes,
  DownloadExcelFormTypes,
  EChannelFormTypes,
  EmployeeFormTypes,
  ForgotPasswordFormTypes,
  JobFormTypes,
  LinkToCompanyFormTypes,
  LoginFormTypes,
  NationalityFormTypes,
  NatwasalFormTypes,
  OTPFormTypes,
  OwnerFormTypes,
  ProFormTypes,
  ResetPasswordFormTypes,
  SponsorFormTypes,
  TasheelFormTypes,
  UserFormTypes,
} from "../types/forms.types";
import useAxios from "./useAxios";

const useSubmitFunction = (type: string) => {
  const { server } = useAxios();
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    handleCloseConvertCustomerModal,
    excelType,
    editableCustomerData,
    handleCloseUploadEmployeesModal,
    handleCloseDownloadExcelModal,
  } = useContext(FormsContext);
  const {
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
    customersSheets,
    customerIndex,
    employeesSheets,
    employeeIndex,
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
  const { pros } = useSelector((state: RootState) => state.pros);
  const { id } = useParams();
  const { login } = useLoginSubmit();
  const { forgotPassword } = useForgotPasswordSubmit();
  const { resetPassword } = useResetPasswordSubmit();
  const { OTP } = useOTPSubmit();
  const { editUser, addUser } = useUserSubmit();
  const { editCustomer, addCustomer } = useCustomerSubmit();
  const { editPro, addPro } = useProSubmit();
  const { editOwner, addOwner } = useOwnerSubmit();
  const { editJob, addJob } = useJobSubmit();
  const { editNationality, addNationality } = useNationalitySubmit();
  const { editCompany, addCompany } = useCompanySubmit();
  const { editEmployee, addEmployee } = useEmployeeSubmit();
  const { editSponsor, addSponsor } = useSponsorSubmit();
  const { editTasheel, addTasheel } = useTasheelSubmit();
  const { editNatwasal, addNatwasal } = useNatwasalSubmit();
  const { editEChannel, addEChannel } = useEChannelSubmit();
  const { linkToCompany } = useLinkToCompanySubmit();
  const { handleDelete } = useDeleteSubmit();
  const { users } = useSelector((state: RootState) => state.users);
  const { customers } = useSelector((state: RootState) => state.customers);

  //Job
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

  //Owners
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

  const convertCustomer = async (values: ConvertCustomerFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(
        `/owner/${editableCustomerData && editableCustomerData._id}`,
        { type: values.type === "Owner" ? "owner" : "pro" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        handleAlert({
          msg: "Customer is Converted Successfully",
          status: "success",
        });
        if (
          id &&
          pathname === `${import.meta.env.VITE_CUSTOMERS_ROUTE}/${id}`
        ) {
          if (values.type === "Owner") {
            navigate(`${import.meta.env.VITE_OWNERS_ROUTE}/${id}`);
          } else {
            navigate(`${import.meta.env.VITE_PROS_ROUTE}/${id}`);
          }
        } else {
          if (values.type === "Owner") {
            navigate(`${import.meta.env.VITE_OWNERS_ROUTE}`);
          } else {
            navigate(`${import.meta.env.VITE_PROS_ROUTE}`);
          }
        }
        handleCloseConvertCustomerModal();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  //Employees
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
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/owner/export?type=owner&fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Owners Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      }
    } else if (excelType.entity === "officers") {
      if (excelType.type === "excel") {
        handleDownloadExcel(pros, excelType.entity, fileName);
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/owner/export?type=pro&fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Officers Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      }
    } else if (excelType.entity === "customers") {
      if (excelType.type === "excel") {
        handleDownloadExcel(customers, excelType.entity, fileName);
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/owner/export?type=customer&fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Customers Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      }
    } else if (excelType.entity === "employees") {
      if (excelType.type === "excel") {
        handleDownloadExcel(employees, excelType.entity, fileName);
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/Employee/export?fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Employees Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
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
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/user/export?fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Users Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      }
    } else if (excelType.entity === "companies") {
      if (excelType.type === "excel") {
        handleDownloadExcel(companies, excelType.entity, fileName);
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/company/export?fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Companies Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      }
    }
    handleCloseFormsLoading();
  };

  const submitFunction = (values: AllFormsTypes | unknown) => {
    switch (type) {
      case "forgotPassword":
        forgotPassword(values as ForgotPasswordFormTypes);
        break;
      case "otp":
        OTP(values as OTPFormTypes);
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
      case "convertCustomer":
        convertCustomer(values as ConvertCustomerFormTypes);
        break;
      case "addSponsor":
        addSponsor(values as SponsorFormTypes);
        break;
      case "editSponsor":
        editSponsor(values as SponsorFormTypes);
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
      case "addEChannel":
        addEChannel(values as EChannelFormTypes);
        break;
      case "editEChannel":
        editEChannel(values as EChannelFormTypes);
        break;
      case "addTasheel":
        addTasheel(values as TasheelFormTypes);
        break;
      case "editTasheel":
        editTasheel(values as TasheelFormTypes);
        break;
      case "addNatwasal":
        addNatwasal(values as NatwasalFormTypes);
        break;
      case "editNatwasal":
        editNatwasal(values as NatwasalFormTypes);
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

  return { submitFunction };
};

export default useSubmitFunction;

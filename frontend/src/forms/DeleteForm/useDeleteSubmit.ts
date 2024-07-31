import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getCompaniesCounter } from "../../store/companiesCounterSlice";
import { getCompanies } from "../../store/companiesSlice";
import { getCustomer } from "../../store/customerSlice";
import { getCustomersCounter } from "../../store/customersCounterSlice";
import { getCustomers } from "../../store/customersSlice";
import { getEChannelsCounter } from "../../store/eChannelsCounterSlice";
import { getEChannels } from "../../store/eChannelsSlice";
import { getEmployee } from "../../store/employeeSlice";
import { getEmployeesCounter } from "../../store/employeesCounterSlice";
import { getEmployees } from "../../store/employeesSlice";
import { getJobsCounter } from "../../store/jobsCounterSlice";
import { getJobs } from "../../store/jobsSlice";
import { getNationalitiesCounter } from "../../store/nationalitiesCounterSlice";
import { getNationalities } from "../../store/nationalitiesSlice";
import { getNatwasalsCounter } from "../../store/natwasalsCounterSlice";
import { getNatwasals } from "../../store/natwasalsSlice";
import { getOwner } from "../../store/ownerSlice";
import { getOwnersCounter } from "../../store/ownersCounterSlice";
import { getOwners } from "../../store/ownersSlice";
import { getPro } from "../../store/proSlice";
import { getProsCounter } from "../../store/prosCounterSlice";
import { getPros } from "../../store/prosSlice";
import { AppDispatch, RootState } from "../../store/store";
import { getTasheelsCounter } from "../../store/tasheelsCounterSlice";
import { getTasheels } from "../../store/tasheelsSlice";
import { getUsersCounter } from "../../store/usersCounterSlice";
import { getUsers } from "../../store/usersSlice";
import { getTransactions } from "../../store/transactionsSlice";
import { getRoles } from "../../store/rolesSlice";

const useDeleteSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    handleCloseFormsLoading,
    handleOpenFormsLoading,
    editableOwnerData,
    editableCustomerData,
    editableProData,
    editableSponsorData,
    editableTasheelData,
    editableNatwasalData,
    editableCompanyData,
    editableEmployeeData,
    editableEChannelData,
    editableJobData,
    editableNationalityData,
    editableUserData,
    editableTransactionData,
    editableRoleData,
    formType,
  } = useContext(FormsContext);
  const { handleCloseDeleteModal, handleCloseViewSponsorModal } =
    useContext(ModalsContext);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { pathname } = useLocation();

  const handleDelete = async () => {
    handleOpenFormsLoading();
    if (formType === "owner") {
      await server
        .delete(`/owner/${editableOwnerData && editableOwnerData._id}`)
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
        .delete(`/owner/${editableProData && editableProData._id}`)
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
        .delete(`/owner/${editableCustomerData && editableCustomerData._id}`)
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
    } else if (formType === "sponsor") {
      await server
        .delete(`/sponsor/${editableSponsorData && editableSponsorData._id}`)
        .then(() => {
          handleAlert({
            msg: "Sponsor is Deleted Successfully",
            status: "success",
          });
          if (id) {
            const type = pathname.split("/")[1];
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
          handleCloseDeleteModal();
          handleCloseViewSponsorModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (formType === "employee") {
      await server
        .delete(`/Employee/${editableEmployeeData && editableEmployeeData._id}`)
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
        .delete(`/job-title/${editableJobData && editableJobData._id}`)
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
          }`
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
        .delete(`/user/${editableUserData && editableUserData._id}`)
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
        .delete(`/company/${editableCompanyData && editableCompanyData._id}`)
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
    } else if (formType === "eChannel") {
      await server
        .delete(
          `/e-channel/${editableEChannelData && editableEChannelData._id}`
        )
        .then(() => {
          handleAlert({
            msg: "E-Channel is Deleted Successfully",
            status: "success",
          });
          dispatch(getEChannels({}));
          dispatch(getEChannelsCounter());
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (formType === "tasheel") {
      console.log(editableTasheelData);
      await server
        .delete(`/tasheels/${editableTasheelData && editableTasheelData._id}`)
        .then(() => {
          handleAlert({
            msg: "Tasheel is Deleted Successfully",
            status: "success",
          });
          dispatch(getTasheels({}));
          dispatch(getTasheelsCounter());
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (formType === "natwasal") {
      await server
        .delete(
          `/natwasals/${editableNatwasalData && editableNatwasalData._id}`
        )
        .then(() => {
          handleAlert({
            msg: "Natwasal is Deleted Successfully",
            status: "success",
          });
          dispatch(getNatwasals({}));
          dispatch(getNatwasalsCounter());
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
          }&id=${id}&operation=deleting&typeOfPerson=owner`
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
          }&id=${id}&operation=deleting&typeOfPerson=pro`
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
    } else if (formType === "transaction") {
      await server
        .delete(
          `/work-permit/${
            editableTransactionData && editableTransactionData._id
          }`
        )
        .then(() => {
          handleAlert({
            msg: "Transaction is deleted  Successfully",
            status: "success",
          });
          dispatch(getTransactions({}));
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else if (formType === "role") {
      await server
        .delete(`/permission/${editableRoleData && editableRoleData._id}`)
        .then(() => {
          handleAlert({
            msg: "Role is deleted Successfully",
            status: "success",
          });
          dispatch(getRoles());
          handleCloseDeleteModal();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }
    handleCloseFormsLoading();
  };

  return { handleDelete };
};

export default useDeleteSubmit;

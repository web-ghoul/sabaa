import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { getEmployeesCounter } from "../../store/employeesCounterSlice";
import { getEmployees } from "../../store/employeesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { EmployeeFormTypes } from "../../types/forms.types";

const useEmployeeSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const {
    employeeImage,
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    setEmployeeImage,
    editableEmployeeData,
  } = useContext(FormsContext);
  const { handleCloseEmployeeModal } = useContext(ModalsContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { handleEditEmployeeInSheet } = useContext(ExcelsContext);

  const handleEmployeeFormData = (values: EmployeeFormTypes) => {
    const formData = new FormData();
    if (employeeImage) {
      formData.append("avatar", employeeImage);
    }
    formData.append("name", values.name.trim());
    formData.append("nameAr", values.nameAr.trim());
    formData.append("uid", values.uid.trim());
    if (values.personCode) {
      formData.append("personCode", values.personCode.trim());
    }
    if (values.companyId.length > 0) {
      values.companyId.map((company) => {
        formData.append("companyId[]", company as string);
      });
    }
    if (values.emiratesId) {
      formData.append("emiratesId", values.emiratesId.trim());
    }
    formData.append("email", values.email.trim());
    formData.append("status", values.status.trim());
    if (values.salary) {
      formData.append("salary", values.salary);
    }
    formData.append("gender", values.gender.trim());
    formData.append("cardType", values.cardType.trim());
    formData.append("idNationality", values.idNationality.trim());
    formData.append("nationality", values.nationality.trim());
    formData.append("mobileNumber", values.mobileNumber.trim());
    if (values.dob) {
      formData.append("dob", values.dob.toString().trim());
    }
    if (values.passportNumber) {
      formData.append("passportNumber", values.passportNumber);
    }
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
    if (values.visaFileNumber) {
      formData.append("visaFileNumber", values.visaFileNumber);
    }
    if (values.fileImmgNo) {
      formData.append("fileImmgNo", values.fileImmgNo);
    }
    if (values.cardNumber) {
      formData.append("cardNumber", values.cardNumber);
    }
    formData.append("medical.insurance", values.medicalInsuranceCompany.trim());
    if (values.medicalPolicyNo) {
      formData.append("medicalPolicyNo", values.medicalPolicyNo);
    }
    if (values.medicalExpireDate) {
      formData.append(
        "medical.expireDate",
        values.medicalExpireDate.toString().trim()
      );
    }
    formData.append("iLOE.insurance", values.iLOEInsuranceCompany.trim());
    if (values.iLOEPolicyNo) {
      formData.append("iLOEPolicyNo", values.iLOEPolicyNo);
    }
    if (values.iLOEExpireDate) {
      formData.append(
        "iLOE.expireDate",
        values.iLOEExpireDate.toString().trim()
      );
    }
    formData.append("remarks", values.remarks.trim());
    return formData;
  };

  const addEmployee = async (values: EmployeeFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/Employee`, handleEmployeeFormData(values))
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
          handleEmployeeFormData(values)
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

  return { addEmployee, editEmployee };
};

export default useEmployeeSubmit;

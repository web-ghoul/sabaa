import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";

const useTransactionSchema = () => {
  const { editableTransactionData } = useContext(FormsContext);

  const PreTransactionSchema = yup.object({
    transactionNo: yup.string().required("Transaction number is required"),
    serialNo: yup.string().required("Serial number is required"),
    gender: yup.string().required("Gender is required"),
    personCode: yup.string().required("Person Code is required"),
    companyCode: yup.string(),
    companyId: yup.string(),
    companyName: yup.string().required("Company is required"),
    employeeId: yup.string(),
    employeeName: yup.string().required("English Name is required"),
    nameAr: yup.string().required("Arabic Name is required"),
    dob: yup.string().required("Employee is required"),
    idNationality: yup.string().required("Email is required"),
    nationality: yup.string().required("Email is required"),
    passportNumber: yup.string().required("Passport Number is required"),
    passportExpiry: yup.string().required("Passport Expire Date is required"),
    job: yup.string().required("Job is required"),
    uid: yup.string().required("Job is required"),
    emiratesNo: yup.string(),
    cardType: yup.string().required("Email is required"),
    salary: yup.string(),
    remarks: yup.string(),
    statusDate: yup.string(),
    status: yup.string(),
    workPermit: yup.string(),
    workPermitExpiryDate: yup.string(),
    visitExpiryDate: yup.string(),
  });

  const PreTransactionInitialValues = {
    transactionNo: editableTransactionData?.transactionNo || "",
    serialNo: editableTransactionData?.serialNo || "",
    personCode: editableTransactionData?.personCode || "",
    gender: editableTransactionData?.gender || "",
    companyCode: editableTransactionData?.companyCode || "",
    companyId: editableTransactionData?.companyId || "",
    companyName: editableTransactionData?.companyName || "",
    employeeId: editableTransactionData?.employeeId || "",
    employeeName: editableTransactionData?.employeeName || "",
    nameAr: "",
    dob: editableTransactionData?.dob || "",
    idNationality: editableTransactionData?.idNationality || "",
    nationality: editableTransactionData?.nationality || "",
    passportNumber: editableTransactionData?.passportNumber || "",
    passportExpiry: editableTransactionData?.passportExpiry || "",
    job: editableTransactionData?.job || "",
    uid: editableTransactionData?.uid || "",
    emiratesNo: editableTransactionData?.emiratesNo || "",
    cardType: editableTransactionData?.cardType || "",
    salary: editableTransactionData?.salary || "",
    remarks: editableTransactionData?.remarks || "",
    statusDate: editableTransactionData?.statusDate || "",
    status: editableTransactionData?.status || "",
    workPermit: editableTransactionData?.workPermit || "",
    workPermitExpiryDate: editableTransactionData?.workPermitExpiryDate || "",
    visitExpiryDate: editableTransactionData?.visitExpiryDate || "",
  };

  const ApprovedTransactionSchema = yup.object({});

  const ApprovedTransactionInitialValues = {
    personCode: "",
    workPermit: "",
    workPermitExpiryDate: "",
    visitExpiryDate: "",
  };

  const NewTransactionSchema = yup.object({
    lcNo: yup.string().required("Labour Card Number is required"),
    lcExpiryDate: yup.string().required("Labour Card Expire Date is required"),
    tawjeehDate: yup.string(),
    changeStatusDate: yup.string(),
    medicalDate: yup.string(),
    residenceExpiryDate: yup.string(),
  });

  const NewTransactionInitialValues = {
    lcNo: "",
    lcExpiryDate: "",
    tawjeehDate: "",
    changeStatusDate: "",
    medicalDate: "",
    residenceExpiryDate: "",
  };

  const RenewTransactionSchema = yup.object({
    lcNo: yup.string().required("Labour Card Number is required"),
    lcExpiryDate: yup.string().required("Labour Card Expire Date is required"),
    tawjeehDate: yup.string(),
    changeStatusDate: yup.string(),
    medicalDate: yup.string(),
    residenceExpiryDate: yup.string(),
  });

  const RenewTransactionInitialValues = {
    lcNo: "",
    lcExpiryDate: "",
    tawjeehDate: "",
    changeStatusDate: "",
    medicalDate: "",
    residenceExpiryDate: "",
  };

  return {
    PreTransactionSchema,
    PreTransactionInitialValues,
    NewTransactionSchema,
    NewTransactionInitialValues,
    RenewTransactionSchema,
    RenewTransactionInitialValues,
    ApprovedTransactionInitialValues,
    ApprovedTransactionSchema,
  };
};

export default useTransactionSchema;

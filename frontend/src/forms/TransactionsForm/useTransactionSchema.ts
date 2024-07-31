import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";

const useTransactionSchema = () => {
  const { editableTransactionData } = useContext(FormsContext);

  const TransactionSchema = yup.object({
    transactionNo: yup.string().required("Transaction number is required"),
    serialNo: yup.string().required("Serial number is required"),
    gender: yup.string().required("Gender is required"),
    personCode: yup.string().required("Person Code is required"),
    companyCode: yup.string(),
    companyId: yup.string().required("Company Id is required"),
    companyName: yup.string().required("Company Name is required"),
    employeeId: yup.string(),
    employeeName: yup.string().required("English Name is required"),
    employeeNameAr: yup.string().required("Arabic Name is required"),
    dob: yup.string().required("Date of Birth is required"),
    idNationality: yup.string().required("Nationality Id is required"),
    nationality: yup.string().required("Nationality is required"),
    passportNumber: yup.string().required("Passport Number is required"),
    passportExpiry: yup.string().required("Passport Expire Date is required"),
    job: yup.string().required("Job is required"),
    uid: yup.string().required("UID Number is required"),
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

  const TransactionInitialValues = {
    transactionNo: editableTransactionData?.transactionNo || "",
    serialNo: editableTransactionData?.serialNo || "",
    personCode: editableTransactionData?.personCode || "",
    gender: editableTransactionData?.gender || "",
    companyCode: editableTransactionData?.companyCode || "",
    companyId: editableTransactionData?.companyId || "",
    companyName: editableTransactionData?.companyName || "",
    employeeId: editableTransactionData?.employeeId || "",
    employeeName: editableTransactionData?.employeeName || "",
    employeeNameAr: editableTransactionData?.employeeNameAr || "",
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

  const NewLCSchema = yup.object({
    lcNo: yup.string().required("Labour Card Number is required"),
    lcExpiryDate: yup.string().required("Labour Card Expire Date is required"),
    tawjeehDate: yup.string(),
    changeStatusDate: yup.string(),
    medicalDate: yup.string(),
    residenceExpiryDate: yup.string(),
  });

  const NewLCInitialValues = {
    lcNo: "",
    lcExpiryDate: "",
    tawjeehDate: "",
    changeStatusDate: "",
    medicalDate: "",
    residenceExpiryDate: "",
  };

  return {
    TransactionSchema,
    TransactionInitialValues,
    NewLCSchema,
    NewLCInitialValues,
  };
};

export default useTransactionSchema;

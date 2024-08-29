import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";

const useTransactionSchema = () => {
  const { editableTransactionData } = useContext(FormsContext);

  const TransactionSchema = yup.object({
    transactionNo: yup.string().required("Transaction number is required"),
    gender: yup.string().required("Gender is required"),
    personCode: yup.string(),
    companyCode: yup.string(),
    companyId: yup.string().required("Company Id is required"),
    companyName: yup.string().required("Company Name is required"),
    employeeId: yup.string(),
    employeeName: yup.string().required("English Name is required"),
    employeeNameAr: yup.string().required("Arabic Name is required"),
    name: yup.string(),
    nameAr: yup.string(),
    dob: yup.string().required("Date of Birth is required"),
    idNationality: yup.string().required("Nationality Id is required"),
    nationality: yup.string().required("Nationality is required"),
    passportNumber: yup.string().required("Passport Number is required"),
    passportExpiry: yup.string().required("Passport Expire Date is required"),
    job: yup.string().required("Job is required"),
    uid: yup.string().required("UID Number is required"),
    emiratesNo: yup.string(),
    cardType: yup.string().required("Card Type is required"),
    salary: yup.string(),
    remarks: yup.string(),
    statusDate: yup.string(),
    status: yup.string(),
    lcNumber: yup.string(),
    lcExpiryDate: yup.string(),
    visitExpiryDate: yup.string(),
    tawjeehDate: yup.string(),
    changeStatusDate: yup.string(),
    medicalDate: yup.string(),
    residenceExpiryDate: yup.string(),
  });

  const TransactionInitialValues = {
    transactionNo: "",
    personCode: editableTransactionData?.personCode || "",
    gender: editableTransactionData?.gender || "",
    companyCode: editableTransactionData?.companyCode || "",
    companyId: editableTransactionData?.companyId || "",
    companyName: editableTransactionData?.companyName || "",
    employeeId: editableTransactionData?.employeeId || "",
    employeeName: editableTransactionData?.employeeName || "",
    employeeNameAr: editableTransactionData?.employeeNameAr || "",
    name: editableTransactionData?.name || "",
    nameAr: editableTransactionData?.nameAr || "",
    dob:
      (editableTransactionData?.dob &&
        new Date(editableTransactionData?.dob).toISOString().split("T")[0]) ||
      "",
    idNationality: editableTransactionData?.idNationality || "",
    nationality: editableTransactionData?.nationality || "",
    passportNumber: editableTransactionData?.passportNumber || "",
    passportExpiry:
      (editableTransactionData?.passportExpiry &&
        new Date(editableTransactionData?.passportExpiry)
          .toISOString()
          .split("T")[0]) ||
      "",
    job: editableTransactionData?.job || "",
    uid: editableTransactionData?.uid || "",
    emiratesNo: editableTransactionData?.emiratesNo || "",
    cardType: editableTransactionData?.cardType || "",
    salary: editableTransactionData?.salary || "",
    remarks: editableTransactionData?.remarks || "",
    statusDate:
      (editableTransactionData?.statusDate &&
        new Date(editableTransactionData?.statusDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    status: editableTransactionData?.status || "",
    lcNumber: editableTransactionData?.lcNumber || "",
    lcExpiryDate:
      (editableTransactionData?.lcExpiryDate &&
        new Date(editableTransactionData?.lcExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    visitExpiryDate:
      (editableTransactionData?.visitExpiryDate &&
        new Date(editableTransactionData?.visitExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    tawjeehDate:
      (editableTransactionData?.tawjeehDate &&
        new Date(editableTransactionData?.tawjeehDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    changeStatusDate:
      (editableTransactionData?.changeStatusDate &&
        new Date(editableTransactionData?.changeStatusDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    medicalDate:
      (editableTransactionData?.medicalDate &&
        new Date(editableTransactionData?.medicalDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    residenceExpiryDate:
      (editableTransactionData?.residenceExpiryDate &&
        new Date(editableTransactionData?.residenceExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
  };

  return {
    TransactionSchema,
    TransactionInitialValues,
  };
};

export default useTransactionSchema;

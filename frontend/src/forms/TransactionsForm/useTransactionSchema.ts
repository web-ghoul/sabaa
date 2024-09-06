import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";
import { handleDateForInput } from "../../functions/handleDateForInput";

const useTransactionSchema = () => {
  const { editableTransactionData } = useContext(FormsContext);

  const TransactionSchema = yup.object({
    transactionNo: yup.string().required("Transaction number is required"),
    cardType: yup.string().required("Card Type is required"),
    createdAt: yup.string().required("Current Date is required"),
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
    uid: yup.string(),
    emiratesNo: yup.string(),
    salary: yup.string(),
    remarks: yup.string(),
    status: yup.string(),
    statusDate: yup.string(),
    lcNumber: yup.string(),
    lcExpiryDate: yup.string(),
    visitExpiryDate: yup.string(),
  });

  const TransactionInitialValues = {
    transactionNo: editableTransactionData?.transactionNo || "",
    createdAt: handleDateForInput(new Date()),
    cardType: editableTransactionData?.cardType || "",
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
    salary: editableTransactionData?.salary || "",
    remarks: editableTransactionData?.remarks || "",
    status: editableTransactionData?.status || "",
    statusDate:
    (editableTransactionData?.statusDate &&
      new Date(editableTransactionData?.statusDate)
        .toISOString()
        .split("T")[0]) ||
    "",
  };

  const ApprovedSchema = yup.object({
    transactionNo: yup.string().required("Transaction number is required"),
    createdAt: yup.string().required("Current Date is required"),
    cardType: yup.string().required("Card Type is required"),

    gender: yup.string(),
    personCode: yup.string(),
    companyCode: yup.string(),
    companyId: yup.string(),
    companyName: yup.string(),
    employeeId: yup.string(),
    employeeName: yup.string(),
    employeeNameAr: yup.string(),
    name: yup.string(),
    nameAr: yup.string(),
    dob: yup.string(),
    idNationality: yup.string(),
    nationality: yup.string(),
    passportNumber: yup.string(),
    passportExpiry: yup.string(),
    job: yup.string(),
    uid: yup.string(),
    emiratesNo: yup.string(),
    salary: yup.string(),
    remarks: yup.string(),

    status: yup.string().required("Status is required"),
    statusDate: yup.string().required("Status Date Type is required"),
    lcNumber: yup.string().required("LC Number is required"),
    lcExpiryDate: yup.string().required("LC Expire Date is required"),
    visitExpiryDate: yup.string().required("Visit Expire Date is required"),

    tawjeehDate: yup.string(),
    changeStatusDate: yup.string(),
    medicalDate: yup.string(),
    residenceExpiryDate: yup.string(),
  });

  const ApprovedInitialValues = {
    transactionNo: editableTransactionData?.transactionNo || "",
    createdAt: new Date(),
    cardType: editableTransactionData?.cardType || "",

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
    salary: editableTransactionData?.salary || "",
    remarks: editableTransactionData?.remarks || "",

    status: editableTransactionData?.status || "",
    statusDate:
      (editableTransactionData?.statusDate &&
        new Date(editableTransactionData?.statusDate)
          .toISOString()
          .split("T")[0]) ||
      "",
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

    tawjeehDate: "",
    changeStatusDate: "",
    medicalDate: "",
    residenceExpiryDate: "",
  };

  const NewLCTransactionSchema = yup.object({
    transactionNo: yup.string().required("Transaction number is required"),
    createdAt: yup.string().required("Current Date is required"),
    cardType: yup.string().required("Card Type is required"),

    gender: yup.string(),
    personCode: yup.string(),
    companyCode: yup.string(),
    companyId: yup.string(),
    companyName: yup.string(),
    employeeId: yup.string(),
    employeeName: yup.string(),
    employeeNameAr: yup.string(),
    name: yup.string(),
    nameAr: yup.string(),
    dob: yup.string(),
    idNationality: yup.string(),
    nationality: yup.string(),
    passportNumber: yup.string(),
    passportExpiry: yup.string(),
    job: yup.string(),
    uid: yup.string(),
    emiratesNo: yup.string(),
    salary: yup.string(),
    remarks: yup.string(),
    status: yup.string(),
    statusDate: yup.string(),

    lcNumber: yup.string().required("LC Number is required"),
    lcExpiryDate: yup.string().required("LC Expire Date is required"),
    visitExpiryDate: yup.string().required("Visit Expire Date is required"),
    tawjeehDate: yup.string(),
    changeStatusDate: yup.string(),
    medicalDate: yup.string(),
    residenceExpiryDate: yup.string(),
  });

  const NewLCTransactionInitialValues = {
    transactionNo: "",
    cardType: "",
    createdAt: new Date(),

    personCode: "",
    gender: "",
    companyCode: "",
    companyId: "",
    companyName: "",
    employeeId: "",
    employeeName: "",
    employeeNameAr: "",
    dob: "",
    idNationality: "",
    nationality: "",
    passportNumber: "",
    passportExpiry: "",
    job: "",
    uid: "",
    emiratesNo: "",
    salary: "",
    remarks: "",

    lcNumber: "",
    lcExpiryDate: "",
    visitExpiryDate: "",
    tawjeehDate: "",
    changeStatusDate: "",
    medicalDate: "",
    residenceExpiryDate: "",
  };

  const RenewLCTransactionSchema = yup.object({
    transactionNo: yup.string().required("Transaction number is required"),
    createdAt: yup.string().required("Current Date is required"),
    cardType: yup.string().required("Card Type is required"),

    gender: yup.string(),
    personCode: yup.string(),
    companyCode: yup.string(),
    companyId: yup.string(),
    companyName: yup.string(),
    employeeId: yup.string(),
    employeeName: yup.string(),
    employeeNameAr: yup.string(),
    name: yup.string(),
    nameAr: yup.string(),
    dob: yup.string(),
    idNationality: yup.string(),
    nationality: yup.string(),
    passportNumber: yup.string(),
    passportExpiry: yup.string(),
    job: yup.string(),
    uid: yup.string(),
    emiratesNo: yup.string(),
    salary: yup.string(),
    remarks: yup.string(),
    status: yup.string(),
    statusDate: yup.string(),

    lcNumber: yup.string().required("LC Number is required"),
    lcExpiryDate: yup.string().required("LC Expire Date is required"),
    visitExpiryDate: yup.string().required("Visit Expire Date is required"),
    tawjeehDate: yup.string(),
    changeStatusDate: yup.string(),
    medicalDate: yup.string(),
    residenceExpiryDate: yup.string(),
  });

  const RenewLCTransactionInitialValues = {
    transactionNo: "",
    cardType: "",
    createdAt: new Date(),

    personCode: "",
    gender: "",
    companyCode: "",
    companyId: "",
    companyName: "",
    employeeId: "",
    employeeName: "",
    employeeNameAr: "",
    dob: "",
    idNationality: "",
    nationality: "",
    passportNumber: "",
    passportExpiry: "",
    job: "",
    uid: "",
    emiratesNo: "",
    salary: "",
    remarks: "",

    lcNumber: "",
    lcExpiryDate: "",
    visitExpiryDate: "",
    tawjeehDate: "",
    changeStatusDate: "",
    medicalDate: "",
    residenceExpiryDate: "",
  };

  return {
    TransactionSchema,
    TransactionInitialValues,
    ApprovedSchema,
    ApprovedInitialValues,
    NewLCTransactionSchema,
    NewLCTransactionInitialValues,
    RenewLCTransactionSchema,
    RenewLCTransactionInitialValues,
  };
};

export default useTransactionSchema;

import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";
import { handleDateForInput } from "../../functions/handleDateForInput";
import { isAdult } from "../../functions/handleIsAdult";
import { useLocation } from "react-router-dom";

const useTransactionSchema = () => {
  const { editableTransactionData } = useContext(FormsContext);
  const { pathname } = useLocation();

  const sixMonthsFromNow = new Date();
  sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);

  const TransactionSchema = yup.object({
    transactionNo: yup.string().required("Transaction number is required"),
    cardType: yup.string().required("Card Type is required"),
    createdAt: yup.string().required("Current Date is required"),

    gender: yup.string().required("Gender is required"),
    personCode: yup.string(),
    uid: yup.string(),
    emiratesNo: yup.string(),
    companyCode: yup.string(),
    companyId: yup.string().required("Company Id is required"),
    companyName: yup.string().required("Company Name is required"),
    employeeId: yup.string(),
    employeeName: yup.string().required("English Name is required"),
    employeeNameAr: yup.string().required("Arabic Name is required"),
    name: yup.string(),
    nameAr: yup.string(),
    dob: yup
      .date()
      .test(
        "is-adult",
        "You must be at least 18 years old",
        (value) => value && isAdult(value)
      )
      .required("Date of Birth is required"),
    idNationality: yup.string().required("Nationality Id is required"),
    nationality: yup.string().required("Nationality is required"),
    passportNumber: yup.string().required("Passport Number is required"),
    passportExpiry: yup
      .date()
      .required("Passport Expiry Date is required")
      .min(
        sixMonthsFromNow,
        "Passport Expiry Date must be at least 6 months from today"
      ),
    job: yup.string().required("Job is required"),
    salary: yup.string(),
    remarks: yup.string(),
    lcStatus: yup.string(),
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
    lcStatus: editableTransactionData?.lcStatus || "",
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
    personCode: yup.string().required("Person Code is required"),
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
    uid: yup.string().required("UID Number is required"),
    emiratesNo: yup.string().required("Emirates ID is required"),
    salary: yup.string(),
    remarks: yup.string(),

    status: yup.string().required("Status is required"),
    statusDate: yup.string().required("Status Date Type is required"),
    lcNumber: yup.string().required("LC Number is required"),
    lcExpiryDate: yup.string(),
    visitExpiryDate: yup.string(),

    tawjeehDate: yup.string(),
    changeStatusDate: yup.string(),
    medicalDate: yup.string(),
    residenceExpiryDate: yup.string(),
  });

  const ApprovedInitialValues = {
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
    dob: yup
      .date()
      .test(
        "is-adult",
        "You must be at least 18 years old",
        (value) => value && isAdult(value)
      )
      .required("Date of Birth is required"),
    idNationality: yup.string().required("Nationality Id is required"),
    nationality: yup.string().required("Nationality is required"),
    passportNumber: yup.string().required("Passport Number is required"),
    passportExpiry: yup.string(),
    job: yup.string().required("Job is required"),
    uid: yup.string(),
    emiratesNo: yup.string(),
    salary: yup.string(),
    remarks: yup.string(),
    status: yup.string(),
    statusDate: yup.string(),

    lcNumber: yup.string().required("LC Number is required"),
    lcStatus: yup.string().required("LC Status is required"),
    lcExpiryDate: yup.string(),
    visitExpiryDate: yup.string(),
    tawjeehDate: yup.string(),
    changeStatusDate: yup.string(),
    medicalDate: yup.string(),
    residenceExpiryDate: yup.string(),
  });

  const NewLCTransactionInitialValues = {
    transactionNo:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`
        ? editableTransactionData?.transactionNo
        : "",
    cardType:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`
        ? editableTransactionData?.cardType
        : "",
    createdAt:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`
        ? (editableTransactionData?.createdAt &&
            new Date(editableTransactionData?.createdAt)
              .toISOString()
              .split("T")[0]) ||
          ""
        : handleDateForInput(new Date()),

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

    lcNumber:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`
        ? editableTransactionData?.lcNumber
        : "",
    lcStatus:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`
        ? editableTransactionData?.lcStatus
        : "",
    lcExpiryDate:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`
        ? (editableTransactionData?.lcExpiryDate &&
            new Date(editableTransactionData?.lcExpiryDate)
              .toISOString()
              .split("T")[0]) ||
          ""
        : "",
    visitExpiryDate:
      (editableTransactionData?.visitExpiryDate &&
        new Date(editableTransactionData?.visitExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    tawjeehDate:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`
        ? (editableTransactionData?.tawjeehDate &&
            new Date(editableTransactionData?.tawjeehDate)
              .toISOString()
              .split("T")[0]) ||
          ""
        : "",
    changeStatusDate:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`
        ? (editableTransactionData?.changeStatusDate &&
            new Date(editableTransactionData?.changeStatusDate)
              .toISOString()
              .split("T")[0]) ||
          ""
        : "",
    medicalDate:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`
        ? (editableTransactionData?.medicalDate &&
            new Date(editableTransactionData?.medicalDate)
              .toISOString()
              .split("T")[0]) ||
          ""
        : "",
    residenceExpiryDate:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`
        ? (editableTransactionData?.residenceExpiryDate &&
            new Date(editableTransactionData?.residenceExpiryDate)
              .toISOString()
              .split("T")[0]) ||
          ""
        : "",
  };

  const RenewLCTransactionSchema = yup.object({
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
    dob: yup
      .date()
      .test(
        "is-adult",
        "You must be at least 18 years old",
        (value) => value && isAdult(value)
      )
      .required("Date of Birth is required"),
    idNationality: yup.string().required("Nationality Id is required"),
    nationality: yup.string().required("Nationality is required"),
    passportNumber: yup.string().required("Passport Number is required"),
    passportExpiry: yup.string(),
    job: yup.string().required("Job is required"),
    uid: yup.string(),
    emiratesNo: yup.string(),
    salary: yup.string(),
    remarks: yup.string(),
    status: yup.string(),
    statusDate: yup.string(),

    lcNumber: yup.string().required("LC Number is required"),
    lcStatus: yup.string().required("LC Status is required"),
    lcExpiryDate: yup.string(),
    visitExpiryDate: yup.string(),
    tawjeehDate: yup.string(),
    changeStatusDate: yup.string(),
    medicalDate: yup.string(),
    residenceExpiryDate: yup.string(),
  });

  const RenewLCTransactionInitialValues = {
    transactionNo:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
        ? editableTransactionData?.transactionNo
        : "",
    cardType:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
        ? editableTransactionData?.cardType
        : "",
    createdAt:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
        ? (editableTransactionData?.createdAt &&
            new Date(editableTransactionData?.createdAt)
              .toISOString()
              .split("T")[0]) ||
          ""
        : handleDateForInput(new Date()),

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

    lcNumber:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
        ? editableTransactionData?.lcNumber
        : "",
    lcStatus:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
        ? editableTransactionData?.lcStatus
        : "",
    lcExpiryDate:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
        ? (editableTransactionData?.lcExpiryDate &&
            new Date(editableTransactionData?.lcExpiryDate)
              .toISOString()
              .split("T")[0]) ||
          ""
        : "",
    visitExpiryDate:
      (editableTransactionData?.visitExpiryDate &&
        new Date(editableTransactionData?.visitExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    tawjeehDate:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
        ? (editableTransactionData?.tawjeehDate &&
            new Date(editableTransactionData?.tawjeehDate)
              .toISOString()
              .split("T")[0]) ||
          ""
        : "",
    changeStatusDate:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
        ? (editableTransactionData?.changeStatusDate &&
            new Date(editableTransactionData?.changeStatusDate)
              .toISOString()
              .split("T")[0]) ||
          ""
        : "",
    medicalDate:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
        ? (editableTransactionData?.medicalDate &&
            new Date(editableTransactionData?.medicalDate)
              .toISOString()
              .split("T")[0]) ||
          ""
        : "",
    residenceExpiryDate:
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
        ? (editableTransactionData?.residenceExpiryDate &&
            new Date(editableTransactionData?.residenceExpiryDate)
              .toISOString()
              .split("T")[0]) ||
          ""
        : "",
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

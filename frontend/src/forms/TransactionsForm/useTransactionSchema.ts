import * as yup from "yup";

const useTransactionSchema = () => {
  const PreTransactionSchema = yup.object({
    transactionNo: yup.string().required("Transaction number is required"),
    serialNo: yup.string().required("Serial number is required"),
    gender: yup.string().required("Gender is required"),
    companyCode: yup.string(),
    companyId: yup.string(),
    companyName: yup.string().required("Company is required"),
    employeeId: yup.string(),
    employeeName: yup.string().required("Employee is required"),
    dob: yup.string(),
    nationalityId: yup.string().required("Email is required"),
    nationality: yup.string().required("Email is required"),
    passportNumber: yup.string().required("Passport Number is required"),
    passportExpiry: yup.string().required("Passport Expire Date is required"),
    job: yup.string().required("Job is required"),
    uid: yup.string(),
    emiratesNo: yup.string(),
    cardType: yup.string().required("Email is required"),
    salary: yup.string(),
    remarks: yup.string().required("remarks is required"),
    statusDate: yup.string(),
    wpStatus: yup.string().required("Email is required"),
  });

  const PreTransactionInitialValues = {
    transactionNo: "",
    serialNo: "",
    gender: "",
    companyCode: "",
    companyId: "",
    companyName: "",
    employeeId: "",
    employeeName: "",
    dob: "",
    nationalityId: "",
    nationality: "",
    passportNumber: "",
    passportExpiry: "",
    job: "",
    uid: "",
    emiratesNo: "",
    cardType: "",
    salary: "",
    remarks: "",
    statusDate: "",
    wpStatus: "",
  };

  const ApprovedTransactionSchema = yup.object({
    personCode: yup.string().required("Person Code is required"),
    workPermit: yup.string().required("Work Permit Number is required"),
    workPermitExpiryDate: yup.string().required("Work Permit Expire Date"),
    visitExpiryDate: yup.string(),
  });

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

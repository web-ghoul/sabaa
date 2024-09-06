import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";

const useCompanySchema = () => {
  const { editableCompanyData } = useContext(FormsContext);

  const CompanySchema = yup.object({
    name: yup.string().required("Company English Name is required"),
    nameAr: yup.string().required("Company Arabic Name is required"),
    status: yup.string().required("Company Status is required"),
    country: yup.string(),
    state: yup.string().required("Company State is required"),
    address: yup.string(),
    phone: yup.string().required("Company Phone is required"),
    proCode: yup.array(),
    ownerId: yup.array().required("Owner is required"),
    customerId: yup.array(),
    licenseNo: yup.string().required("License Number is required"),
    immgCardNo: yup.string().required("Immg Card Number is required"),
    licenseIssueDate: yup.date().required("License Issue Date is required"),
    immgCardExpiry: yup
      .date()
      .required("Immg Card Expire Date is required")
      .min(
        yup.ref("licenseIssueDate"),
        "IMMG Card Expire Date must be after License Issue Date"
      ),
    licenseExpiryDate: yup
      .date()
      .required("License Expire Date is required")
      .min(
        yup.ref("licenseIssueDate"),
        "License Expiry Date must be after License Issue Date"
      ),
    establishmentType: yup.string().required("Establishment Type is required"),
    email: yup.string().email("Email is inValid"),
    molCode: yup.string(),
    molCategory: yup.string(),
    whatsAppNo: yup.string(),
    mobileNo: yup.string(),
    website: yup.string(),
    licenseIssuePlace: yup.string(),
    zipCode: yup.string(),
    trn: yup.string(),
    echannelExpiryDate: yup.string(),
    userName: yup.string(),
    password: yup.string(),
    noqodiWalet: yup.string(),
    noqodiPass: yup.string(),
    pinToken: yup.string(),
    noqodiNew: yup.string(),
    noqodiReg: yup.string(),
    noqodiNPass: yup.string(),
    echannelRemarks: yup.string(),
    remarks: yup.string(),
  });

  const CompanyInitialValues = {
    name: editableCompanyData?.name || "",
    nameAr: editableCompanyData?.nameAr || "",
    status: editableCompanyData?.status || "",
    logo: editableCompanyData?.logo || "",
    country: editableCompanyData?.country || "",
    state: editableCompanyData?.state || "",
    address: editableCompanyData?.address || "",
    email: editableCompanyData?.email || "",
    phone: editableCompanyData?.phone || "",
    proCode: editableCompanyData?.proCode || [],
    ownerId: editableCompanyData?.ownerId || [],
    customerId: editableCompanyData?.customerId || [],
    licenseNo: editableCompanyData?.licenseNo || "",
    immgCardNo: editableCompanyData?.immgCardNo || "",
    immgCardExpiry:
      (editableCompanyData?.immgCardExpiry &&
        new Date(editableCompanyData?.immgCardExpiry)
          .toISOString()
          .split("T")[0]) ||
      "",
    licenseIssueDate:
      (editableCompanyData?.licenseIssueDate &&
        new Date(editableCompanyData?.licenseIssueDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    licenseExpiryDate:
      (editableCompanyData?.licenseExpiryDate &&
        new Date(editableCompanyData?.licenseExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    establishmentType: editableCompanyData?.establishmentType || "",
    molCode: editableCompanyData?.molCode || "",
    molCategory: editableCompanyData?.molCategory || "",
    whatsAppNo: editableCompanyData?.whatsAppNo || "",
    mobileNo: editableCompanyData?.mobileNo || "",
    zipCode: editableCompanyData?.zipCode || "",
    remarks: editableCompanyData?.remarks || "",
    trn: editableCompanyData?.trn || "",
    website: editableCompanyData?.website || "",
    tenancyContractExp:
      (editableCompanyData?.tenancyContractExp &&
        new Date(editableCompanyData?.tenancyContractExp)
          .toISOString()
          .split("T")[0]) ||
      "",
    tenancyContractValue: editableCompanyData?.tenancyContractValue || "",
    licenseIssuePlace: editableCompanyData?.licenseIssuePlace || "",
    echannelExpiryDate:
      (editableCompanyData?.echannelExpiryDate &&
        new Date(editableCompanyData?.echannelExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    userName: editableCompanyData?.userName || "",
    echannelRemarks: editableCompanyData?.echannelRemarks || "",
    password: editableCompanyData?.password || "",
    noqodiWalet: editableCompanyData?.noqodiWalet || "",
    noqodiPass: editableCompanyData?.noqodiPass || "",
    pinToken: editableCompanyData?.pinToken || "",
    noqodiNew: editableCompanyData?.noqodiNew || "",
    noqodiReg: editableCompanyData?.noqodiReg || "",
    noqodiNPass: editableCompanyData?.noqodiNPass || "",
  };

  return { CompanyInitialValues, CompanySchema };
};

export default useCompanySchema;

import { useContext } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";

const useCompanySchema = () => {
  const { editableCompanyData } = useContext(FormsContext);

  const CompanySchema = yup.object({
    name: yup.string().required("Company English Name is required"),
    nameAr: yup.string().required("Company Arabic Name is required"),
    status: yup.string().required("Company Status is required"),
    country: yup.string().required("Company Country is required"),
    state: yup.string().required("Company State is required"),
    address: yup.string().required("Company Address is required"),
    phone: yup.string().required("Company Phone is required"),
    proCode: yup.array(),
    ownerId: yup.array(),
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
    molCode: yup.string().required("MOL Code is required"),
    molCategory: yup.string(),
    whatsAppNo: yup.string(),
    mobileNo: yup.string(),
    website: yup.string(),
    licenseIssuePlace: yup.string(),
    zipCode: yup.string(),
    trn: yup.string(),
    remarks: yup.string(),
  });

  const CompanyInitailValues = {
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
  };

  return { CompanyInitailValues, CompanySchema };
};

export default useCompanySchema;

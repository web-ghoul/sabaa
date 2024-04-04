import { useContext, useEffect } from "react";
import * as yup from "yup";
import { FormsContext } from "../../contexts/FormsContext";

const useCompanySchema = () => {
  const { editableCompanyData, setCompanyImage } = useContext(FormsContext);

  const CompanySchema = yup.object({
    name: yup.string().required("Company English Name is required"),
    nameAr: yup.string().required("Company Arabic Name is required"),
    status: yup.string().required("Company Status is required"),
    state: yup.string().required("Company State is required"),
    address: yup.string().required("Company Address is required"),
    phone: yup.string().required("Company Phone is required"),
    proCode: yup.array(),
    ownerId: yup.array(),
    licenseNo: yup.string().required("License Number is required"),
    immgCardNo: yup.string().required("Immg Card Number is required"),
    immgCardExpiry: yup.string().required("Immg Card Expire Date is required"),
    licenseIssueDate: yup.string().required("License Issue Date is required"),
    licenseExpiryDate: yup.string().required("License Expire Date is required"),
    establishmentType: yup.string().required("Establishment Type is required"),
    email: yup.string().email("Email is inValid"),
    molCode: yup.string(),
    molCategory: yup.string(),
    whatsAppNo: yup.string(),
    mobileNo: yup.string(),
    website: yup.string(),
    trn: yup.string(),
    remarks: yup.string(),
  });

  const CompanyInitailValues = {
    name: editableCompanyData?.name,
    nameAr: editableCompanyData?.nameAr,
    status: editableCompanyData?.status,
    logo: editableCompanyData?.logo,
    state: editableCompanyData?.state,
    address: editableCompanyData?.address,
    email: editableCompanyData?.email,
    phone: editableCompanyData?.phone,
    proCode: editableCompanyData?.proCode || [],
    ownerId: editableCompanyData?.ownerId || [],
    licenseNo: editableCompanyData?.licenseNo,
    immgCardNo: editableCompanyData?.immgCardNo,
    immgCardExpiry:
      editableCompanyData?.immgCardExpiry &&
      new Date(editableCompanyData?.immgCardExpiry).toISOString().split("T")[0],
    licenseIssueDate:
      editableCompanyData?.licenseIssueDate &&
      new Date(editableCompanyData?.licenseIssueDate)
        .toISOString()
        .split("T")[0],
    licenseExpiryDate:
      editableCompanyData?.licenseExpiryDate &&
      new Date(editableCompanyData?.licenseExpiryDate)
        .toISOString()
        .split("T")[0],
    establishmentType: editableCompanyData?.establishmentType,
    molCode: editableCompanyData?.molCode,
    molCategory: editableCompanyData?.molCategory,
    whatsAppNo: editableCompanyData?.whatsAppNo,
    mobileNo: editableCompanyData?.mobileNo,
    remarks: editableCompanyData?.remarks,
    trn: editableCompanyData?.trn,
    website: editableCompanyData?.website,
  };

  useEffect(() => {
    if (editableCompanyData && editableCompanyData.logo) {
      setCompanyImage(editableCompanyData.logo);
    }
  }, [editableCompanyData, setCompanyImage]);

  return { CompanyInitailValues, CompanySchema };
};

export default useCompanySchema;

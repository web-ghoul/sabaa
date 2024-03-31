import * as yup from "yup";

export const AddCompanySchema = yup.object({
<<<<<<< HEAD
  name: yup.string().required("English Name is required"),
  nameAr: yup.string().required("Arabic Name is required"),
  email: yup.string(),
  status: yup.string().required("Status is required"),
  state: yup.string().required("State is required"),
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone is required"),
  proCode: yup.array(),
  ownerId: yup.array(),
=======
  _id: yup.string().required("Company Code is required"),
  name: yup.string().required("Company English Name is required"),
  nameAr: yup.string().required("Company Arabic Name is required"),
  status: yup.string().required("Company Status is required"),
  state: yup.string().required("Company State is required"),
  address: yup.string().required("Company Address is required"),
  phone: yup.string().required("Company Phone is required"),
  category: yup.string().required("Company Category is required"),
  proCode: yup.array().required("Pro is required"),
  ownerId: yup.array().required("Owner is required"),
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  licenseNo: yup.string().required("License Number is required"),
  immgCardNo: yup.string().required("Immg Card Number is required"),
  immgCardExpiry: yup.string().required("Immg Card Expire Date is required"),
  licenseIssueDate: yup.string().required("License Issue Date is required"),
  licenseExpiryDate: yup.string().required("License Expire Date is required"),
<<<<<<< HEAD
  establishmentType: yup.string().required("Establishment Type is required"),
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  molCode: yup.string(),
  molCategory: yup.string(),
  whatsAppNo: yup.string(),
  mobileNo: yup.string(),
  website: yup.string(),
  trn: yup.string(),
  remarks: yup.string(),
});

export const AddCompanyInitailValues = {
<<<<<<< HEAD
  name: "",
  nameAr: "",
  status: "",
  email: "",
=======
  _id: "",
  name: "",
  nameAr: "",
  status: "",
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  logo: "",
  state: "",
  address: "",
  phone: "",
<<<<<<< HEAD
=======
  category: "",
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  proCode: [],
  ownerId: [],
  licenseNo: "",
  immgCardNo: "",
  immgCardExpiry: "",
  licenseIssueDate: "",
  licenseExpiryDate: "",
  establishmentType: "",
  molCode: "",
  molCategory: "",
  whatsAppNo: "",
  mobileNo: "",
  remarks: "",
  trn: "",
  website: "",
};

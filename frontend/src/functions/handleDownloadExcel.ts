import * as XLSX from "xlsx";
import { EntitiesType } from "../types/app.types";
import {
  CompanyTypes,
  CustomerTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  ProTypes,
  UserTypes,
} from "../types/store.types";
import { handleAlert } from "./handleAlert";
import { handleDate } from "./handleDate";

export const handleDownloadExcel = (
  data:
    | CompanyTypes[]
    | OwnerTypes[]
    | EmployeeTypes[]
    | ProTypes[]
    | CustomerTypes[]
    | UserTypes[]
    | NationalityTypes[]
    | JobTypes[]
    | null,
  variant: EntitiesType,
  fileName: string
) => {
  if (data) {
    const newData = [];
    for (let i = 0; i < data.length; i++) {
      if (variant === "companies") {
        const company = data[i] as CompanyTypes;
        const newCompany: { [key: string]: string } = {
          name: company.name,
          nameAr: company.nameAr,
          logo: company.logo,
          status: company.state,
          country: company.country,
          state: company.state,
          address: company.address,
          phone: company.phone,
          licenseNo: company.licenseNo,
          immgCardNo: company.immgCardNo,
          immgCardExpiry: handleDate(company.immgCardExpiry),
          licenseIssueDate: handleDate(company.licenseIssueDate),
          licenseExpiryDate: handleDate(company.licenseExpiryDate),
          establishmentType: company.establishmentType,
          licenseIssuePlace: company.licenseIssuePlace,
          zipCode: company.zipCode,
          molCode: company.molCode,
          molCategory: company.molCategory,
          whatsAppNo: company.whatsAppNo,
          mobileNo: company.mobileNo,
          website: company.website,
          trn: company.trn,
          email: company.email,
          tenancyContractValue: company.tenancyContractValue,
          tenancyContractExp: handleDate(company.tenancyContractExp),
          username: company.userName,
          password: company.password,
          echannelExpiryDate: handleDate(company.echannelExpiryDate),
          remarks: company.remarks,
          createdAt: handleDate(company.createdAt),
        };
        newData.push(newCompany);
      } else if (variant === "users") {
        const user = data[i] as UserTypes;
        const newUser: { [key: string]: string } = {
          name: user.name,
          email: user.email,
          role: user.role,
          phone: user.phone,
          status: user.status,
          createdAt: handleDate(user.createdAt),
        };
        newData.push(newUser);
      } else if (variant === "owners") {
        const owner = data[i] as OwnerTypes;
        const newOwner: { [key: string]: string } = {
          name: owner.name,
          nameAr: owner.nameAr,
          uid: owner.uid,
          personCode: owner.personCode,
          emiratesId: owner.emiratesId,
          status: owner.status,
          nationality: owner.nationality,
          phone: owner.phone,
          email: owner.email,
          state: owner.state,
          address: owner.address,
          fileImmgNo: owner.fileImmgNo,
          remarks: owner.remarks,
        };
        newData.push(newOwner);
      } else if (variant === "officers") {
        const pro = data[i] as ProTypes;
        const newPro: { [key: string]: string } = {
          name: pro.name,
          nameAr: pro.nameAr,
          uid: pro.uid,
          personCode: pro.personCode,
          emiratesId: pro.emiratesId,
          status: pro.status,
          nationality: pro.nationality,
          phone: pro.phone,
          email: pro.email,
          state: pro.state,
          address: pro.address,
          fileImmgNo: pro.fileImmgNo,
          remarks: pro.remarks,
        };
        newData.push(newPro);
      } else if (variant === "customers") {
        const customer = data[i] as CustomerTypes;
        const newCustomer: { [key: string]: string } = {
          name: customer.name,
          nameAr: customer.nameAr,
          uid: customer.uid,
          personCode: customer.personCode,
          emiratesId: customer.emiratesId,
          status: customer.status,
          nationality: customer.nationality,
          phone: customer.phone,
          email: customer.email,
          state: customer.state,
          address: customer.address,
          fileImmgNo: customer.fileImmgNo,
          remarks: customer.remarks,
          sponsor: customer.sponsor,
        };
        newData.push(newCustomer);
      } else if (variant === "employees") {
        const employee = data[i] as EmployeeTypes;
        const newEmployee: { [key: string]: string } = {
          name: employee.name,
          nameAr: employee.nameAr,
          personCode: employee.personCode,
          companyName: employee.companyName,
          nationality: employee.nationality,
          gender: employee.gender,
          email: employee.email,
          job: employee.job,
          mobileNumber: employee.mobileNumber,
          salary: employee.salary,
          cardType: employee.cardType,
          cardNumber: employee.cardNumber,
          status: employee.status,
          visaFileNumber: employee.visaFileNumber,
          passportNumber: employee.passportNumber,
          workPermitNumber: employee.workPermitNumber,
          medicalInsuranceCompany: employee.medicalInsuranceCompany,
          medicalPolicy: employee.medicalPolicy,
          iLOEInsuranceCompany: employee.iLOEInsuranceCompany,
          iLOEPolicy: employee.iLOEPolicy,
          uid: employee.uid,
          emiratesId: employee.emiratesId,
          remarks: employee.remarks,
        };
        newData.push(newEmployee);
      } else if (variant === "jobs") {
        const job = data[i] as JobTypes;
        const newJob: { [key: string]: string } = {
          jobTitle: job.jobTitle,
          ENSCOCode: job.ENSCOCode,
          MOHRE: job.MOHRE,
        };
        newData.push(newJob);
      } else if (variant === "nationalities") {
        const nationality = data[i] as NationalityTypes;
        const newNationality: { [key: string]: string } = {
          nationality: nationality.nationality,
          id: nationality.id,
        };
        newData.push(newNationality);
      }
    }
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(newData);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  } else {
    handleAlert({ msg: "No Data Found", status: "error" });
  }
};

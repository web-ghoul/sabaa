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
          "English Name": company.name,
          "Arabic Name": company.nameAr,
          Image: company.logo,
          Status: company.state,
          Country: company.country,
          State: company.state,
          Address: company.address,
          Phone: company.phone,
          Website: company.website,
          TRN: company.trn,
          Email: company.email,
          "License Number": company.licenseNo,
          "Immigration Card Number": company.immgCardNo,
          "Immigration Card Expire Date": handleDate(company.immgCardExpiry),
          "License Issue Place": company.licenseIssuePlace,
          "License Issue Date": handleDate(company.licenseIssueDate),
          "License Expire Date": handleDate(company.licenseExpiryDate),
          "Establishment Type": company.establishmentType,
          "Zip Code": company.zipCode,
          "MOL Code": company.molCode,
          "MOL Category": company.molCategory,
          "WhatsApp Number": company.whatsAppNo,
          "Mobile Number": company.mobileNo,
          "Tenancy Contract Value": company.tenancyContractValue,
          "Tenancy Contract Expire Date": handleDate(
            company.tenancyContractExp
          ),
          "E-Channel Username": company.userName,
          "E-Channel Password": company.password,
          "E-channel Expire Date": handleDate(company.echannelExpiryDate),
          Remarks: company.remarks,
          "Created At": handleDate(company.createdAt),
        };
        newData.push(newCompany);
      } else if (variant === "users") {
        const user = data[i] as UserTypes;
        const newUser: { [key: string]: string } = {
          Username: user.name,
          Email: user.email,
          Role: user.role,
          Phone: user.phone,
          Status: user.status,
          "Created At": handleDate(user.createdAt),
        };
        newData.push(newUser);
      } else if (variant === "owners") {
        const owner = data[i] as OwnerTypes;
        const newOwner: { [key: string]: string } = {
          "English Name": owner.name,
          "Arabic Name": owner.nameAr,
          Phone: owner.phone,
          Email: owner.email,
          "Date of Birth": handleDate(owner.dob),
          State: owner.state,
          Address: owner.address,
          Nationality: owner.nationality,
          UID: owner.uid,
          "Person Code": owner.personCode,
          "Emirates Id": owner.emiratesId,
          "File Immigration Number": owner.fileImmgNo,
          "Residence Expire Date": handleDate(owner.residenceExpiryDate),
          Status: owner.status,
          Remarks: owner.remarks,
          "Created At": handleDate(owner.createdAt),
        };
        newData.push(newOwner);
      } else if (variant === "officers") {
        const pro = data[i] as ProTypes;
        const newPro: { [key: string]: string } = {
          "English Name": pro.name,
          "Arabic Name": pro.nameAr,
          "Date of Birth": handleDate(pro.dob),
          Nationality: pro.nationality,
          Phone: pro.phone,
          Email: pro.email,
          State: pro.state,
          Address: pro.address,
          UID: pro.uid,
          "Person Code": pro.personCode,
          "Emirates Id": pro.emiratesId,
          "File Immigration Number": pro.fileImmgNo,
          "Residence Expire Date": handleDate(pro.residenceExpiryDate),
          Status: pro.status,
          Remarks: pro.remarks,
          "Created At": handleDate(pro.createdAt),
        };
        newData.push(newPro);
      } else if (variant === "customers") {
        const customer = data[i] as CustomerTypes;
        const newCustomer: { [key: string]: string } = {
          "English Name": customer.name,
          "Arabic Name": customer.nameAr,
          Nationality: customer.nationality,
          Phone: customer.phone,
          Email: customer.email,
          State: customer.state,
          "Date of Birth": handleDate(customer.dob),
          Address: customer.address,
          UID: customer.uid,
          "Person Code": customer.personCode,
          "Emirates Id": customer.emiratesId,
          "File Immigration Number": customer.fileImmgNo,
          "Residence Expire Date": handleDate(customer.residenceExpiryDate),
          Status: customer.status,
          Remarks: customer.remarks,
          "Created At": handleDate(customer.createdAt),
        };
        newData.push(newCustomer);
      } else if (variant === "employees") {
        const employee = data[i] as EmployeeTypes;
        const newEmployee: { [key: string]: string } = {
          "English Name": employee.name,
          "Arabic Name": employee.nameAr,
          "Person Code": employee.personCode,
          Nationality: employee.nationality,
          Gender: employee.gender,
          Email: employee.email,
          job: employee.job,
          "Mobile Number": employee.mobileNumber,
          Salary: employee.salary,
          "Card Type": employee.cardType,
          "Card Number": employee.cardNumber,
          Status: employee.status,
          "Visa File Number": employee.visaFileNumber,
          passportNumber: employee.passportNumber,
          workPermitNumber: employee.workPermitNumber,
          medicalInsuranceCompany: employee.medicalInsuranceCompany,
          "Medical Policy Number": employee.medicalPolicyNo,
          "ILOE Insurance Company": employee.iLOEInsuranceCompany,
          "iLOE Policy Number": employee.iLOEPolicyNo,
          UID: employee.uid,
          "Emirates Id": employee.emiratesId,
          Remarks: employee.remarks,
        };
        newData.push(newEmployee);
      } else if (variant === "jobs") {
        const job = data[i] as JobTypes;
        const newJob: { [key: string]: string } = {
          "Job Title": job.jobTitle,
          "ENSCO Code": job.ENSCOCode,
          "MOHRE Code": job.MOHRE,
        };
        newData.push(newJob);
      } else if (variant === "nationalities") {
        const nationality = data[i] as NationalityTypes;
        const newNationality: { [key: string]: string } = {
          Nationality: nationality.nationality,
          "Nationality Id": nationality.id,
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

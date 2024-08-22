import {
  AutoModeRounded,
  CheckCircleRounded,
  CloudUploadRounded,
  DownloadRounded,
  HighlightOffRounded,
} from "@mui/icons-material";
import { Box, LinearProgress, Paper, Stack } from "@mui/material";
import { ChangeEvent, DragEvent, useContext, useEffect, useState } from "react";
import readXlsxFile, { Row } from "read-excel-file";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { handleAlert } from "../../functions/handleAlert";
import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";
import { EntitiesType } from "../../types/app.types";
import {
  CompanyTypes,
  CustomerTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  ProTypes,
} from "../../types/store.types";
import Button from "../Button/Button";
import UploadStatus from "./UploadStatus";

const UploadExcel = ({ variant }: { variant: EntitiesType }) => {
  const [dragging, setDragging] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [samplePath, setSamplePath] = useState("./samples/companies.xlsx");
  const [sampleName, setSampleName] = useState("company_sample.xlsx");
  const [draggingFailed, setDraggingFailed] = useState(false);
  const {
    handleAddOwnersSheet,
    handleAddNationalitiesSheet,
    handleAddJobsSheet,
    handleAddCompaniesSheet,
    handleAddProsSheet,
    handleAddEmployeesSheet,
    handleAddCustomersSheet,
  } = useContext(ExcelsContext);

  const handleJobsSheet = (data: Array<Row>, file: File) => {
    const jobs: JobTypes[] = [];
    if (
      !(
        data[0][2] === "Job Title" &&
        data[0][1] === "ENSCO Code" &&
        data[0][0] === "MOHRE Code" &&
        data[0].length === 3
      )
    ) {
      handleAlert({ msg: "File Formate isn't allow", status: "error" });
      return;
    }
    for (let i = 1; i < data.length; i++) {
      const job: JobTypes = {
        MOHRE: "",
        ENSCOCode: "",
        jobTitle: "",
      };
      job["MOHRE"] = `${data[i][0]}`;
      job["ENSCOCode"] = `${data[i][1]}`;
      job["jobTitle"] = `${data[i][2]}`;
      jobs.push(job);
    }
    handleAddJobsSheet({ fileName: file.name, data: jobs });
  };

  const handleNationalitiesSheet = (data: Array<Row>, file: File) => {
    const nationalities: NationalityTypes[] = [];
    if (
      !(
        data[0][0] === "ID Nationality" &&
        data[0][1] === "Nationality" &&
        data[0].length === 2
      )
    ) {
      handleAlert({ msg: "File Formate isn't allow", status: "errror" });
      return;
    }
    for (let i = 1; i < data.length; i++) {
      const nationality: NationalityTypes = {
        id: "",
        nationality: "",
      };
      nationality["id"] = `${data[i][0]}`;
      nationality["nationality"] = `${data[i][1]}`;
      nationalities.push(nationality);
    }
    handleAddNationalitiesSheet({ fileName: file.name, data: nationalities });
  };

  const handleOwnersSheet = (data: Array<Row>, file: File) => {
    const owners: OwnerTypes[] = [];
    if (
      !(
        data[0][0] === "Person Code" &&
        data[0][1] === "Owner Name" &&
        data[0][2] === "Owner Name Ar" &&
        data[0][3] === "Nationality Code" &&
        data[0][4] === "Nationality" &&
        data[0][5] === "Emirates ID No" &&
        data[0][6] === "Date Of Birth" &&
        data[0][7] === "Mobile Number" &&
        data[0][8] === "UID NO" &&
        data[0][9] === "Email" &&
        data[0][10] === "Remarks" &&
        data[0][11] === "State" &&
        data[0][12] === "Address" &&
        data[0].length === 13
      )
    ) {
      handleAlert({ msg: "File Formate isn't allow", status: "error" });
      return;
    }
    for (let i = 1; i < data.length; i++) {
      const owner: OwnerTypes = {
        uid: "",
        nationality: "",
        avatar: "",
        name: "",
        nameAr: "",
        emiratesId: "",
        phone: "",
        idNationality: "",
        address: "",
        personCode: "",
        email: "",
        remarks: "",
        state: "",
        fileImmgNo: "",
        status: "",
        sponsor: "",
        sponsors: [],
        gender: "",
        job: "",
      };
      owner["personCode"] = `${data[i][0]}`;
      owner["name"] = `${data[i][1]}`;
      owner["nameAr"] = `${data[i][2]}`;
      owner["idNationality"] = `${data[i][3]}`;
      owner["nationality"] = `${data[i][4]}`;
      owner["emiratesId"] = `${data[i][5]}`;
      owner["dob"] = new Date(`${data[i][6]}`);
      owner["phone"] = `${data[i][7]}`;
      owner["uid"] = `${data[i][8]}`;
      owner["email"] = `${data[i][9]}`;
      owner["remarks"] = `${data[i][10]}`;
      owner["state"] = `${data[i][11]}`;
      owner["address"] = `${data[i][12]}`;
      owner["type"] = `owner`;
      owners.push(owner);
    }
    handleAddOwnersSheet({ fileName: file.name, data: owners });
  };

  const handleProsSheet = (data: Array<Row>, file: File) => {
    const pros: ProTypes[] = [];
    if (
      !(
        data[0][0] === "Person Code" &&
        data[0][1] === "PRO Name" &&
        data[0][2] === "PRO Name Ar" &&
        data[0][3] === "Nationality Code" &&
        data[0][4] === "Nationality" &&
        data[0][5] === "Emirates ID No" &&
        data[0][6] === "Date Of Birth" &&
        data[0][7] === "Mobile Number" &&
        data[0][8] === "UID NO" &&
        data[0][9] === "Email" &&
        data[0][10] === "Remarks" &&
        data[0][11] === "State" &&
        data[0][12] === "Address" &&
        data[0].length === 13
      )
    ) {
      handleAlert({ msg: "File Formate isn't allow", status: "error" });
      return;
    }
    for (let i = 1; i < data.length; i++) {
      const pro: ProTypes = {
        uid: "",
        nationality: "",
        avatar: "",
        name: "",
        nameAr: "",
        emiratesId: "",
        phone: "",
        idNationality: "",
        address: "",
        personCode: "",
        email: "",
        remarks: "",
        state: "",
        fileImmgNo: "",
        status: "",
        sponsor: "",
        sponsors: [],
        gender: "",
        job: "",
      };
      pro["personCode"] = `${data[i][0]}`;
      pro["name"] = `${data[i][1]}`;
      pro["nameAr"] = `${data[i][2]}`;
      pro["idNationality"] = `${data[i][3]}`;
      pro["nationality"] = `${data[i][4]}`;
      pro["emiratesId"] = `${data[i][5]}`;
      pro["dob"] = new Date(`${data[i][6]}`);
      pro["phone"] = `${data[i][7]}`;
      pro["uid"] = `${data[i][8]}`;
      pro["email"] = `${data[i][9]}`;
      pro["remarks"] = `${data[i][10]}`;
      pro["state"] = `${data[i][11]}`;
      pro["address"] = `${data[i][12]}`;
      pro["type"] = `pro`;
      pros.push(pro);
    }
    handleAddProsSheet({ fileName: file.name, data: pros });
  };

  const handleCustomersSheet = (data: Array<Row>, file: File) => {
    const customers: CustomerTypes[] = [];
    if (
      !(
        data[0][0] === "Person Code" &&
        data[0][1] === "PRO Name" &&
        data[0][2] === "PRO Name Ar" &&
        data[0][3] === "Nationality Code" &&
        data[0][4] === "Nationality" &&
        data[0][5] === "Emirates ID No" &&
        data[0][6] === "Date Of Birth" &&
        data[0][7] === "Mobile Number" &&
        data[0][8] === "UID NO" &&
        data[0][9] === "Email" &&
        data[0][10] === "Remarks" &&
        data[0][11] === "State" &&
        data[0][12] === "Address" &&
        data[0].length === 13
      )
    ) {
      handleAlert({ msg: "File Formate isn't allow", status: "error" });
      return;
    }
    for (let i = 1; i < data.length; i++) {
      const customer: CustomerTypes = {
        uid: "",
        nationality: "",
        avatar: "",
        name: "",
        nameAr: "",
        emiratesId: "",
        phone: "",
        idNationality: "",
        address: "",
        personCode: "",
        email: "",
        remarks: "",
        state: "",
        sponsor: "",
        fileImmgNo: "",
        status: "",
        sponsors: [],
        gender: "",
        job: "",
      };
      customer["personCode"] = `${data[i][0]}`;
      customer["name"] = `${data[i][1]}`;
      customer["nameAr"] = `${data[i][2]}`;
      customer["idNationality"] = `${data[i][3]}`;
      customer["nationality"] = `${data[i][4]}`;
      customer["emiratesId"] = `${data[i][5]}`;
      customer["dob"] = new Date(`${data[i][6]}`);
      customer["phone"] = `${data[i][7]}`;
      customer["uid"] = `${data[i][8]}`;
      customer["email"] = `${data[i][9]}`;
      customer["remarks"] = `${data[i][10]}`;
      customer["state"] = `${data[i][11]}`;
      customer["address"] = `${data[i][12]}`;
      customer["type"] = `customer`;
      customers.push(customer);
    }
    handleAddCustomersSheet({ fileName: file.name, data: customers });
  };

  const handleEmployeesSheet = (data: Array<Row>, file: File) => {
    const employees: EmployeeTypes[] = [];
    if (
      !(
        data[0][0] === "Person Code" &&
        data[0][1] === "Employee Name" &&
        data[0][2] === "Job Title" &&
        data[0][3] === "Passport Number" &&
        data[0][4] === "Nationality" &&
        data[0][5] === "Electronic Work Permit Number" &&
        data[0][6] === "Card Type" &&
        data[0][7] === "Expiry Date" &&
        data[0][8] === "Gender" &&
        data[0][9] === "UID"
      )
    ) {
      handleAlert({ msg: "File Formate isn't allow", status: "error" });
      return;
    }
    for (let i = 1; i < data.length; i++) {
      const employee: EmployeeTypes = {
        avatar: "",
        name: "",
        nameAr: "",
        personCode: "",
        companyId: [],
        idNationality: "",
        nationality: "",
        gender: "",
        email: "",
        job: "",
        mobileNumber: "",
        salary: "",
        cardType: "",
        lcNumber: "",
        status: "",
        visaFileNumber: "",
        passportNumber: "",
        medicalInsuranceCompany: "",
        medicalPolicyNo: "",
        iLOEInsuranceCompany: "",
        iLOEPolicyNo: "",
        uid: "",
        emiratesId: "",
        remarks: "",
        sponsors: [],
        medical: {
          insurance: "",
          expireDate: new Date(),
        },
        iLOE: {
          insurance: "",
          expireDate: new Date(),
        },
        fileImmgNo: "",
        companyName: [],
      };
      employee["personCode"] = `${data[i][0]}`;
      employee["name"] = `${data[i][1]}`;
      employee["nameAr"] = ``;
      employee["job"] = `${data[i][2]}`;
      employee["passportNumber"] = `${data[i][3]}`;
      employee["nationality"] = `${data[i][4]}`;
      employee["lcNumber"] = `${data[i][5]}`;
      employee["cardType"] = `${data[i][6]}`;
      employee["lcExpireDate"] = new Date(`${data[i][7]}`);
      employee["gender"] = `${data[i][8]}`;
      employee["uid"] = `${data[i][9]}`;
      employees.push(employee);
    }
    handleAddEmployeesSheet({ fileName: file.name, data: employees });
  };

  const handleCompaniesSheet = (data: Array<Row>, file: File) => {
    const companies: CompanyTypes[] = [];
    if (
      !(
        data[0][0] === "Status" &&
        data[0][1] === "Trade License No" &&
        data[0][2] === "License Start Date" &&
        data[0][3] === "License Expiry Date" &&
        data[0][4] === "IMMG Card No." &&
        data[0][5] === "IMMG Card Exp" &&
        data[0][6] === "MOL Code" &&
        data[0][7] === "MOL Category" &&
        data[0][8] === "Company Name" &&
        data[0][9] === "Company Name Ar" &&
        data[0][10] === "State" &&
        data[0][11] === "Mobile Number" &&
        data[0][12] === "Owner Code" &&
        data[0][13] === "Owner Name" &&
        data[0].length === 14
      )
    ) {
      handleAlert({ msg: "File Formate isn't allow", status: "error" });
      return;
    }

    for (let i = 1; i < data.length; i++) {
      const company: CompanyTypes = {
        name: "",
        nameAr: "",
        logo: "",
        status: "",
        state: "",
        address: "",
        phone: "",
        proCode: [],
        ownerId: [],
        licenseNo: "",
        immgCardNo: "",
        immgCardExpiry: new Date(),
        licenseIssueDate: new Date(),
        licenseExpiryDate: new Date(),
        echannelExpiryDate: new Date(),
        establishmentType: "",
        molCode: "",
        molCategory: "",
        whatsAppNo: "",
        mobileNo: "",
        website: "",
        trn: "",
        remarks: "",
        email: "",
        tenancyContractValue: "",
        tenancyContractExp: new Date(),
        country: "",
        licenseIssuePlace: "",
        zipCode: "",
        userName: "",
        password: "",
        createdAt: new Date(),
        customerId: [],
        employees: [],
        noqodiWalet: "",
        noqodiPass: "",
        pinToken: "",
        noqodiNew: "",
        noqodiReg: "",
        noqodiNPass: "",
        echannelRemarks: "",
      };
      company["status"] = `${data[i][0]}`;
      company["licenseNo"] = `${data[i][1]}`;
      company["licenseIssueDate"] = new Date(`${data[i][2]}`);
      company["licenseExpiryDate"] = new Date(`${data[i][3]}`);
      company["immgCardNo"] = `${data[i][4]}`;
      company["immgCardExpiry"] = new Date(`${data[i][5]}`);
      company["molCode"] = `${data[i][6]}`;
      company["molCategory"] = `${data[i][7]}`;
      company["name"] = `${data[i][8]}`;
      company["nameAr"] = `${data[i][9]}`;
      company["state"] = `${data[i][10]}`;
      company["phone"] = `${data[i][11]}`;
      companies.push(company);
    }
    handleAddCompaniesSheet({ fileName: file.name, data: companies });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | { target: { files: FileList } }
  ) => {
    setLoading(true);
    const file = e && e.target && e.target.files && e.target.files[0];
    if (
      file &&
      (file.name.endsWith(".csv") ||
        file.name.endsWith(".xlsx") ||
        file.name.endsWith(".xlsb") ||
        file.name.endsWith(".xlsm") ||
        file.name.endsWith(".xls"))
    ) {
      readXlsxFile(file)
        .then((rows) => {
          if (variant === "jobs") {
            handleJobsSheet(rows, file);
          } else if (variant === "nationalities") {
            handleNationalitiesSheet(rows, file);
          } else if (variant === "owners") {
            handleOwnersSheet(rows, file);
          } else if (variant === "officers") {
            handleProsSheet(rows, file);
          } else if (variant === "employees") {
            handleEmployeesSheet(rows, file);
          } else if (variant === "customers") {
            handleCustomersSheet(rows, file);
          } else if (variant === "companies") {
            handleCompaniesSheet(rows, file);
          }
          setSuccess(true);
          setLoading(false);
          setInterval(() => {
            setSuccess(false);
          }, 5000);
        })
        .catch((err) => {
          try {
            setDraggingFailed(true);
            setInterval(() => {
              setDraggingFailed(false);
            }, 5000);
            handleAlert({ msg: err.message, status: "error" });
          } catch (error) {
            handleAlert({ msg: "Error Occurs", status: "error" });
          }
        });
    } else {
      setDraggingFailed(true);
      setInterval(() => {
        setDraggingFailed(false);
      }, 5000);
      handleAlert({ msg: "Allow Excel Files Only", status: "error" });
      setLoading(false);
    }
    if ("value" in e.target) {
      e.target.value = "";
    }
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    setDragging(true);
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setDragging(false);
    handleChange({ target: { files } });
  };

  useEffect(() => {
    if (variant === "employees") {
      setSampleName("employees_sample.xlsx");
      setSamplePath("/samples/employees.xlsx");
    } else if (variant === "customers") {
      setSampleName("customers_sample.xlsx");
      setSamplePath("/samples/owners.xlsx");
    } else if (variant === "owners") {
      setSampleName("owners_sample.xlsx");
      setSamplePath("/samples/owners.xlsx");
    } else if (variant === "officers") {
      setSampleName("public_relation_officers_sample.xlsx");
      setSamplePath("/samples/pros.xlsx");
    } else if (variant === "companies") {
      setSampleName("companies_sample.xlsx");
      setSamplePath("/samples/companies.xlsx");
    } else if (variant === "jobs") {
      setSampleName("jobs_sample.xlsx");
      setSamplePath("/samples/jobs.xlsx");
    } else if (variant === "nationalities") {
      setSampleName("nationalities_sample.xlsx");
      setSamplePath("/samples/nationalities.xlsx");
    }
  }, [variant]);

  return (
    <Box className={`grid justify-stretch items-center gap-2`}>
      <Box
        component={"a"}
        href={samplePath}
        download={sampleName}
        className={`flex justify-start items-center w-fit`}
      >
        <Button
          icon={<DownloadRounded />}
          title={"Sample Sheet"}
          type={"submit"}
        />
      </Box>
      <Paper className={`flex justify-stretch items-center`}>
        <label
          htmlFor={"file"}
          className={`relative p-8 grid justify-stretch items-center rounded-md h-[300px] content-center gap-4 w-full cursor-pointer overflow-hidden lg:h-[250px] md:h-[200px] sm:!h-[180px] transition-all border-2 text-center
          &>img:m-auto border-transparent ${
            dragging && "!border-green !bg-[#ddd]"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          {dragging ? (
            <UploadStatus
              text={"Uploading Excel..."}
              icon={<CloudUploadRounded className="!text-[60px] text-excel" />}
            />
          ) : draggingFailed ? (
            <UploadStatus
              text={"Uploading Failed!!"}
              icon={
                <HighlightOffRounded color="primary" className="!text-[60px]" />
              }
            />
          ) : loading ? (
            <UploadStatus
              text={"Uploading..."}
              icon={<AutoModeRounded className=" text-green !text-[60px]" />}
            />
          ) : success ? (
            <UploadStatus
              text={"Uploading Successfully!!"}
              icon={<CheckCircleRounded className=" text-green !text-[60px]" />}
            />
          ) : (
            <UploadStatus
              text={"Browse or drag a excel file"}
              icon={<CloudUploadRounded className="!text-[60px] text-excel" />}
            />
          )}
          {!loading && (
            <PrimaryTextField
              fullWidth
              type={"file"}
              inputProps={{ accept: ".xls, .xlsx, .xlsm, .xlsb, .csv" }}
              id={"file"}
              name={"file"}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              sx={{ position: "absolute", opacity: "0", zIndex: "-1" }}
            />
          )}
          {loading && (
            <Stack sx={{ width: "100%", color: "grey.500" }} spacing={4}>
              <LinearProgress
                className="!h-[12px] !rounded-2xl md:!h-[8px] sm:!h-[6px]"
                color="success"
              />
            </Stack>
          )}
        </label>
      </Paper>
    </Box>
  );
};

export default UploadExcel;

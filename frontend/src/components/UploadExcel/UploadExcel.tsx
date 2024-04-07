import {
  AutoModeRounded,
  CheckCircleRounded,
  CloudUploadRounded,
  HighlightOffRounded,
} from "@mui/icons-material";
import { LinearProgress, Paper, Stack } from "@mui/material";
import { ChangeEvent, DragEvent, useContext, useState } from "react";
import readXlsxFile, { Row } from "read-excel-file";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { handleAlert } from "../../functions/handleAlert";
import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";
import {
  CompanyTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
} from "../../types/store.types";
import UploadStatus from "./UploadStatus";

const UploadExcel = ({
  variant,
}: {
  variant: "jobs" | "owners" | "companies" | "nationalities" | "users";
}) => {
  const [dragging, setDragging] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [draggingFailed, setDraggingFailed] = useState(false);
  const {
    handleAddOwnersSheet,
    handleAddNationalitiesSheet,
    handleAddJobsSheet,
    handleAddCompaniesSheet,
  } = useContext(ExcelsContext);

  const handleJobsSheet = (data: Array<Row>, file: File) => {
    const jobs: JobTypes[] = [];
    for (let i = 1; i < data.length; i++) {
      const job: JobTypes = {
        _id: "",
        ENSCOCode: "",
        jobTitle: "",
      };
      job["_id"] = `${data[i][0]}`;
      job["ENSCOCode"] = `${data[i][1]}`;
      job["jobTitle"] = `${data[i][2]}`;
      jobs.push(job);
    }
    handleAddJobsSheet({ fileName: file.name, data: jobs });
  };

  const handleNationalitiesSheet = (data: Array<Row>, file: File) => {
    const nationalities: NationalityTypes[] = [];
    for (let i = 1; i < data.length; i++) {
      const nationality: NationalityTypes = {
        _id: "",
        nationality: "",
      };
      nationality["_id"] = `${data[i][0]}`;
      nationality["nationality"] = `${data[i][1]}`;
      nationalities.push(nationality);
    }
    handleAddNationalitiesSheet({ fileName: file.name, data: nationalities });
  };

  const handleOwnersSheet = (data: Array<Row>, file: File) => {
    const owners: OwnerTypes[] = [];
    for (let i = 1; i < data.length; i++) {
      const owner: OwnerTypes = {
        _id: "",
        nationality: "",
        avatar: "",
        name: "",
        nameAr: "",
        emiratesId: "",
        phone: "",
        dob: new Date(),
        idNationality: "",
        address: "",
        personCode: "",
        email: "",
        remarks: "",
        state: "",
        proCode: false,
        createdAt: new Date(),
      };
      owner["personCode"] = `${data[i][0]}`;
      owner["name"] = `${data[i][1]}`;
      owner["nameAr"] = `${data[i][2]}`;
      owner["idNationality"] = `${data[i][3]}`;
      owner["nationality"] = `${data[i][4]}`;
      owner["emiratesId"] = `${data[i][5]}`;
      owner["dob"] = new Date(`${data[i][6]}`);
      owner["phone"] = `${data[i][7]}`;
      owner["_id"] = `${data[i][8]}`;
      owner["email"] = `${data[i][9]}`;
      owner["remarks"] = `${data[i][10]}`;
      owner["state"] = `${data[i][11]}`;
      owner["address"] = `${data[i][12]}`;
      owners.push(owner);
    }
    handleAddOwnersSheet({ fileName: file.name, data: owners });
  };

  const handleCompaniesSheet = (data: Array<Row>, file: File) => {
    const companies: CompanyTypes[] = [];
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
        createdAt: new Date(),
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

  return (
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
  );
};

export default UploadExcel;

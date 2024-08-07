import { useContext } from "react";
import { useSelector } from "react-redux";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import { handleDownloadExcel } from "../../functions/handleDownloadExcel";
import useAxios from "../../hooks/useAxios";
import { RootState } from "../../store/store";
import { DownloadExcelFormTypes } from "../../types/forms.types";

const useDownloadExcelSubmit = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const { excelType } = useContext(ExcelsContext);
  const { handleCloseDownloadExcelModal } = useContext(ModalsContext);
  const { users } = useSelector((state: RootState) => state.users);
  const { customers } = useSelector((state: RootState) => state.customers);
  const { owners } = useSelector((state: RootState) => state.owners);
  const { companies } = useSelector((state: RootState) => state.companies);
  const { employees } = useSelector((state: RootState) => state.employees);
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { pros } = useSelector((state: RootState) => state.pros);

  const handleDownloadExcelSubmit = async (values: DownloadExcelFormTypes) => {
    handleOpenFormsLoading();
    const fileName = values.fileName;
    if (excelType.entity === "owners") {
      if (excelType.type === "excel") {
        handleDownloadExcel(owners, excelType.entity, fileName);
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/owners/export?type=owner&fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Owners Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      }
    } else if (excelType.entity === "officers") {
      if (excelType.type === "excel") {
        handleDownloadExcel(pros, excelType.entity, fileName);
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/officers/export?type=pro&fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Officers Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      }
    } else if (excelType.entity === "customers") {
      if (excelType.type === "excel") {
        handleDownloadExcel(customers, excelType.entity, fileName);
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/customers/export?type=customer&fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Customers Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      }
    } else if (excelType.entity === "employees") {
      if (excelType.type === "excel") {
        handleDownloadExcel(employees, excelType.entity, fileName);
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/employees/export?fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Employees Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      }
    } else if (excelType.entity === "jobs") {
      if (excelType.type === "excel") {
        handleDownloadExcel(jobs, excelType.entity, fileName);
      }
    } else if (excelType.entity === "nationalities") {
      if (excelType.type === "excel") {
        handleDownloadExcel(nationalities, excelType.entity, fileName);
      }
    } else if (excelType.entity === "users") {
      if (excelType.type === "excel") {
        handleDownloadExcel(users, excelType.entity, fileName);
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/users/export?fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Users Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      }
    } else if (excelType.entity === "companies") {
      if (excelType.type === "excel") {
        handleDownloadExcel(companies, excelType.entity, fileName);
        handleCloseDownloadExcelModal();
      } else {
        await server
          .get(`/company/export?fileName=${values.fileName}`, {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${values.fileName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            handleAlert({
              msg: "Companies Excel is Created Successfully",
              status: "success",
            });
            handleCloseDownloadExcelModal();
          })
          .catch((err) => {
            handleCatchError(err);
          });
      }
    }
    handleCloseFormsLoading();
  };

  return { handleDownloadExcelSubmit };
};

export default useDownloadExcelSubmit;

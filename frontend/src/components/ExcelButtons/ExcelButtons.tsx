import { AddRounded } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useContext } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ModalsContext } from "../../contexts/ModalsContext";
import { ExcelButtonsTypes } from "../../types/components.types";
import Button from "../Button/Button";

const ExcelButtons = ({ variant, addBtn, upload, all }: ExcelButtonsTypes) => {
  const navigate = useNavigate();
  const { handleOpenDownloadExcelModal } = useContext(ModalsContext);

  const handleUploadLink = (): string => {
    if (variant === "companies") {
      return `${import.meta.env.VITE_UPLOAD_COMPANIES_ROUTE}`;
    } else if (variant === "owners") {
      return `${import.meta.env.VITE_UPLOAD_OWNERS_ROUTE}`;
    } else if (variant === "officers") {
      return `${import.meta.env.VITE_UPLOAD_PROS_ROUTE}`;
    } else if (variant === "jobs") {
      return `${import.meta.env.VITE_UPLOAD_JOBS_ROUTE}`;
    } else if (variant === "nationalities") {
      return `${import.meta.env.VITE_UPLOAD_NATIONALITIES_ROUTE}`;
    } else if (variant === "customers") {
      return `${import.meta.env.VITE_UPLOAD_CUSTOMERS_ROUTE}`;
    }else if (variant === "employees") {
      return `${import.meta.env.VITE_UPLOAD_EMPLOYEES_ROUTE}`;
    }
    return "";
  };

  const handleDownloadExcel = () => {
    handleOpenDownloadExcelModal("excel", variant);
  };

  const handleDownloadExcelAll = () => {
    handleOpenDownloadExcelModal("all", variant);
  };

  return (
    <Box
      className={`flex justify-end items-center gap-4  md:gap-3 sm:!gap-2 flex-wrap`}
    >
      {addBtn && <Button icon={<AddRounded />} title={addBtn} />}
      {upload && (
        <Button
          handling={() => navigate(handleUploadLink())}
          icon={<RiFileExcel2Fill />}
          bg={"excel"}
          title={"Upload Excel"}
        />
      )}
      <Button
        icon={<RiFileExcel2Fill />}
        handling={handleDownloadExcel}
        bg={"excel"}
        title={"Excel"}
      />
      {all && (
        <Button
          icon={<RiFileExcel2Fill />}
          handling={handleDownloadExcelAll}
          bg={"excel"}
          title={"Excel All"}
        />
      )}
    </Box>
  );
};

export default ExcelButtons;

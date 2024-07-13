import * as yup from "yup";

import { useContext } from "react";
import { ExcelsContext } from "../../contexts/ExcelsContext";

const useDownloadExcelSchema = () => {
  const { excelType } = useContext(ExcelsContext);

  const DownloadExcelSchema = yup.object({
    fileName: yup.string().required("File Name is Required"),
  });

  const DownloadExcelInitialValues = {
    fileName: excelType.entity.toUpperCase(),
  };

  return { DownloadExcelSchema, DownloadExcelInitialValues };
};

export default useDownloadExcelSchema;

import * as yup from "yup";

import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useDownloadExcelSchema = () => {
  const { excelType } = useContext(FormsContext);

  const DownloadExcelSchema = yup.object({
    fileName: yup.string().required("File Name is Required"),
  });

  const DownloadExcelInitailValues = {
    fileName: excelType.entity,
  };

  return { DownloadExcelSchema, DownloadExcelInitailValues };
};

export default useDownloadExcelSchema;

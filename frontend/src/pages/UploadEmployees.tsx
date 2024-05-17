import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import NoSheetsFound from "../components/NoSheetsFound/NoSheetsFound";
import SheetAccordion from "../components/SheetAccordion/SheetAccordion";
import UploadExcel from "../components/UploadExcel/UploadExcel";
import { AppContext } from "../contexts/AppContext";
import { ExcelsContext } from "../contexts/ExcelsContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import EmployeesTable from "../tables/EmployeesTable/EmployeesTable";
import { EmployeesSheetTypes } from "../types/contexts.types";

const UploadEmployees = () => {
  const { employeesSheets } = useContext(ExcelsContext);
  const { pageContainerClasses } = useContext(AppContext);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <Box className={`flex justify-between items-start gap-4`}>
          <BreadCrumbs>
            <Link
              to={`${import.meta.env.VITE_EMPLOYEES_ROUTE}`}
              className={`text-black !font-[600] hover:text-primary`}
              key={1}
            >
              <Typography variant="h6">Employees</Typography>
            </Link>
            <Typography variant="h6" key="2">
              Upload Employees
            </Typography>
          </BreadCrumbs>
        </Box>
        <Box className={`grid justify-stretch items-start gap-8`}>
          <UploadExcel variant={"employees"} />
          {employeesSheets.length > 0 ? (
            employeesSheets.map((sheet: EmployeesSheetTypes, i) => (
              <SheetAccordion title={sheet.fileName} key={i}>
                <EmployeesTable
                  count={sheet.data.length}
                  noPagination={true}
                  data={sheet.data}
                  fileIndex={i}
                />
                <Forms type={"createEmployeesSheet"} index={i} />
              </SheetAccordion>
            ))
          ) : (
            <NoSheetsFound />
          )}
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default UploadEmployees;

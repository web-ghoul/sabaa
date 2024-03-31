import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import NoSheetsFound from "../components/NoSheetsFound/NoSheetsFound";
import SheetAccordion from "../components/SheetAccordion/SheetAccordion";
import UploadExcel from "../components/UploadExcel/UploadExcel";
import { ExcelsContext } from "../contexts/ExcelsContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import CompaniesTable from "../tables/CompaniesTable/CompaniesTable";
import { CompaniesSheetTypes } from "../types/contexts.types";

const UploadCompanies = () => {
  const { companiesSheets } = useContext(ExcelsContext);
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid justify-stretch items-start gap-6`}>
        <Box className={`flex justify-between items-start gap-4`}>
          <BreadCrumbs>
            <Link
              to={`${import.meta.env.VITE_COMPANIES_ROUTE}`}
              className={`text-black !font-[600] hover:text-primary`}
              key={1}
            >
              Comapnies
            </Link>
            <Typography key="2">Upload Companies</Typography>
          </BreadCrumbs>
        </Box>
        <Box className={`grid justify-stretch items-start gap-8`}>
          <UploadExcel variant={"companies"} />
          {companiesSheets.length > 0 ? (
            companiesSheets.map((sheet: CompaniesSheetTypes, i) => (
              <SheetAccordion title={sheet.fileName} key={i}>
                <CompaniesTable data={sheet.data} fileIndex={i} />
                <Forms type={"createCompaniesSheet"} index={i} />
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

export default UploadCompanies;

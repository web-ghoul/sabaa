<<<<<<< HEAD
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
import NationalitiesTable from "../tables/NationalitiesTable/NationalitiesTable";
import { NationalitiesSheetTypes } from "../types/contexts.types";

const UploadNationalities = () => {
  const { nationalitiesSheets } = useContext(ExcelsContext);
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid justify-stretch items-start gap-6`}>
        <Box className={`flex justify-between items-start gap-4`}>
          <BreadCrumbs>
            <Link
              to={`${import.meta.env.VITE_NATIONALITIES_ROUTE}`}
              className={`text-black !font-[600] hover:text-primary`}
              key={1}
            >
              Nationalities
            </Link>
            <Typography key="2">Upload Nationalities</Typography>
          </BreadCrumbs>
        </Box>
        <Box className={`grid justify-stretch items-start gap-8`}>
          <UploadExcel variant={"nationalities"} />
          {nationalitiesSheets.length > 0 ? (
            nationalitiesSheets.map((sheet: NationalitiesSheetTypes, i) => (
              <SheetAccordion title={sheet.fileName} key={i}>
                <NationalitiesTable data={sheet.data} fileIndex={i} />
                <Forms type={"createNationalitiesSheet"} index={i} />
              </SheetAccordion>
            ))
          ) : (
            <NoSheetsFound />
          )}
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
=======
const UploadNationalities = () => {
  return <div>UploadNationalities</div>;
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
};

export default UploadNationalities;

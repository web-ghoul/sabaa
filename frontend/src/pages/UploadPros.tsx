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
import ProsTable from "../tables/ProsTable/ProsTable";
import { ProsSheetTypes } from "../types/contexts.types";

const UploadPros = () => {
  const { prosSheets } = useContext(ExcelsContext);
  const { pageContainerClasses } = useContext(AppContext);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <Box className={`flex justify-between items-start gap-4`}>
          <BreadCrumbs>
            <Link
              to={`${import.meta.env.VITE_PROS_ROUTE}`}
              className={`text-black !font-[600] hover:text-primary`}
              key={1}
            >
              <Typography variant="h6">Public Relation Officers</Typography>
            </Link>
            <Typography variant="h6" key="2">
              Upload Officers
            </Typography>
          </BreadCrumbs>
        </Box>
        <Box className={`grid justify-stretch items-start gap-8`}>
          <UploadExcel variant={"officers"} />
          {prosSheets.length > 0 ? (
            prosSheets.map((sheet: ProsSheetTypes, i) => (
              <SheetAccordion title={sheet.fileName} key={i}>
                <ProsTable
                  count={sheet.data.length}
                  noPagination={true}
                  data={sheet.data}
                  fileIndex={i}
                />
                <Forms type={"createProsSheet"} index={i} />
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

export default UploadPros;

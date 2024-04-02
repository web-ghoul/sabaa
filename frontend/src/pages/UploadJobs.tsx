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
import JobsTable from "../tables/JobsTable/JobsTable";
import { JobsSheetTypes } from "../types/contexts.types";

const UploadJobs = () => {
  const { jobsSheets } = useContext(ExcelsContext);
  const { pageContainerClasses } = useContext(AppContext);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <Box className={`flex justify-between items-start gap-4`}>
          <BreadCrumbs>
            <Link
              to={`${import.meta.env.VITE_JOBS_ROUTE}`}
              className={`text-black !font-[600] hover:text-primary`}
              key={1}
            >
              <Typography variant="h6">Jobs</Typography>
            </Link>
            <Typography variant="h6" key="2">
              Upload Jobs
            </Typography>
          </BreadCrumbs>
        </Box>
        <Box className={`grid justify-stretch items-start gap-8`}>
          <UploadExcel variant={"jobs"} />
          {jobsSheets.length > 0 ? (
            jobsSheets.map((sheet: JobsSheetTypes, i) => (
              <SheetAccordion title={sheet.fileName} key={i}>
                <JobsTable data={sheet.data} fileIndex={i} />
                <Forms type={"createJobsSheet"} index={i} />
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

export default UploadJobs;

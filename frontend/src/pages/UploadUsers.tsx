import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import NoSheetsFound from "../components/NoSheetsFound/NoSheetsFound";
import SheetAccordion from "../components/SheetAccordion/SheetAccordion";
import UploadExcel from "../components/UploadExcel/UploadExcel";
import { ExcelsContext } from "../contexts/ExcelsContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import UsersTable from "../tables/UsersTable/UsersTable";
import { UsersSheetTypes } from "../types/contexts.types";

const UploadUsers = () => {
  const { usersSheets } = useContext(ExcelsContext);
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid justify-stretch items-start gap-6`}>
        <Box className={`flex justify-between items-start gap-4`}>
          <BreadCrumbs>
            <Link
              to={`${import.meta.env.VITE_USERS_ROUTE}`}
              className={`text-black !font-[600] hover:text-primary`}
              key={1}
            >
              Users
            </Link>
            <Typography key="2">Upload Users</Typography>
          </BreadCrumbs>
        </Box>
        <Box className={`grid justify-stretch items-start gap-8`}>
          <UploadExcel variant={"users"} />
          {usersSheets.length > 0 ? (
            usersSheets.map((sheet: UsersSheetTypes, i) => (
              <SheetAccordion title={sheet.fileName} key={i}>
                <UsersTable data={sheet.data} />
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

export default UploadUsers;

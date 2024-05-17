import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import NoSheetsFound from "../components/NoSheetsFound/NoSheetsFound";
import SheetAccordion from "../components/SheetAccordion/SheetAccordion";
import Title from "../components/Title/Title";
import UploadExcel from "../components/UploadExcel/UploadExcel";
import { ExcelsContext } from "../contexts/ExcelsContext";
import { FormsContext } from "../contexts/FormsContext";
import Forms from "../forms/Forms";
import EmployeesTable from "../tables/EmployeesTable/EmployeesTable";
import { EmployeesSheetTypes } from "../types/contexts.types";

const UploadEmployeesModal = () => {
  const { openUploadEmployeesModal, handleCloseUploadEmployeesModal } =
    useContext(FormsContext);
  const { employeesSheets } = useContext(ExcelsContext);
  return (
    <Modal
      open={openUploadEmployeesModal}
      onClose={handleCloseUploadEmployeesModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal bg-bg`}>
        <Title title={"Upload Employees"} head={"h3"} />
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
      </Box>
    </Modal>
  );
};

export default UploadEmployeesModal;

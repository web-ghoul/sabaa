import { AddRounded } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import Button from "../components/Button/Button";
import { FormsContext } from "../contexts/FormsContext";
import SponsorsTable from "../tables/SponsorsTable/SponsorsTable";
import { SponsorTypes } from "../types/store.types";

const SponsorsSection = ({
  data,
  isLoading,
}: {
  data: SponsorTypes[] | null;
  isLoading: boolean;
}) => {
  const { handleOpenSponsorModal, handleOpenDownloadExcelModal } =
    useContext(FormsContext);
  const handleDownloadExcelAll = () => {
    handleOpenDownloadExcelModal("all", "sponsors", "employee");
  };
  return (
    <Paper
      className={`paper grid justify-stretch items-center gap-4 md:gap-3 sm:!gap-2`}
    >
      <Box className={`flex justify-end items-center`}>
        <Button
          title={"Add Sponsor"}
          icon={<AddRounded />}
          handling={() => handleOpenSponsorModal("addSponsor")}
        />
        <Button
          handling={handleDownloadExcelAll}
          bg={"excel"}
          title={"Excel All"}
          icon={<RiFileExcel2Fill />}
        />
      </Box>
      <SponsorsTable
        data={data}
        isLoading={isLoading}
        count={(data && data.length) || 0}
      />
    </Paper>
  );
};

export default SponsorsSection;

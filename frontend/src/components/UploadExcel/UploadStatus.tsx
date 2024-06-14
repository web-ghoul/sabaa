import { Box, Typography } from "@mui/material";
import { UploadStatusTypes } from "../../types/components.types";

const UploadStatus = ({ icon, text }: UploadStatusTypes) => {
  return (
    <>
      <Box className={`flex justify-center items-center `}>{icon}</Box>
      <Typography variant="h6">{text}</Typography>
    </>
  );
};

export default UploadStatus;

import { Box } from "@mui/material";
import Title from "../components/Title/Title";

const LogsSection = () => {
  return (
    <Box className={`grid justify-stretch items-center gap-4`}>
      <Title title={"Transaction Logs"} />
      <Box></Box>
    </Box>
  );
};

export default LogsSection;

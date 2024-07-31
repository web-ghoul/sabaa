import { Box, Typography } from "@mui/material";
import { IOSSwitch } from "../../mui/switches/ISOSwitch";

const PermissionSwitch = ({
  title,
  check,
  change,
}: {
  title: string;
  check: boolean;
  change: () => void;
}) => {
  const handleChange = () => {
    change();
  };

  return (
    <Box className={`flex justify-center items-center`}>
      <IOSSwitch sx={{ m: 1 }} checked={check} onChange={handleChange} />
      <Typography variant="h6">{title}</Typography>
    </Box>
  );
};

export default PermissionSwitch;

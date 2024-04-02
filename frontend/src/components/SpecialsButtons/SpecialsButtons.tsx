import { Box } from "@mui/material";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";

const SpecialsButtons = () => {
  return (
    <Box className={`flex justify-start items-center gap-2`}>
      <PrimaryButton>Add Owner</PrimaryButton>
      <PrimaryButton>Add Company</PrimaryButton>
      <PrimaryButton>Add Transaction</PrimaryButton>
    </Box>
  );
};

export default SpecialsButtons;

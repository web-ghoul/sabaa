import { Box, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";

const SpecialsButtons = () => {
  const lgScreen = useMediaQuery("(max-width:1200px)");
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();

  return (
    <Box className={`flex justify-start items-center gap-2`}>
      {!lgScreen && (
        <PrimaryButton
          onClick={() => navigate(`${import.meta.env.VITE_ADD_OWNER_ROUTE}`)}
        >
          Add Owner
        </PrimaryButton>
      )}
      {!mdScreen && (
        <PrimaryButton
          onClick={() => navigate(`${import.meta.env.VITE_ADD_COMPANY_ROUTE}`)}
        >
          Add Company
        </PrimaryButton>
      )}
      {!smScreen && (
        <PrimaryButton
          onClick={() =>
            navigate(`${import.meta.env.VITE_ADD_TRANSACTION_ROUTE}`)
          }
        >
          Add Transaction
        </PrimaryButton>
      )}
    </Box>
  );
};

export default SpecialsButtons;

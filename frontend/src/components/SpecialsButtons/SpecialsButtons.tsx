import { AddRounded } from "@mui/icons-material";
import { Box, useMediaQuery } from "@mui/material";
import Button from "../Button/Button";

const SpecialsButtons = () => {
  const lgScreen = useMediaQuery("(max-width:1200px)");
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");

  return (
    <Box className={`flex justify-start items-center gap-2`}>
      {!lgScreen && <Button title={"Add Owner"} icon={<AddRounded />} />}
      {!mdScreen && <Button title={"Add Company"} icon={<AddRounded />} />}
      {!smScreen && (
        <Button
          title={"Add Transaction"}
          icon={<AddRounded />}
          variant={"under development"}
        />
      )}
    </Box>
  );
};

export default SpecialsButtons;

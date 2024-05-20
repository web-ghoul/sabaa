import {
  CopyAllRounded,
  FiberManualRecordRounded,
  RemoveRedEyeRounded,
  VisibilityOffRounded,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { handleCopy } from "../../functions/handleCopy";

const PasswordBox = ({ password }: { password: string }) => {
  const [view, setView] = useState(false);

  const handleToggle = () => {
    setView(!view);
  };
  return (
    <Box
      className={`px-2 py-1 bg-blue-200 rounded-md border border-blue-900 flex justify-start items-center gap-2`}
    >
      {view ? (
        <Typography variant="h6">{password}</Typography>
      ) : (
        <Box className={`flex justify-start items-center &>svg:!text-[16px]`}>
          {Array(15)
            .fill(0)
            .map((_, i) => (
              <FiberManualRecordRounded className={`!text-[10px]`} key={i} />
            ))}
        </Box>
      )}
      <IconButton
        onClick={() => {
          handleCopy(password, false);
          handleToggle();
        }}
        className={`!p-0 flex justify-center items-center`}
      >
        {view && (
          <CopyAllRounded
            className={`!text-[20px] md:!text-[18px] sm:!text-[16px]`}
          />
        )}
      </IconButton>
      <IconButton
        onClick={handleToggle}
        className={`!p-0 flex justify-center items-center`}
      >
        {view ? (
          <VisibilityOffRounded
            className={`!text-[20px] md:!text-[18px] sm:!text-[16px]`}
          />
        ) : (
          <RemoveRedEyeRounded
            className={`!text-[20px] md:!text-[18px] sm:!text-[16px]`}
          />
        )}
      </IconButton>
    </Box>
  );
};

export default PasswordBox;

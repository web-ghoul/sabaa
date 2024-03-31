import { SwapVertRounded } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { SortBoxTypes } from "../types/components.types";

const SortBox = ({ title, handling, asc, desc, jc }: SortBoxTypes) => {
  const iconClasses = `!text-[17px] md:!text-[15px] sm:!text-[12px]`;

  return (
    <Box
      onClick={handling}
      className={`flex justify-${jc} items-center gap-2 md:gap-1 cursor-pointer`}
    >
      <Box className={`text-white`}>{title}</Box>
      <IconButton onClick={handling} className={`!p-0 !text-white`}>
        {asc ? (
          <FaSortAmountDown className={iconClasses} />
        ) : desc ? (
          <FaSortAmountUp className={iconClasses} />
        ) : (
          <SwapVertRounded className={iconClasses} />
        )}
      </IconButton>
    </Box>
  );
};

export default SortBox;

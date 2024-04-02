import { SwapVertRounded } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { SortBoxTypes } from "../types/components.types";

const SortBox = ({ title, handling, asc, desc, jc }: SortBoxTypes) => {
  const iconClasses = `!text-[16px] md:!text-[14px] sm:!text-[12px]`;

  return (
    <Box
      className={`flex justify-${jc} items-center gap-2 md:gap-1 cursor-pointer`}
    >
      {title}
      <IconButton onClick={handling} className={`!p-0 `}>
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

import { SwapVertRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { SortBoxTypes } from "../types/components.types";

const SortBox = ({ title, handling, asc, desc, jc }: SortBoxTypes) => {
  const iconSwapClasses = `!text-[16px] md:!text-[14px] sm:!text-[12px]`;

  const iconSortClasses = `!text-[13px] md:!text-[11px] sm:!text-[9px]`;

  return (
    <Button
      onClick={handling}
      className={`flex justify-${jc} items-center gap-2 md:gap-1 cursor-pointer !text-dark !font-[700]`}
    >
      {title}
      {asc ? (
        <FaSortAmountDown className={iconSortClasses} />
      ) : desc ? (
        <FaSortAmountUp className={iconSortClasses} />
      ) : (
        <SwapVertRounded className={iconSwapClasses} />
      )}
    </Button>
  );
};

export default SortBox;

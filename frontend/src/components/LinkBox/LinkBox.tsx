import { LaunchRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const LinkBox = ({ link }: { link: string }) => {
  return (
    link && (
      <Box
        component={"a"}
        href={link}
        target={"_blank"}
        className={`py-1 font-[700] px-4 md:px-3 sm:py-[2px] sm:!px-2 xs:!px-1 m-auto rounded-md sm:rounded-sm w-fit bg-blue-200 text-blue-500 flex justify-center items-center gap-1`}
      >
        <Typography variant="h6" className={`!font-[700]`}>
          {link}
        </Typography>
        <LaunchRounded
          className={`!text-[15px] text-black md:text-[12px] sm:text-[10px] `}
        />
      </Box>
    )
  );
};

export default LinkBox;

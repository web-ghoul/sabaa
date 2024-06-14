import { Box, Typography } from "@mui/material";
import { TitleTypes } from "../../types/components.types";

const Title = ({ title, head, align }: TitleTypes) => {
  return (
    <Box
      className={`flex ${
        align === "left"
          ? "justify-start w-fit"
          : align === "right"
          ? "justify-end"
          : "justify-center w-fit m-auto"
      }  items-center relative `}
      sx={{
        "&:before": {
          content: `""`,
          display: "block",
          height: "4px",
          width: "80%",
          position: "absolute",
          borderRadius: "100px",
          backgroundColor: (theme) => theme.palette.primary.main,
          bottom: "-5px",
        },
      }}
    >
      <Typography variant={head || "h1"} className={`!font-[700] capitalize`}>
        {title}
      </Typography>
    </Box>
  );
};

export default Title;

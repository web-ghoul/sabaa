import { Box, Divider, Typography } from "@mui/material";

const Border = ({
  title,
  head,
}: {
  title: string;
  head: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  return (
    <Box className={`flex justify-stretch items-center relative`}>
      <Typography
        variant={head || "h6"}
        className={` translate-x-5 bg-white px-2 left w-fit z-10`}
      >
        {title}
      </Typography>
      <Divider className={`absolute w-full z-0 !border-primary !border-2`} />
    </Box>
  );
};

export default Border;

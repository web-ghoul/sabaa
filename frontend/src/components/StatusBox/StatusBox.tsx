import { Box } from "@mui/material";

const StatusBox = ({ status }: { status: string }) => {
  return (
    <Box
      className={`py-1 font-[700] text-white px-4 m-auto rounded-full w-fit ${
        status.toLowerCase() === "pending" && "bg-yellow-400 "
      } ${status.toLowerCase() === "active" && "bg-green-400 "} ${
        status.toLowerCase() === "blocked" && "bg-red-400 "
      }`}
    >
      {status}
    </Box>
  );
};

export default StatusBox;

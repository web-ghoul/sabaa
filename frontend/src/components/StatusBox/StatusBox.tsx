import { Box } from "@mui/material";

const StatusBox = ({ status }: { status: string }) => {
  return (
    status && (
      <Box
        className={`py-1 font-[700] px-4 md:px-3 sm:!px-2 m-auto rounded-md sm:rounded-sm w-fit ${
          status.toLowerCase() === "pending" && "bg-yellow-200 text-yellow-500"
        } ${
          status.toLowerCase() === "active" && "bg-green-200 text-green-500"
        } ${
          (status.toLowerCase() === "blocked" ||
            status.toLowerCase() === "inactive") &&
          "bg-red-200 text-red-500"
        }`}
      >
        {status}
      </Box>
    )
  );
};

export default StatusBox;

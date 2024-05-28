import { Box } from "@mui/material";

const StatusBox = ({ status }: { status: string }) => {
  return (
    status && (
      <Box
        className={`py-1 font-[700] px-4 md:px-3 sm:py-[2px] sm:!px-2 xs:!px-1 m-auto rounded-md sm:rounded-sm w-fit capitalize 
        ${
          (status.toLowerCase() === "pending" ||
            status.toLowerCase() === "abscond") &&
          "bg-yellow-200 text-yellow-500"
        }  
        ${status.toLowerCase() === "active" && "bg-green-200 text-green-500"} 
        ${status.toLowerCase() === "complaint" && "bg-zinc-200 text-zinc-500"} 
        ${
          (status.toLowerCase() === "blocked" ||
            status.toLowerCase() === "inactive" ||
            status.toLowerCase() === "cancel") &&
          "bg-red-200 text-red-500"
        }`}
      >
        {status}
      </Box>
    )
  );
};

export default StatusBox;

import { Box } from "@mui/material";

const StatusBox = ({ status }: { status: string }) => {
  const s = status?.toLowerCase();
  return (
    status && (
      <Box
        className={`py-1 font-[700] px-4 md:px-3 sm:py-[2px] sm:!px-2 xs:!px-1 m-auto rounded-md sm:rounded-sm w-fit capitalize 
        ${
          (s === "pending" || s === "in process" || s === "abscond") &&
          "bg-yellow-200 text-yellow-500"
        }  
        ${
          (s === "active" || s === "approved") && "bg-green-200 text-green-500"
        } 
        ${
          (s === "complaint" || s === "nawakes") && "bg-zinc-200 text-zinc-500"
        } 
        ${
          (s === "blocked" ||
            s === "inactive" ||
            s === "cancel" ||
            s === "rejected") &&
          "bg-red-200 text-red-500"
        }`}
      >
        {status}
      </Box>
    )
  );
};

export default StatusBox;

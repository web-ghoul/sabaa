import { AdminPanelSettingsRounded, PersonRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DataBoxTypes } from "../../types/components.types";

const DataBox = ({ title, flag, value }: DataBoxTypes) => {
  return (
    <Box className={`grid justify-start items-center gap-2`}>
      <Typography variant="h6" className={`!font-[700]`}>
        {title}
      </Typography>
      {value ? (
        typeof value === "string" ? (
          <Typography
            variant="h6"
            className={`${
              value.toLowerCase() === "pending" && "text-yellow-500"
            } ${value.toLowerCase() === "active" && "text-green-500"} ${
              (value.toLowerCase() === "blocked" ||
                value.toLowerCase() === "inactive") &&
              "text-red-500"
            } flex justify-start items-center gap-1`}
          >
            {value.toLowerCase() === "admin" && (
              <AdminPanelSettingsRounded
                className={"text-primary !text-[20px]"}
              />
            )}
            {value.toLowerCase() === "user" && (
              <PersonRounded className={"text-primary !text-[20px]"} />
            )}
            {flag && <LazyLoadImage src={flag} alt={"flag"} />}
            {value || "-"}
          </Typography>
        ) : (
          value
        )
      ) : (
        <Typography variant="h6">-</Typography>
      )}
    </Box>
  );
};

export default DataBox;

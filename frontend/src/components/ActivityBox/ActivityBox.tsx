import { Box, Tooltip, Typography } from "@mui/material";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { handleDate } from "../../functions/handleDate";
import { handleDateForPost } from "../../functions/handleDateForPost";
import { ActivityTypes } from "../../types/store.types";

const ActivityBox = ({ activity }: { activity: ActivityTypes }) => {
  const { avatar, userName, userId, action, route, id, ownerType, createdAt } =
    activity;
  const { defaultAvatar } = useContext(AppContext);

  return (
    <Box className={`flex justify-start items-start gap-2 sm:!gap-1`}>
      <Box
        className={`flex justify-center items-center overflow-hidden rounded-full
          w-[50px] h-[50px] md:w-[45px] md:h-[45px] sm:!w-[40px] sm:!h-[40px]
        `}
      >
        <LazyLoadImage
          alt={"avatar"}
          src={
            avatar
              ? `${import.meta.env.VITE_SERVER_URL}/${avatar}`
              : defaultAvatar
          }
        />
      </Box>
      <Box className={`grid justify-start items-center gap-2 sm:!gap-1`}>
        <Box className={`flex justify-start items-center gap-1 !capitalize`}>
          <Link to={`${import.meta.env.VITE_USERS_ROUTE}/${userId?._id}`}>
            <Typography variant={"h6"} className={`!font-[700]`}>
              {userName}
            </Typography>
          </Link>
          <Typography variant="h6">
            {action === "create" ? "create new" : action}
          </Typography>
          <Link
            to={`${
              route === "owner"
                ? ownerType === "owner"
                  ? import.meta.env.VITE_OWNERS_ROUTE
                  : ownerType === "pro"
                  ? import.meta.env.VITE_PROS_ROUTE
                  : ownerType === "customer" &&
                    import.meta.env.VITE_CUSTOMERS_ROUTE
                : route === "user"
                ? import.meta.env.VITE_USERS_ROUTE
                : route === "job-title"
                ? import.meta.env.VITE_JOBS_ROUTE
                : route === "employee"
                ? import.meta.env.VITE_EMPLOYEES_ROUTE
                : route === "nationality"
                ? import.meta.env.VITE_NATIONALITIES_ROUTE
                : route === "company" && import.meta.env.VITE_COMPANIES_ROUTE
            }/${id}`}
          >
            <Typography variant={"h6"} className={`!font-[700] !capitalize`}>
              {route === "job-title"
                ? "Job"
                : route === "owner"
                ? ownerType === "pro"
                  ? "Officer"
                  : ownerType
                : route}
            </Typography>
          </Link>
        </Box>
        <Tooltip title={handleDate(createdAt, true)}>
          <Typography
            variant={"subtitle2"}
            className={`text-primary !font-[700]`}
          >
            {handleDateForPost(createdAt)}
          </Typography>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ActivityBox;

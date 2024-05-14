import { NotificationsRounded } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ActivityTypes } from "../../types/store.types";
import NotificationBox from "./NotificationBox";

const NatificationsBox = () => {
  const { recentActivities, isLoading } = useSelector(
    (state: RootState) => state.recentActivities
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSeeAll = () => {};

  return (
    <Box>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={`hover:text-primary`}
      >
        <Badge
          badgeContent={0}
          color="primary"
          sx={{ "& span": { color: (theme) => theme.palette.common.white } }}
        >
          <NotificationsRounded className={`text-secondary`} />
        </Badge>
      </IconButton>
      <Menu
        className={`grid justify-stretch items-center gap-0`}
        open={Boolean(open)}
        onClose={handleClose}
        anchorEl={anchorEl}
        elevation={3}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box className={`p-2 grid justify-stretch items-center gap-4`}>
          <Box className={`p-2 grid justify-stretch items-center gap-2`}>
            {!isLoading && recentActivities ? (
              recentActivities.map((activity: ActivityTypes, i: number) => (
                <NotificationBox activity={activity} key={i} />
              ))
            ) : (
              <></>
            )}
          </Box>
          <Button onClick={handleSeeAll}>
            <Typography variant="subtitle1">See all activities</Typography>
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default NatificationsBox;

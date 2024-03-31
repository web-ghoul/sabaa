import { NotificationsRounded } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { BadgeNotificationTypes } from "../../types/components.types";

const BadgeNotification = ({ not }: BadgeNotificationTypes) => {
  return (
    <IconButton>
      <Badge
        badgeContent={not || 0}
        color="primary"
        sx={{ "& span": { color: (theme) => theme.palette.common.white } }}
      >
        <NotificationsRounded className={`text-secondary`} />
      </Badge>
    </IconButton>
  );
};

export default BadgeNotification;

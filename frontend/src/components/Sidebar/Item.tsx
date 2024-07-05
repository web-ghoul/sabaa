import { ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";
import {
  Box,
  IconButton,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../contexts/SidebarsContext";
import useCurrentPath from "../../hooks/useCurrentPath";
import { SidebarItemTypes } from "../../types/components.types";

const Item = ({ icon, title, url, sub, children }: SidebarItemTypes) => {
  const { openSidebar, handleCloseSidebar } = useContext(SidebarContext);
  const { currentPath } = useCurrentPath(url);
  const [openSub, setOpenSub] = useState(false);
  const mdScreen = useMediaQuery("(max-width:992px)");

  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    display: `${openSidebar && "none"}`,
    [`& .${tooltipClasses.arrow}`]: {
      opactiy: "0 !important",
      backgroundColor: "transparent",
      color: "transparent",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[10],
      fontSize: `14px !important`,
      padding: "10px !important",
    },
  }));

  return !sub ? (
    <Link
      to={url}
      onClick={() => {
        if (mdScreen) {
          handleCloseSidebar();
        }
      }}
    >
      <BootstrapTooltip title={title} placement="right">
        <IconButton
          className={`${
            (mdScreen || openSidebar) && "!flex !justify-start !px-4"
          } items-center gap-2  ${
            currentPath ? "!text-primary" : "!text-white"
          } hover:!text-primary w-full`}
          sx={{ "& > svg": { fontSize: "20px" } }}
        >
          {icon}
          {mdScreen ? (
            <Typography variant="h6">{title}</Typography>
          ) : (
            openSidebar && <Typography variant="h6">{title}</Typography>
          )}
        </IconButton>
      </BootstrapTooltip>
    </Link>
  ) : (
    <Box className={`grid justify-stretch items-center`}>
      <BootstrapTooltip title={title} placement="right">
        <IconButton
          className={`${
            (mdScreen || openSidebar) && `!flex !justify-between !px-4`
          } items-center gap-2  ${
            currentPath ? "!text-primary" : "!text-white"
          } hover:!text-primary w-full`}
          sx={{ "& > svg": { fontSize: "20px" } }}
          onClick={() => setOpenSub(!openSub)}
        >
          <Box className={`flex justify-start items-center gap-2`}>
            {icon}
            {mdScreen ? (
              <Typography variant="h6">{title}</Typography>
            ) : (
              openSidebar && <Typography variant="h6">{title}</Typography>
            )}
          </Box>

          {openSidebar &&
            (openSub ? <ExpandMoreRounded /> : <ExpandLessRounded />)}
        </IconButton>
      </BootstrapTooltip>

      <Box
        className={`grid justify-stretch items-center ${
          openSidebar ? "pl-4" : "!p-0"
        } transition-all overflow-hidden ${openSub ? "h-full" : "h-0"}`}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Item;

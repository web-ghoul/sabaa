import {
  IconButton,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarContext } from "../../contexts/SidebarsContext";
import { SidebarItemTypes } from "../../types/components.types";

const Item = ({ icon, title, url }: SidebarItemTypes) => {
  const { openSidebar, handleCloseSidebar } = useContext(SidebarContext);
  const [currentPath, setCurrentPath] = useState(false);
  const { pathname } = useLocation();
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

  useEffect(() => {
    if (`/${pathname.split("/")[1]}` === url) {
      setCurrentPath(true);
    }
  }, [currentPath, url, pathname]);

  return (
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
          } items-center gap-2 !text-white ${
            currentPath && "!text-primary"
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
  );
};

export default Item;

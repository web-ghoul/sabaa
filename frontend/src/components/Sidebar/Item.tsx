import {
  IconButton,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";
<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
=======
import { useContext } from "react";
import { Link } from "react-router-dom";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import { SidebarContext } from "../../contexts/SidebarsContext";
import { SidebarItemTypes } from "../../types/components.types";

const Item = ({ icon, title, url }: SidebarItemTypes) => {
  const { openSidebar } = useContext(SidebarContext);
<<<<<<< HEAD
  const [currentPath, setCurrentPath] = useState(false);
  const { pathname } = useLocation();
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
<<<<<<< HEAD
    display: `${openSidebar && "none"}`,
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.primary.main,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: theme.shadows[10],
    },
  }));

<<<<<<< HEAD
  useEffect(() => {
    if (`/${pathname.split("/")[1]}` === url) {
      setCurrentPath(true);
    }
  }, [currentPath, url, pathname]);

=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  return (
    <Link to={url}>
      <BootstrapTooltip title={title} placement="right">
        <IconButton
          className={`${
            openSidebar && "!flex !justify-start !px-4"
<<<<<<< HEAD
          } items-center gap-2 !text-white ${
            currentPath && "!text-primary"
          } hover:!text-primary w-full`}
=======
          } items-center gap-2 !text-white hover:!text-primary w-full`}
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
          sx={{ "& > svg": { fontSize: "20px" } }}
        >
          {icon}
          {openSidebar && <Typography variant="h6">{title}</Typography>}
        </IconButton>
      </BootstrapTooltip>
    </Link>
  );
};

export default Item;
